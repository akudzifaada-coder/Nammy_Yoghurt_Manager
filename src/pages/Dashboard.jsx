import { useAuth } from '../context/AuthContext'

function Dashboard() {
  const { user } = useAuth()

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-700">
        Welcome back, {user?.firstName}! This is your authenticated area.
      </p>
    </div>
  )
}

export default Dashboard