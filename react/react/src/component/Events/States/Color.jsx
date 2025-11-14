import React from "react";
import { useState } from "react";

function Color() {
  const [mode, setMode] = useState("light");

  const handleClick = () => {
    setMode((prevColor) => (prevColor === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <button className={`btn btn-${mode}`} onClick={handleClick}>
        {mode === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default Color;
