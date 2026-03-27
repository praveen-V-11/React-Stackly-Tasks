import { useState } from "react";

const Usestatecomponent = () => {

    let [count,setcount] = useState(0)

    function IncreseCount() { 
        setcount(count + 1)
    }

     function DecreseCount() { 
        setcount(count - 1)
    }
    return ( 
        <>
        <h1>Usestate Component</h1>
        <h2>Count:{count}</h2>
        <button onClick={IncreseCount}>Increse</button>
        <button onClick={DecreseCount}>Decrese</button>
        </>
     );
}
 
export default Usestatecomponent;