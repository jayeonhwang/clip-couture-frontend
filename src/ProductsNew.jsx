import { useState } from "react";

export function ProductsNew(props) {
  const [images, setImages] = useState([''])
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target)
    props.onCreateProduct(params, () => event.target.reset())
  }

  const addImage = () => {
    setImages([...images, ''])
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
        {images.map(image => (
          <p>Image:<input name="images[]" type="text" /></p>
        ))}
        <button type="submit">Create Product</button>
      </form>

      <button onClick={addImage}>add more image</button>
    </div>
  );
}