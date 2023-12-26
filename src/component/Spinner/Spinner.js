import React from "react";
import { PacmanLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* coolors  */}
      <PacmanLoader size={150} color="#fca311" speedMultiplier={3} />
    </div>
  );
}

// react spinner npm
