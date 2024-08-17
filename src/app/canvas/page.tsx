"use client";

import React, { useEffect, useState, useRef } from "react";
import Swatch from "./components/Swatch";
import { RoughGenerator } from "roughjs/bin/generator";
import { RoughCanvas } from "roughjs/bin/canvas";

interface Point {
  x: number;
  y: number;
}

interface Element {
  id: number;
  type: string;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  roughEle?: any;
  points?: Point[];
  color: string;
}

const midPointBtw = (p1: Point, p2: Point): Point => {
  return {
    x: p1.x + (p2.x - p1.x) / 2,
    y: p1.y + (p2.y - p1.y) / 2,
  };
};

const adjustElementCoordinates = (element: Element): Element => {
  const { type, x1, y1, x2, y2 } = element;
  if (type === "rectangle") {
    const minX = Math.min(x1!, x2!);
    const maxX = Math.max(x1!, x2!);
    const minY = Math.min(y1!, y2!);
    const maxY = Math.max(y1!, y2!);
    return { ...element, x1: minX, y1: minY, x2: maxX, y2: maxY };
  } else if (type === "line") {
    if (x1! < x2! || (x1! === x2! && y1! < y2!)) {
      return { ...element };
    } else {
      return { ...element, x1: x2, y1: y2, x2: x1, y2: y1 };
    }
  }
  return element;
};
const createElement = (
  id: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  type: string,
  color: string
): Element => {
  const roughGenerator = new RoughGenerator();
  let roughEle;

  switch (type) {
    case "line":
      roughEle = roughGenerator.line(x1, y1, x2, y2, { stroke: color });
      break;
    case "rectangle":
      roughEle = roughGenerator.rectangle(x1, y1, x2 - x1, y2 - y1, {
        stroke: color,
      });
      break;
    case "circle":
      roughEle = roughGenerator.circle(
        (x1 + x2) / 2,
        (y1 + y2) / 2,
        Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
        { stroke: color }
      );
      break;
    case "pencil":
      return { id, type, points: [{ x: x1, y: y1 }], color };
    case "eraser":
      return { id, type, points: [{ x: x1, y: y1 }], color: "white" };
    default:
      roughEle = null;
  }

  return { id, type, x1, y1, x2, y2, roughEle, color };
};

const Canvas: React.FC = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [action, setAction] = useState<
    "none" | "drawing" | "sketching" | "erasing"
  >("none");
  const [toolType, setToolType] = useState<
    "pencil" | "line" | "rectangle" | "circle" | "eraser"
  >("pencil");
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [history, setHistory] = useState<Element[][]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [color, setColor] = useState<string>("#000000");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 2;

    contextRef.current = context;

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    drawElements();
  }, [elements]);

  const drawElements = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = new RoughCanvas(canvas);

    elements.forEach((element) => {
      context.strokeStyle = element.color;
      context.lineWidth = 2;

      if (element.type === "pencil") {
        drawPencilElement(element, context);
      } else if (element.type === "eraser") {
        drawEraserElement(element, context);
      } else if (element.roughEle) {
        roughCanvas.draw(element.roughEle);
      }
    });
  };

  const drawPencilElement = (
    element: Element,
    context: CanvasRenderingContext2D
  ) => {
    if (!element.points || element.points.length < 2) return;
    context.beginPath();
    context.moveTo(element.points[0].x, element.points[0].y);
    for (let i = 1; i < element.points.length; i++) {
      context.lineTo(element.points[i].x, element.points[i].y);
    }
    context.stroke();
  };

  const drawEraserElement = (
    element: Element,
    context: CanvasRenderingContext2D
  ) => {
    if (!element.points || element.points.length < 2) return;
    context.strokeStyle = "white";
    context.lineWidth = 20;
    context.beginPath();
    context.moveTo(element.points[0].x, element.points[0].y);
    for (let i = 1; i < element.points.length; i++) {
      context.lineTo(element.points[i].x, element.points[i].y);
    }
    context.stroke();
  };

  const getMouseCoordinates = (
    event: React.MouseEvent<HTMLCanvasElement>
  ): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getMouseCoordinates(e);

    if (toolType === "pencil" || toolType === "eraser") {
      setAction(toolType === "eraser" ? "erasing" : "sketching");
      const id = elements.length;
      const newElement: Element = {
        id,
        type: toolType,
        points: [{ x, y }],
        color: toolType === "eraser" ? "white" : color,
      };
      setElements((prevElements) => [...prevElements, newElement]);
      setSelectedElement(newElement);
    } else {
      setAction("drawing");
      const id = elements.length;
      const element = createElement(id, x, y, x, y, toolType, color);
      setElements((prevElements) => [...prevElements, element]);
      setSelectedElement(element);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getMouseCoordinates(e);

    if (action === "sketching" || action === "erasing") {
      const index = elements.length - 1;
      const updatedElement = {
        ...elements[index],
        points: [...(elements[index].points || []), { x, y }],
      };
      setElements((prevElements) =>
        prevElements.map((el, i) => (i === index ? updatedElement : el))
      );
    } else if (action === "drawing") {
      const index = elements.length - 1;
      const { x1, y1 } = elements[index];
      updateElement(index, x1!, y1!, x, y, toolType);
    }
  };

  const handleMouseUp = () => {
    if (action === "drawing") {
      const index = elements.length - 1;
      const element = adjustElementCoordinates(elements[index]);
      updateElement(
        element.id,
        element.x1!,
        element.y1!,
        element.x2!,
        element.y2!,
        element.type
      );
    }
    setAction("none");
    setSelectedElement(null);
    addToHistory();
  };

  const updateElement = (
    index: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    type: string
  ) => {
    const updatedElement = createElement(index, x1, y1, x2, y2, type, color);
    setElements((prevElements) =>
      prevElements.map((el, i) => (i === index ? updatedElement : el))
    );
  };

  const addToHistory = () => {
    setHistory((prevHistory) => [
      ...prevHistory.slice(0, historyIndex + 1),
      elements,
    ]);
    setHistoryIndex((prevIndex) => prevIndex + 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex((prevIndex) => prevIndex - 1);
      setElements(history[historyIndex - 1]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex((prevIndex) => prevIndex + 1);
      setElements(history[historyIndex + 1]);
    }
  };

  return (
    <div className="w-full h-screen bg-white">
      <div className="p-4">
        <Swatch
          setToolType={setToolType}
          setColor={setColor}
          undo={undo}
          redo={redo}
          canUndo={historyIndex > 0}
          canRedo={historyIndex < history.length - 1}
        />
      </div>
      <canvas
        ref={canvasRef}
        className="border border-black bg-white"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        Canvas
      </canvas>
    </div>
  );
};

export default Canvas;
