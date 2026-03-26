import Greeting from "./Child Component";

function Parent_component() {
  return (
    <div>
      <Greeting name="Praveen" />
      <Greeting name="John" />
    </div>
  );
}

export default Parent_component;