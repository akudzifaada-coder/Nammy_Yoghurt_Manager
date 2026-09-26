import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Your Cart</h1>
        <p className="text-gray-600 mb-6">Your cart is empty.</p>
        <Link to="/our-flavours" className="text-blue-600 font-semibold hover:underline">
          Browse Our Flavours →
        </Link>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="flex flex-col gap-4 mb-6">
        {cartItems.map((item) => (
          <div key={`${item.id}-${item.size}`} className="flex items-center justify-between border-b pb-4">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.size}</p>
              <p className="text-sm text-blue-600">GHS {item.price} each</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                className="w-8 h-8 border rounded font-bold"
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                className="w-8 h-8 border rounded font-bold"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id, item.size)}
                className="text-red-600 text-sm ml-4"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center border-t pt-4">
        <span className="text-lg font-bold">Total: GHS {totalPrice}</span>
        <Link
          to="/checkout"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}

export default Cart