"use client";
import { useRef, useState, useEffect, MouseEvent } from "react";

const Whiteboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState<string>("black");
  const [lineWidth, setLineWidth] = useState<number>(5);
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const [isErasing, setIsErasing] = useState<boolean>(false);
  const [canvasHistory, setCanvasHistory] = useState<ImageData[]>([]);
  const [redoHistory, setRedoHistory] = useState<ImageData[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
    setShowColorPicker(false); // Close color picker after selection
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 800;
      canvas.height = 1200;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineCap = "round";
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;
      }
    }
  }, [color, lineWidth]);

  const startDrawing = (event: MouseEvent<HTMLCanvasElement>) => {
    if (historyIndex < canvasHistory.length - 1) {
      setCanvasHistory(canvasHistory.slice(0, historyIndex + 1));
      setRedoHistory([]);
    }
    if (ctxRef.current && canvasRef.current) {
      setCanvasHistory([
        ...canvasHistory,
        ctxRef.current.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        ),
      ]);
      setHistoryIndex(historyIndex + 1);
    }

    const { offsetX, offsetY } = event.nativeEvent;
    if (ctxRef.current) {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
  };

  const finishDrawing = () => {
    if (ctxRef.current) {
      ctxRef.current.closePath();
      setIsDrawing(false);
    }
  };

  const draw = (event: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctxRef.current) return;
    const { offsetX, offsetY } = event.nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };

  const undo = () => {
    if (historyIndex > 0 && canvasRef.current && ctxRef.current) {
      setRedoHistory([
        ctxRef.current.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        ),
        ...redoHistory,
      ]);
      setHistoryIndex(historyIndex - 1);
      ctxRef.current.putImageData(canvasHistory[historyIndex - 1], 0, 0);
    }
  };

  const redo = () => {
    if (redoHistory.length > 0 && canvasRef.current && ctxRef.current) {
      const nextHistoryIndex = historyIndex + 1;
      if (nextHistoryIndex < canvasHistory.length) {
        setCanvasHistory([
          ...canvasHistory.slice(0, nextHistoryIndex),
          redoHistory[0],
        ]);
        setHistoryIndex(nextHistoryIndex);
        ctxRef.current.putImageData(redoHistory[0], 0, 0);
        setRedoHistory(redoHistory.slice(1));
      }
    }
  };

  const clearCanvas = () => {
    if (canvasRef.current && ctxRef.current) {
      ctxRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      setCanvasHistory([]);
      setRedoHistory([]);
      setHistoryIndex(-1);
    }
  };

  const toggleEraser = () => {
    setIsErasing(!isErasing);
    setColor(isErasing ? "black" : "white"); // Set color to white when erasing
  };

  return (
    <div className="bg-gray-700 flex flex-col justify-end items-center min-h-screen">
      <div className="flex justify-between w-full p-3 bg-white">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={undo}
          disabled={historyIndex <= 0}
        >
          Undo
        </button>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={redo}
          disabled={redoHistory.length === 0}
        >
          Redo
        </button>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        onMouseLeave={finishDrawing}
        style={{ border: "2px solid black", backgroundColor: "#ededed" }}
      />
      <div className="text-black bg-white w-[800px] sticky bottom-0 p-3 flex justify-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <svg
              fill={color}
              width="30px"
              height="30px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setShowColorPicker(!showColorPicker)}
              style={{ cursor: "pointer" }}
            >
              <path d="M93.95 290.03A327.038 327.038 0 0 0 .17 485.11l-.03.23c-1.7 15.28 11.21 28.2 26.49 26.51a327.02 327.02 0 0 0 195.34-93.8l75.4-75.4-128.02-128.02-75.4 75.4zM485.49 26.51c-35.35-35.35-92.67-35.35-128.02 0l-21.76 21.76-36.56-36.55c-15.62-15.62-40.95-15.62-56.56 0L138.47 115.84c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0l87.15-87.15 19.59 19.59L191.98 192 320 320.02l165.49-165.49c35.35-35.35 35.35-92.66 0-128.02z" />
            </svg>

            {showColorPicker && (
              <input
                type="color"
                value={color}
                onChange={handleColorChange}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  zIndex: 10,
                  cursor: "pointer",
                }}
              />
            )}
          </div>

          <label>Brush Size: </label>
          <input
            type="range"
            min="1"
            max="50"
            value={lineWidth}
            onChange={(e) => setLineWidth(Number(e.target.value))}
          />
          <button
            className={`bg-${isErasing ? 'green' : 'red'}-500 text-white px-3 py-1 rounded`}
            onClick={toggleEraser}
          >
            {isErasing ? 'Drawing' : 'Eraser'}
          </button>
          <button
            className="bg-green-500 text-white px-3 py-1 rounded"
            onClick={clearCanvas}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;
