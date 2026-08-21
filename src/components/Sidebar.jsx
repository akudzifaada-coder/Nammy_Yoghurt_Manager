import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="w-48 bg-gray-800 text-white min-h-screen p-4 flex flex-col gap-3">
      <span className="font-bold text-lg mb-4">Nammy Yoghurt</span>
      <Link to="/dashboard">Dashboard</Link>
    </aside>
  )
}

export default Sidebar