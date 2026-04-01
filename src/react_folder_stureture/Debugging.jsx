function Debuggingexample() {

  const user = null;  

  console.log("User value:", user);

  return (
    <div>
      <h1>Debugging Example</h1>

      <h2>{user ? user.name : "No User Found"}</h2>
    </div>
  );
}

export default Debuggingexample;