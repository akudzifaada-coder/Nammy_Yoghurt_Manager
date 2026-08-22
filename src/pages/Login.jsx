import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  function handleLogin(e) {
    e.preventDefault()
    login()
    // Pass data to the next page using the 'state' option
    navigate('/dashboard', { state: { email } })
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login