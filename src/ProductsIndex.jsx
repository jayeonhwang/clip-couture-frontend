export function ProductsIndex(props) {


  return (
    <div>
      <h1>All products</h1>
      {props.products.map(product => (
        <div key={product.id}>
          {product.images.length > 0 && <img src={product.images[0].url} />}
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button onClick={() => props.onShowProduct(product)}>More info</button>
          <hr />
        </div>
      ))}
    </div>
  );
}