export function ProductsIndex(props) {


  return (
    <div>
      <div className="justify-items-center my-5 grid grid-cols-3 gap-4">
        {props.products.map(product => (
          <div key={product.id}>
            {product.images && product.images[0] && (
              <img width="300px" src={product.images[0].url} alt={product.name} />
            )}
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.supplier_name}</p>
            <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" onClick={() => props.onShowProduct(product)}>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}