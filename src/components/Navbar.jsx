import { NavLink } from "react-router"


const Navbar = () => {
  return (
    <div className="navbar">
    <NavLink to='/'> Home</NavLink>
    <NavLink to='/register'> Register</NavLink>
    <NavLink to='/login'> Login</NavLink>
    </div>
  )
}

export default Navbar
