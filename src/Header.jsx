import { Link } from "react-router-dom"
import { LogoutLink } from "./LogoutLink"

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/new">New</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link> | <Link to="/cart">Cart</Link> | <Link to="/order">Order</Link> | <LogoutLink />
      </nav>
    </header>
  )
}