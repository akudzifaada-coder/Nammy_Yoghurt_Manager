import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? 'font-bold underline' : ''

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <span className="font-bold text-lg">Nammy Yoghurt</span>
      <div className="flex gap-4">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/login" className={linkClass}>Login</NavLink>
        <NavLink to="/signup" className={linkClass}>Sign Up</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar