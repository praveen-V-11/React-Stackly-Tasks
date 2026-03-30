import React, { useState, useMemo } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <div>
        <h1 style={{color:"red"}}>UseMemo Example</h1>
      <h2>Result: {expensiveCalculation}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default UseMemoExample;