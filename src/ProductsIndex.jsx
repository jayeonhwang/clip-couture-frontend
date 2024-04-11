export function ProductsIndex(props) {


  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {props.products.map(product => (
          <div key={product.id}>
            <img width="300px" src={product.images[0].url} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.supplier_name}</p>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => props.onShowProduct(product)}>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}