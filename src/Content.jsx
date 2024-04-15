import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow"
import axios from "axios";
import { useState, useEffect } from "react"
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom"
import { Login } from "./Login"
import { Signup } from "./Signup";
import { CartedProductsIndex } from "./CartedProductsIndex";
import { OrderIndex } from "./OrderIndex";
import { OrdersShow } from "./OrderShow";
import { BrandIndex } from "./BrandIndex"


export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setProductsShowVisible] = useState(false)
  const [currentProduct, setCurrentProduct] = useState({})

  const getProducts = () => {
    axios.get("/products.json").then(response => {
      setProducts(response.data);
    })
  }

  const createProduct = (params, successCallBack) => {
    axios.post("/products.json", params).then(
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
    axios.patch(`/products/${id}.json`, params).then(response => {
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
    axios.delete(`/products/${product.id}.json`).then(response => {
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
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProductsIndex products={products} onShowProduct={handleShowProduct} />} />
        <Route path="/new" element={<ProductsNew onCreateProduct={createProduct} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartedProductsIndex />} />
        <Route path="/order" element={<OrderIndex />} />
        <Route path="/order/:id" element={<OrdersShow />} />
        <Route path="/brands/:id" element={<BrandIndex products={products} onShowProduct={handleShowProduct} />} />
      </Routes>
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct} onUpdateProduct={handleUpdateProduct} onDestroyProduct={handleDestroyProduct} />
      </Modal>
    </main>
  )
}