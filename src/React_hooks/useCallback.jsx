import React, { useState, useCallback } from "react";

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
        <h1 style={{color:"red"}}>UseCallback Example</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default UseCallbackExample;