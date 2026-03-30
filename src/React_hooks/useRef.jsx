import React, { useRef } from "react";

function UseRefExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
        <h1 style={{color:"red"}}>UseRef Example</h1>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}
export default UseRefExample;