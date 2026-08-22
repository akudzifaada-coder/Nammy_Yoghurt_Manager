import { useLocation } from 'react-router-dom'

function Dashboard() {
  const location = useLocation()
  const email = location.state?.email

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-700">
        Welcome back{email ? `, ${email}` : ''}! This is your authenticated area.
      </p>
    </div>
  )
}

export default Dashboard