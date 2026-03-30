import React, { useEffect } from "react";

function UseEffectExample() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <>
    <h1 style={{color:"red"}}>UseEffect Example</h1>
    <h1>Check Console</h1>
    <hr />
    </>
  )
  
}

export default UseEffectExample;