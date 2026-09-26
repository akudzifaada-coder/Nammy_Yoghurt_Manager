import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Dashboard from '../pages/Dashboard'
import OurFlavours from '../pages/OurFlavours'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import PaymentCallback from '../pages/PaymentCallback'

const routesConfig = [
  { path: '/', element: <Home />, auth: false },
  { path: '/login', element: <Login />, auth: false },
  { path: '/signup', element: <Signup />, auth: false },
  { path: '/about', element: <About />, auth: false },
  { path: '/contact', element: <Contact />, auth: false },
  { path: '/our-flavours', element: <OurFlavours />, auth: false },
  { path: '/cart', element: <Cart />, auth: false },
  { path: '/checkout', element: <Checkout />, auth: false },
  { path: '/dashboard', element: <Dashboard />, auth: 'admin' },
  { path: '/payment/callback', element: <PaymentCallback />, auth: false },
]

export default routesConfig