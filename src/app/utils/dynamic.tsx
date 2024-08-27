"use client";
import React from "react";
import Excalidraw, { ExcalidrawProps, ExcalidrawElement } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  // Define elements with the required properties
  const elements: ExcalidrawElement[] = [
    {
      type: "rectangle",
      version: 1,
      versionNonce: 0,
      isDeleted: false,
      id: "rect-1",
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      angle: 0,
      x: 100,
      y: 100,
      strokeColor: "#000000",
      backgroundColor: "transparent",
      width: 186.47265625,
      height: 141.9765625,
      seed: 1,
      groupIds: [],
      boundElements: [],
      updated: Date.now(),
      link: null,
      locked: false,
    },
  ];

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
