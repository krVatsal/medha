"use client";
import React from "react";
import Excalidraw, {
  convertToExcalidrawElements,
  ExcalidrawProps,
} from "@excalidraw/excalidraw";

import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  const elements = convertToExcalidrawElements([
    {
      type: "rectangle",
      id: "rect-1",
      width: 186.47265625,
      height: 141.9765625,
    },
  ]);

  console.info(elements);

  return (
    <div style={{ height: "500px", width: "500px" }}>
      <Excalidraw
        initialData={{
          elements: elements,
          appState: {
            viewBackgroundColor: "#ffffff",
          },
        }}
      />
    </div>
  );
};

export default ExcalidrawWrapper;
