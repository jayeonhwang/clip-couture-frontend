export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target)
    props.onUpdateProduct(props.product.id, params, () => event.target.reset())
  }

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <p>price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
      <form onSubmit={handleSubmit}>
        <p>Name <input defaultValue={props.product.name} name="name" type="text" /></p>
        <p>price <input defaultValue={props.product.price} name="price" type="text" /></p>
        <p>description <input defaultValue={props.product.description} name="description" type="text" /></p>
        <button type="submit">Update Product</button>
      </form>
      <button onClick={handleClick}>Destroy Product</button>
    </div>
  );
}