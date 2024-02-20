import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow"
import axios from "axios";
import { useState, useEffect } from "react"
import { Modal } from "./Modal";

export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setProductsShowVisible] = useState(false)
  const [currentProduct, setCurrentProduct] = useState({})

  const getProducts = () => {
    axios.get("http://localhost:3000/products.json").then(response => {
      setProducts(response.data);
    })
  }

  const createProduct = (params, successCallBack) => {
    axios.post("http://localhost:3000/products.json", params).then(
      response => {
        setProducts([...products, response.data])
        successCallBack();
      })
  }

  const handleShowProduct = (product) => {
    console.log("handleClose")
    setProductsShowVisible(true)
    setCurrentProduct(product)
  }

  const handleClose = () => {
    setProductsShowVisible(false)
  }

  useEffect(getProducts, []);

  return (

    <main>
      <h1 className="text-3xl font-bold underline">Clip-Couture</h1>
      <ProductsNew onCreateProduct={createProduct} />
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct} />
      </Modal>

    </main>
  )
}