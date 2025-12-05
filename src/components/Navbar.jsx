import { NavLink } from "react-router"


const Navbar = () => {
  return (
    <div className="navbar">
    <NavLink to='/register'> Register</NavLink>
    <NavLink to='/login'> Login</NavLink>
    </div>
  )
}

export default Navbar