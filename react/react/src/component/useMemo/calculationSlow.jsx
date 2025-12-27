import { useState } from "react";

function slowCalculation(num) {
  console.log("Calculating...");
  // for (let i = 0; i < 10; i++) {}
  for (let i = 0; i < 1_000_000_000; i++) {}
  return num * 2;
}

export default function CountMemoCompSlow() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const result = slowCalculation(count);

  return (
    <div>
      <h2>Result: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}