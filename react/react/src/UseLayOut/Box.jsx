import { useEffect, useLayoutEffect, useRef, useState } from "react";

function Box() {
  const boxRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(boxRef.current.offsetWidth);
  }, []);

  return (
    <>
      <div ref={boxRef} style={{ width: "200px", height: "100px", background: "skyblue" }}>
        Box
      </div>
      <p>Width: {width}px</p>
    </>
  );
}

export default Box;
