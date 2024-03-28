import axios from "axios"
import { useState, useEffect } from "react"
export function OrderIndex() {
  const [orders, setOrders] = useState([])

  const getOrders = () => {
    console.log("order page")
    axios.get("/orders.json").then(response => {
      setOrders(response.data)
    })
  }


  useEffect(getOrders, [])

  return (
    <div>
      <p>This is order page</p>
      {orders.map(order => (
        <div key={order.id}>
          <p>subtotal: {order.subtotal}</p>
          <p>tax: {order.tax}</p>
          <p>total: {order.total}</p>
          Products in your order:
          {order.carted_products.map(cp => (
            <div key={cp.id}>
              <p>name: {cp.product.name}</p>
              <p>quantity: {cp.quantity}</p>
              <img width="300px" src={cp.product_images[0].url} />
            </div>
          ))}
          < hr />
        </div>
      ))}
    </div>

  )
}