import { Link } from "react-router-dom"

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/new">New</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}