import axios from 'axios'
import { useState, useEffect } from 'react'

export function CartedProductsIndex() {
  const [cartedProducts, setCartedProducts] = useState([])

  const getCartedProducts = () => {
    console.log('getting products')
    axios.get('http://localhost:3000/carted_products.json').then(response => {
      console.log(response.data)
      setCartedProducts(response.data)
    })
  }

  const deleteCartedProduct = (cartedProductId) => {
    console.log('delete cartedProduct')
    axios.delete(`http://localhost:3000/carted_products/${cartedProductId}.json`).then(response => {
      setCartedProducts(cartedProducts.filter(c => c.id !== cartedProductId))
    })
  }

  useEffect(getCartedProducts, [])

  return (
    <div>
      <p>This is the shopping Carts</p>
      {cartedProducts.map(cartedProduct => (
        <div key={cartedProduct.id}>
          <p>name: {cartedProduct.product.name}</p>
          <p>Price: {cartedProduct.product.price}</p>
          <p>quantity: {cartedProduct.quantity}</p>
          <button onClick={() => deleteCartedProduct(cartedProduct.id)}>delete from cart</button>
          <hr />
        </div>
      ))}
    </div>
  )
}
