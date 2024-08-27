"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";

// Correct dynamic import
const Excalidraw = dynamic(
  () => import("@excalidraw/excalidraw").then(mod => mod.Excalidraw),
  { ssr: false }
);

const ExcalidrawWrapper: React.FC = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Excalidraw
        ref={(api: ExcalidrawImperativeAPI | null) => setExcalidrawAPI(api)}
        initialData={{
          elements: [
            {
              type: "rectangle",
              version: 141,
              versionNonce: 361174001,
              isDeleted: false,
              id: "oDVXy8D6rom3H1-LLH2-f",
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
              width: 200,
              height: 100,
              seed: 1968410350,
              groupIds: [],
              boundElementIds: [],
              updated: 1,
              link: null,
              locked: false,
            },
          ],
          appState: { viewBackgroundColor: "#ffffff" },
          scrollToContent: true,
        }}
      />
    </div>
  );
};

export default ExcalidrawWrapper;
