import Image from "next/image";
import Whiteboard from "./whiteboard/page";
import DrawingTool from "./canvas/page";
import Penciltool from "./canvas/pencilTool/page";
import Canvas from "./canvas/page";
export default function Home() {
  return (
    <div>
      <Canvas />
    </div>
  );
}
