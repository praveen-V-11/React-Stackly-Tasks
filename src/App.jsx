import Function_basedComponents from "./Components/Function_based-Components";
import Class_based_components from "./Components/class-based-components";
import Greeting from "./Props/Child Component";
import Parent_component from "./Props/Parent Component";
const App = () => {
  return ( 
    <>
    <h1>Hello React </h1>
    <Function_basedComponents/>
    <Class_based_components/>
    <Parent_component/>
    </>
   );
}
 
export default App;