import React from "react";
import { useState } from "react";



function Isvisible() {
  const [isvisible, setIsvisible] = useState(false);

  const Click = () => {
    setIsvisible(!isvisible);
  };
  return (
    <div>
      <button onClick={Click} className="btn btn-secondary btn-success">
        {isvisible ? "Hide" : "Show"}
      </button>

      {isvisible && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          autem voluptatibus ad nulla a ea dolore nisi, similique enim ratione.
          Tempora, quaerat odit quidem sunt animi perferendis eius quae labore.
        </p>
      )}
    </div>
  );
}

export default Isvisible;
