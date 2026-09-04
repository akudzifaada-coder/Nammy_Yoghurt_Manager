import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import useApi from '../hooks/useApi'
import { loginRequest } from '../api/authApi'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const { loading, isError, errMessage, isSuccess, successMessage, request } = useApi(loginRequest)

  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await request(formData)

    if (response.success) {
      login(response.data.user, response.data.tokens)
      navigate('/dashboard', { state: { email: response.data.user.email } })
    }
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      {isError && <p className="bg-red-100 text-red-700 p-2 rounded mb-4">{errMessage}</p>}
      {isSuccess && <p className="bg-green-100 text-green-700 p-2 rounded mb-4">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 rounded w-full pr-16"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-blue-600"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white p-2 rounded disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        Test credentials: akudzifaada@gmail.com/ grace@18
      </p>
    </div>
  )
}

export default Login