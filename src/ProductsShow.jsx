import axios from 'axios'

export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target)
    props.onUpdateProduct(props.product.id, params, () => event.target.reset())
  }

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  const addToCart = (event) => {
    console.log('adding cart')
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("/carted_products.json", params).then(response => {
      console.log(response.data)
      window.location.href = "/"
    })
  }


  return (
    <div>
      <p>{props.product.name}</p>
      <p>price: ${props.product.price}</p>
      <p>{props.product.description}</p>

      {/* <form onSubmit={handleSubmit}>
        <p>Name <input defaultValue={props.product.name} name="name" type="text" /></p>
        <p>price <input defaultValue={props.product.price} name="price" type="text" /></p>
        <p>description <input defaultValue={props.product.description} name="description" type="text" /></p>
        <button type="submit">Update Product</button>
      </form>
      <button onClick={handleClick}>Destroy Product</button> */}

      <form onSubmit={addToCart}>
        <div>
          <input name="product_id" type="hidden" defaultValue={props.product.id} />
        </div>
        <div>
          Quantity: <input name="quantity" type="text" />
        </div>
        <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" type="submit">Add To Cart</button>
      </form>

    </div>
  );
}