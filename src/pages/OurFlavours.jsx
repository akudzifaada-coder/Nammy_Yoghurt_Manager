import { useEffect } from 'react'
import useApi from '../hooks/useApi'
import { fetchProducts } from '../api/productsAPI'
import ProductCard from '../components/ProductCard'

function OurFlavours() {
  const { data: products, loading, isError, errMessage, request } = useApi(fetchProducts)

  useEffect(() => {
    request()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Our Flavours</h1>
      <p className="text-gray-600 mb-6">
        Fresh, flavourful yoghurt made with quality ingredients — pick your favourite.
      </p>

      {loading && <p className="text-gray-500">Loading flavours...</p>}
      {isError && <p className="text-red-600">{errMessage}</p>}

      {products && products.length === 0 && !loading && (
        <p className="text-gray-500">No flavours available yet — check back soon!</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default OurFlavours