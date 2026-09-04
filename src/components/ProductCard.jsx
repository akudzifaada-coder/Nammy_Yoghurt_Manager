import { useState } from 'react'

function ProductCard({ product }) {
  const hasSizes = Array.isArray(product.sizes) && product.sizes.length > 0

  // For multi-size products, track which size is currently selected
  const [selectedIndex, setSelectedIndex] = useState(0)

  const displayPrice = hasSizes ? product.sizes[selectedIndex].price : product.price
  const displaySize = hasSizes ? product.sizes[selectedIndex].size : product.size

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
          <span className="text-blue-600 font-semibold">GHS {displayPrice}</span>
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
          <p className="text-sm text-gray-500 mb-2">{displaySize}</p>
        )}

        <p className="text-gray-700 text-sm">{product.description}</p>
      </div>
    </div>
  )
}

export default ProductCard