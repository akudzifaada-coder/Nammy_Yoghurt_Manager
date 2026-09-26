import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function FloatingOrderButton() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const { totalItems } = useCart()

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => navigate(totalItems > 0 ? '/cart' : '/our-flavours')}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-2xl hover:bg-blue-700 hover:scale-105 transition-all"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: show ? 'auto' : 'none',
        transition: 'opacity 0.3s ease, transform 0.3s ease'
      }}
    >
      {totalItems > 0 ? `🛒 View Cart (${totalItems})` : '🍓 Order Now'}
    </button>
  )
}

export default FloatingOrderButton