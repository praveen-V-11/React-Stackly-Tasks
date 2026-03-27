
import EventHandlingComponent from "./Components/EventHandlingcomponent";
import ConditionalRendring from "./Components/Conditional Rendering";
import Function_basedComponents from "./Components/Function_based-Components";
import Class_based_components from "./Components/class-based-components";
import Usestatecomponent from "./Components/useStatecomponents";
import Greeting from "./Props/Child Component";
import Parent_component from "./Props/Parent Component";
import ListKeys from "./Components/ListandKeys";
const App = () => {
  return ( 
    <>
    <h1>Hello React </h1>
    {/* <Function_basedComponents/>
    <Class_based_components/>
    <Parent_component/> */}
    <hr />
    <Usestatecomponent/>
    <hr />
    <EventHandlingComponent/>
    <hr />
        <ConditionalRendring/>
        <hr />
        <ListKeys/>
        </>
        
   );
}
 
export default App;