import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [tokens, setTokens] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // On app load, check localStorage for existing session
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    const storedTokens = localStorage.getItem('tokens')

    if (storedUser && storedTokens) {
      setUser(JSON.parse(storedUser))
      setTokens(JSON.parse(storedTokens))
      setIsAuthenticated(true)
    }
  }, [])

  function login(userData, tokenData) {
    setUser(userData)
    setTokens(tokenData)
    setIsAuthenticated(true)

    // Persist to localStorage so refresh doesn't log the user out
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('tokens', JSON.stringify(tokenData))
  }

  function logout() {
    setUser(null)
    setTokens(null)
    setIsAuthenticated(false)

    localStorage.removeItem('user')
    localStorage.removeItem('tokens')
  }

  return (
    <AuthContext.Provider value={{ user, tokens, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}