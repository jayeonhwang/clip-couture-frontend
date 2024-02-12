export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target)
    props.onCreateProduct(params, () => event.target.reset())
  }

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="integer" />
        </div>
        <div>
          Description: <input name="description" type="integer" />
        </div>
        <div>
          supplier_id: <input name="supplier_id" type="integer" />
        </div>
        <div>
          Images: <input name="url" type="text" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}