import { useState } from "react";
const EventHandlingComponent = () => {

    const [name, setName] = useState("");
    return ( 
        <>
        <h1>Event Handling </h1>
        <div>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name "
      />
      <h2>Hello {name}</h2>
    </div>
        </>
     );
}
 
export default EventHandlingComponent;