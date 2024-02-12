export function ProductsShow(props) {
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <p>price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
    </div>
  );
}