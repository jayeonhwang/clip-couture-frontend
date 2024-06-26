import { Link } from "react-router-dom"
import { LogoutLink } from "./LogoutLink"
import { useState, useEffect } from "react";
import axios from "axios";

export function Header() {
  const [suppliers, setSuppliers] = useState([])
  const [categories, setCategories] = useState([])


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

  let loggedInStatus;
  if (localStorage.jwt) {
    loggedInStatus =
      <>
        <Link className="px-3" to="/order">My Orders</Link>  <LogoutLink />
      </>
  } else {
    loggedInStatus =
      <>
        <Link className="px-3" to="/login">Login</Link>  <Link to="/signup">Sign Up</Link>
      </>
  }

  useEffect(suppliersIndex, [])
  useEffect(categoriesIndex, [])

  return (
    <header className="grid gap-3">

      <div className="flex items-center justify-center">
        <Link to="/" className="text-4xl font-bold">Clip Couture</Link>
      </div>

      <nav className="flex justify-end">
        <div>
          {loggedInStatus}
        </div>
        <Link className="px-3" to="/cart"> Cart</Link>
      </nav>

      <div className="navbar">
        <a href="/">All Products</a>
        <a href="/new">New Arrivals</a>

        <div className="dropdown">
          <button className="dropbtn">Categories
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            {categories.map(category => (
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            ))}
          </div>
        </div>

        <div className="dropdown">

          <button className="dropbtn">Brand
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            {suppliers.map(supplier => (
              <Link to={`/brands/${supplier.id}`}>{supplier.name}</Link>
            ))}
          </div>
        </div>

      </div>


    </header>
  )
}