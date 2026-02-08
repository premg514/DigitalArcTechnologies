import React from "react";
import { MousePosition } from "@/types";

interface CursorGlowProps {
  mousePosition: MousePosition;
}

const CursorGlow: React.FC<CursorGlowProps> = ({ mousePosition }) => {
  return (
    <div
      className="cursor-glow"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
    />
  );
};

export default CursorGlow;