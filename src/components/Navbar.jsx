import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const linkClass = ({ isActive }) => (isActive ? 'font-bold underline' : '')

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <span className="font-bold text-lg">Nammy Yoghurt</span>
      <div className="flex gap-4 items-center">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/" className={linkClass}>Home</NavLink>
<NavLink to="/catalogue" className={linkClass}>Catalogue</NavLink>
        {!isAuthenticated && (
          <>
            <NavLink to="/login" className={linkClass}>Login</NavLink>
            <NavLink to="/signup" className={linkClass}>Sign Up</NavLink>
          </>
        )}
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>

        {isAuthenticated && (
          <button
            onClick={() => navigate('/dashboard')}
            className="font-semibold underline"
          >
            {user.firstName}
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar