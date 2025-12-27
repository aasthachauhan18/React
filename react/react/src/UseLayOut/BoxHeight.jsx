import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function BoxHeight() {
  const Boxref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(Boxref.current.offsetHeight);
  }, []);
  
  return (
    <>
     <div
        ref={Boxref}
        style={{ width: "200px", height: "300px", background: "lightblue" }}
      />
      <p>Box Height: {height}px</p>
    </>
  )
}

export default BoxHeight;2
