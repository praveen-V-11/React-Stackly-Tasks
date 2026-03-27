const ListKeys = () => {
    const fruits = ["Apple", "Banana", "Mango"];

    return (
        <>
        <h1>List & Keys </h1>
        <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
        </>
      );
}
 
export default ListKeys;