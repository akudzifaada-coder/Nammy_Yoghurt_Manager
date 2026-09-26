import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { user, isAuthenticated } = useAuth()
  const { totalItems } = useCart()
  const navigate = useNavigate()

  const linkClass = ({ isActive }) => (isActive ? 'font-bold underline' : '')

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <span className="font-bold text-lg">Nammy Yoghurt</span>
      <div className="flex gap-4 items-center">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/our-flavours" className={linkClass}>Our Flavours</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>

        <NavLink to="/cart" className={linkClass}>
          Cart{totalItems > 0 && ` (${totalItems})`}
        </NavLink>

       {isAuthenticated && user?.role === 'admin' && (
  <button onClick={() => navigate('/dashboard')} className="font-semibold underline">
    {user.firstName}
  </button>
)}
      </div>
    </nav>
  )
}

export default Navbar