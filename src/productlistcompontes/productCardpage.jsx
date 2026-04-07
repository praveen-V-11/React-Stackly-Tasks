import '../styles/product.css'
function ProductCard({ name, price, onAdd }) {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button onClick={onAdd}>Add to Cart</button>
    </div>
  );
}
export default ProductCard