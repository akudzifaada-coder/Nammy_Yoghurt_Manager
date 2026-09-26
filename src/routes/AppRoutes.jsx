import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthWrapper from '../components/AuthWrapper'
import UnauthWrapper from '../components/UnauthWrapper'
import routesConfig from './routesConfig'

function AppRoutes() {
  const { isAuthenticated, user } = useAuth()

  return (
    <Routes>
      {routesConfig.map(({ path, element, auth }) => {
        const isAdminRoute = auth === 'admin'
        const isBlocked = auth === true
          ? !isAuthenticated
          : isAdminRoute
          ? !isAuthenticated || user?.role !== 'admin'
          : false

        if (isBlocked) {
          return <Route key={path} path={path} element={<Navigate to="/login" replace />} />
        }

        const wrappedElement = (auth === true || isAdminRoute) ? (
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