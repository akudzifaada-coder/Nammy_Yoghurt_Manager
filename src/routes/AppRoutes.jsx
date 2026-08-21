import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthWrapper from '../components/AuthWrapper'
import UnauthWrapper from '../components/UnauthWrapper'
import routesConfig from './routesConfig'

function AppRoutes() {
  const { isAuthenticated } = useAuth()

  return (
    <Routes>
      {routesConfig.map(({ path, element, auth }) => {
        // If the route requires auth but the user isn't logged in, redirect to login
        if (auth && !isAuthenticated) {
          return <Route key={path} path={path} element={<Navigate to="/login" replace />} />
        }

        // Wrap the page in the correct layout based on its condition
        const wrappedElement = auth ? (
          <AuthWrapper>{element}</AuthWrapper>
        ) : (
          <UnauthWrapper>{element}</UnauthWrapper>
        )

        return <Route key={path} path={path} element={wrappedElement} />
      })}
    </Routes>
  )
}

export default AppRoutes