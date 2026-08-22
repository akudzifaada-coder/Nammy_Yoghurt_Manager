import { NavLink } from 'react-router-dom'

function Sidebar() {
  const linkClass = ({ isActive }) =>
    isActive ? 'font-bold underline' : ''

  return (
    <aside className="w-48 bg-gray-800 text-white min-h-screen p-4 flex flex-col gap-3">
      <span className="font-bold text-lg mb-4">Nammy Yoghurt</span>
      <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
    </aside>
  )
}

export default Sidebar