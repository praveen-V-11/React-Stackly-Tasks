function PropsExample() {

  function User({ name, age }) {
    return (
      <div>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Props Example</h1>

      <User name="Praveen" age={22} />
      <User name="Rahul" age={25} />
    </div>
  );
}

export default PropsExample;