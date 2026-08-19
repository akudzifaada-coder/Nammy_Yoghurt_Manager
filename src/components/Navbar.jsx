import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <span className="font-bold text-lg">Nammy Yoghurt</span>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar