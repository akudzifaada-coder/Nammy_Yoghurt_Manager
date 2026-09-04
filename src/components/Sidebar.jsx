import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Sidebar() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const linkClass = ({ isActive }) => (isActive ? 'font-bold underline' : '')

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <aside className="w-48 bg-gray-800 text-white min-h-screen p-4 flex flex-col gap-3">
      <span className="font-bold text-lg mb-4">Nammy Yoghurt</span>
      <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>

      <button
        onClick={handleLogout}
        className="mt-auto bg-red-600 text-white p-2 rounded"
      >
        Sign Out
      </button>
    </aside>
  )
}

export default Sidebar