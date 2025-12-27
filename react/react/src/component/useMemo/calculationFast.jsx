function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const expensiveResult = React.useMemo(() => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total;
  }, [count]); // recalculates only when count changes

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
}
