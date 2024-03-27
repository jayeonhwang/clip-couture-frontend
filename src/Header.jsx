import { Link } from "react-router-dom"
import { LogoutLink } from "./LogoutLink"

export function Header() {

  let loggedInStatus;
  if (localStorage.jwt) {
    loggedInStatus =
      <>
        <Link className="px-3" to="/order">My Order</Link>  <LogoutLink />
      </>
  } else {
    loggedInStatus =
      <>
        <Link className="px-3" to="/login">Login</Link>  <Link to="/signup">Sign Up</Link>
      </>
  }

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
        <a href="">Best Sellers</a>
        <a href="/new">New Arrivals</a>
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