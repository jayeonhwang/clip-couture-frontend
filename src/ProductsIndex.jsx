export function ProductsIndex(props) {


  return (
    <div>
      <h1>All products</h1>
      <div className="grid grid-cols-4 gap-4">
        {props.products.map(product => (
          <div key={product.id}>
            {product.images.length > 0 && <img width="300px" src={product.images[0].url} />}
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.supplier_name}</p>
            <button onClick={() => props.onShowProduct(product)}>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}