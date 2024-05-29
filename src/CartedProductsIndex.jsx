import axios from 'axios'
import { useState, useEffect } from 'react'
import Stripe from 'stripe'

export function CartedProductsIndex() {
  const [cartedProducts, setCartedProducts] = useState([])

  const getCartedProducts = () => {
    console.log('getting products')
    axios.get('/carted_products.json').then(response => {
      console.log(response.data)
      setCartedProducts(response.data)
    })
  }

  const deleteCartedProduct = (cartedProductId) => {
    console.log('delete cartedProduct')
    axios.delete(`/carted_products/${cartedProductId}.json`).then(response => {
      setCartedProducts(cartedProducts.filter(c => c.id !== cartedProductId))
    })
  }



  const createOrder = () => {
    axios.post(`/orders.json`).then(response => {
      console.log(response.data)
      let stripe = Stripe(import.meta.env.VITE_STRIPE_KEY);

      stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: [
          'card',
        ],
        success_url: `https://poetic-croissant-099c70.netlify.app/order/${response.data.id}`,
        cancel_url: `https://poetic-croissant-099c70.netlify.app/.app`,
        line_items: [
          {
            price_data: {
              unit_amount: +response.data.total * 100,
              currency: 'usd',
              product_data: {
                name: 'Test Product'
              },
            },
            quantity: 1,
          },
        ],
      }).then(session => {
        console.log('printing out the session')
        console.log(session.url)
        window.location.href = session.url
      })

    })


  }

  useEffect(getCartedProducts, [])
  return (
    <div>
      <p>This is the shopping Carts</p>
      {cartedProducts.map(cartedProduct => (
        <div key={cartedProduct.id}>
          {cartedProduct.product_images && cartedProduct.product_images.length > 0 &&
            <img width="300px" src={cartedProduct.product_images[0].url} />
          }
          <p>name: {cartedProduct.product.name}</p>
          <p>Price: {cartedProduct.product.price}</p>
          <p>quantity: {cartedProduct.quantity}</p>
          <button onClick={() => deleteCartedProduct(cartedProduct.id)}>delete from cart</button>
          <hr />
        </div>
      ))}
      <p><button onClick={createOrder}>Buy</button></p>
    </div>

  );


}
