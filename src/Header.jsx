import { Link } from "react-router-dom"
import { LogoutLink } from "./LogoutLink"

export function Header() {



  return (
    <header >
      <div className="Logo">
        <Link to="/">
          <h1 className="container mx-auto flex flex-wrap items-center text-3xl font-bold ">Clip-Couture</h1>
        </Link>
      </div>

      <nav className="UserNav">
        <Link to="/">All</Link> | <Link to="/new">New</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link> | <Link to="/cart">Cart</Link> | <Link to="/order">Order</Link> | <LogoutLink />
      </nav>

      <div className="navbar flex items-center">
        <a href="">Best Sellers</a>
        <a href="/new">New Arrivals</a>
        <a href="/">Shop</a>
        <div class="dropdown">
          <button class="dropbtn">Categories
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn">Brands
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>



    </header>
  )
}