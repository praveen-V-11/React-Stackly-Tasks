function ResuableComponet() {


  function Card({ title }) {
    return (
      <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
        <h2>{title}</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Reusable Component Example</h1>
      <Card title="Pizza" />
      <Card title="Burger" />
      <Card title="Pasta" />
    </div>
  );
}

export default ResuableComponet ;