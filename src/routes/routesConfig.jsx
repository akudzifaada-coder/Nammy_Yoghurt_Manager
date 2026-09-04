import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Dashboard from '../pages/Dashboard'
import Catalogue from '../pages/Catalogue'

const routesConfig = [
  { path: '/', element: <Home />, auth: false },
  { path: '/login', element: <Login />, auth: false },
  { path: '/signup', element: <Signup />, auth: false },
  { path: '/about', element: <About />, auth: false },
  { path: '/contact', element: <Contact />, auth: false },
  { path: '/catalogue', element: <Catalogue />, auth: false },
  { path: '/dashboard', element: <Dashboard />, auth: true },
]

export default routesConfig