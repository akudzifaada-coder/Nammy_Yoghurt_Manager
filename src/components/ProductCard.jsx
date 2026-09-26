import { useState } from 'react'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const hasSizes = Array.isArray(product.sizes) && product.sizes.length > 0
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectedSize = hasSizes
    ? product.sizes[selectedIndex]
    : { size: product.size, price: product.price }

  function handleAddToCart() {
    addToCart(product, selectedSize)
  }

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-gray-100 h-40 flex items-center justify-center text-gray-400 text-sm relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <span className="hidden absolute inset-0 items-center justify-center w-full h-full">
          No image yet
        </span>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg">{product.name}</h3>
          <span className="text-blue-600 font-semibold">GHS {selectedSize.price}</span>
        </div>

        {hasSizes ? (
          <select
            value={selectedIndex}
            onChange={(e) => setSelectedIndex(Number(e.target.value))}
            className="text-sm border rounded px-2 py-1 mb-2 w-full"
          >
            {product.sizes.map((option, index) => (
              <option key={option.size} value={index}>
                {option.size} — GHS {option.price}
              </option>
            ))}
          </select>
        ) : (
          <p className="text-sm text-gray-500 mb-2">{selectedSize.size}</p>
        )}

        <p className="text-gray-700 text-sm mb-3">{product.description}</p>

        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard