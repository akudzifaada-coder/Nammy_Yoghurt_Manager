import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import AppRoutes from './routes/AppRoutes'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <AppRoutes />
          <ChatWidget />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App