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
    setProductsShowVisible(true)
    setCurrentProduct(product)
  }

  const handleUpdateProduct = (id, params, successCallBack) => {
    console.log("handleUpdateProduct", params);
    axios.patch(`http://localhost:3000/products/${id}.json`, params).then(response => {
      setProducts(
        products.map(product => {
          if (product.id === response.data.id) {
            return response.data;
          } else {
            return product
          }
        })
      )
      successCallBack()
      handleClose()
    })
  }

  const handleDestroyProduct = (product) => {
    axios.delete(`http://localhost:3000/products/${product.id}.json`).then(response => {
      setProducts(products.filter(p => p.id !== product.id))
      handleClose();
    })
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
        <ProductsShow product={currentProduct} onUpdateProduct={handleUpdateProduct} onDestroyProduct={handleDestroyProduct} />
      </Modal>

    </main>
  )
}