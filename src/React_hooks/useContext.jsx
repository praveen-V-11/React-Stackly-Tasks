import React, { createContext, useContext } from "react";

const MyContext = createContext();

function Child() {
  const data = useContext(MyContext);
  return <h2>{data}</h2>;
}

function UseContextExample() {
  return (
    <MyContext.Provider value="Hello Praveen">
        <h1 style={{color:"red"}}> UseContext Example</h1>
      <Child />
    </MyContext.Provider>
  );
}

export default UseContextExample;