import products from '../api/json/products.json'
import ProductCard from '../components/ProductCard'

function Catalogue() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Our Yoghurt Catalogue</h1>
      <p className="text-gray-600 mb-6">
        Fresh, flavourful yoghurt made with quality ingredients — pick your favourite.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Catalogue