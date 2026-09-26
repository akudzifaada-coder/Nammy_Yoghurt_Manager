import { useState } from 'react'
import { useCart } from '../context/CartContext'
import LocationPicker from '../components/LocationPicker'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

function Checkout() {
  const { cartItems, totalPrice } = useCart()

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' })
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [showMap, setShowMap] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    try {
      const response = await fetch(`${API_BASE_URL}/payments/initialize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          amount: totalPrice,
          customerName: formData.name,
          phone: formData.phone,
          address: formData.address,
          items: cartItems
        })
      })

      const data = await response.json()

      if (data.success) {
        // Redirect the customer to Paystack's real payment page
        window.location.href = data.data.authorizationUrl
      } else {
        setErrorMsg(data.message || 'Could not start payment')
        setLoading(false)
      }
    } catch (error) {
      setErrorMsg('Something went wrong — please try again')
      setLoading(false)
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-600">Your cart is empty — nothing to check out.</p>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p className="text-gray-600 mb-6">
        Total: <span className="font-bold text-blue-600">GHS {totalPrice}</span>
      </p>

      {errorMsg && <p className="bg-red-100 text-red-700 p-2 rounded mb-4">{errorMsg}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="border p-2 rounded" />
        <input type="email" name="email" placeholder="Email (for payment receipt)" value={formData.email} onChange={handleChange} required className="border p-2 rounded" />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="border p-2 rounded" />

        <div>
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="3"
            className="border p-2 rounded w-full"
          />
          <button
            type="button"
            onClick={() => setShowMap(!showMap)}
            className="text-blue-600 text-sm font-semibold mt-1"
          >
            {showMap ? 'Hide map' : '📍 Pick location on map instead'}
          </button>

          {showMap && (
            <div className="mt-3">
              <LocationPicker
                onAddressSelected={(address) => {
                  setFormData((prev) => ({ ...prev, address }))
                }}
              />
            </div>
          )}
        </div>

        <button type="submit" disabled={loading} className="bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50">
          {loading ? 'Redirecting to payment...' : `Pay GHS ${totalPrice}`}
        </button>
      </form>
    </div>
  )
}

export default Checkout