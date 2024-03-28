import { useState, useEffect } from "react";
import axios from "axios";

export function ProductsNew(props) {
  const [images, setImages] = useState([''])
  const [suppliers, setSuppliers] = useState([])
  const [categories, setCategories] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target)
    props.onCreateProduct(params, () => event.target.reset())
  }

  const suppliersIndex = () => {
    axios.get(`/suppliers.json`).then(response => {
      console.log(response.data)
      setSuppliers(response.data)
    })
  }

  const categoriesIndex = () => {
    axios.get(`/categories.json`).then(response => {
      setCategories(response.data)
    })
  }

  const addImage = () => {
    setImages([...images, ''])
  }

  useEffect(suppliersIndex, [])
  useEffect(categoriesIndex, [])


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
          Description: <input name="description" type="text" />
        </div>

        {images.map(image => (
          <p>Image:<input name="images[]" type="text" /></p>
        ))}

        <div>
          supplier:
          <select name="supplier">
            {suppliers.map(supplier => (
              <option>{supplier.name}</option>
            ))}
          </select>
        </div>

        <div>
          categories:
          <select name="category">
            {categories.map(category => (
              <option>{category.name}</option>
            ))}
          </select>
        </div>


        <button type="submit">Create Product</button>
      </form>

      <button onClick={addImage}>add more image</button>

    </div>
  );
}