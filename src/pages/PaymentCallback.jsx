import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function PaymentCallback() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { clearCart } = useCart()

  const [status, setStatus] = useState('verifying') // verifying | success | failed

  useEffect(() => {
    const reference = searchParams.get('reference') || searchParams.get('trxref')

    if (!reference) {
      setStatus('failed')
      return
    }

    fetch(`http://localhost:5000/api/payments/verify/${reference}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          clearCart()
          setStatus('success')
        } else {
          setStatus('failed')
        }
      })
      .catch(() => setStatus('failed'))
  }, [])

  if (status === 'verifying') {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-600">Confirming your payment...</p>
      </div>
    )
  }

  if (status === 'failed') {
    return (
      <div className="p-8 max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold mb-2 text-red-600">Payment Failed</h1>
        <p className="text-gray-600 mb-6">Something went wrong with your payment. Please try again.</p>
        <button onClick={() => navigate('/cart')} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Back to Cart
        </button>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-2">Payment Successful! 🎉</h1>
      <p className="text-gray-600 mb-6">Your order has been placed. We'll contact you soon to confirm delivery.</p>
      <button onClick={() => navigate('/our-flavours')} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
        Continue Shopping
      </button>
    </div>
  )
}

export default PaymentCallback