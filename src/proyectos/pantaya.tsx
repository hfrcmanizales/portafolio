import React from "react";
import "../css/clima.css";

// 1. Define an interface for the props of the Pantaya component
interface PantayaProps {
  // 'input' is expected to be a string, as it's being displayed directly.
  input: string;
}

// 2. Apply the 'PantayaProps' interface to your functional component
function Pantaya({ input }: PantayaProps) {
  return (
    <div className="inputs">
      {input} {/* This is where the string 'input' will be rendered */}
    </div>
  );
}

export default Pantaya;