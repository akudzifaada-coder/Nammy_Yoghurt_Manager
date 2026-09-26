import { Link } from 'react-router-dom'
import products from '../api/json/products.json'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import FloatingOrderButton from '../components/FloatingOrderButton'
import ReviewSection from '../components/ReviewSection'
const flavourNames = ['Banana', 'Vanilla', 'Strawberry', 'Parfait', 'Greek Yoghurt']

function Home() {
  const popularFlavours = products.slice(0, 3)

  return (
    <div className="overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee 18s linear infinite;
          }
          .product-hover:hover {
            transform: translateY(-6px) scale(1.02);
          }
          .product-hover {
            transition: transform 0.3s ease;
          }
        `}
      </style>

      {/* HERO — full-bleed image with overlay */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center text-center text-white px-6"
        style={{
          backgroundImage: "linear-gradient(rgba(30,58,138,0.75), rgba(30,64,175,0.85)), url('/images/Nammy1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-blue-200 font-semibold mb-3 text-sm">
            Small Batch • Fresh Daily • Made With Love
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-5 leading-tight">
            Yoghurt That Actually Tastes Like Yoghurt
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Real fruit. Real cream. Zero shortcuts. Taste the difference in every spoonful.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/our-flavours"
              className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-blue-50 hover:scale-105 transition-all shadow-xl"
            >
              Explore Flavours →
            </Link>
            <Link
              to="/about"
              className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-700 transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE — scrolling flavour strip */}
      <div className="bg-blue-800 py-4 overflow-hidden whitespace-nowrap">
        <div className="marquee-track inline-block">
          {[...flavourNames, ...flavourNames, ...flavourNames].map((name, i) => (
            <span key={i} className="text-white font-bold text-lg mx-8 inline-block">
              🍦 {name}
            </span>
          ))}
        </div>
      </div>

      {/* STATS BAR */}
      <Reveal>
        <section className="bg-white py-14 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-extrabold text-blue-600">5</p>
              <p className="text-gray-600 text-sm mt-1">Flavours</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-blue-600">100%</p>
              <p className="text-gray-600 text-sm mt-1">Real Fruit</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-blue-600">0</p>
              <p className="text-gray-600 text-sm mt-1">Shortcuts</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-blue-600">24h</p>
              <p className="text-gray-600 text-sm mt-1">Fresh Batches</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* POPULAR FLAVOURS */}
      <Reveal delay={100}>
        <section className="py-16 px-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-2 text-center">Fan Favourites</h2>
          <p className="text-gray-500 text-center mb-8">The flavours customers keep coming back for</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {popularFlavours.map((product) => (
              <div key={product.id} className="product-hover">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/our-flavours"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
            >
              See All Flavours
            </Link>
          </div>
        </section>
      </Reveal>

      {/* SECOND IMAGE — full width break */}
      <Reveal>
        <section className="relative h-72">
          <img
            src="/images/Nammy2.png"
            alt="Nammy Yoghurt"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center">
            <p className="text-white text-3xl font-extrabold text-center px-6">
              Made fresh. Enjoyed fresher.
            </p>
          </div>
        </section>
      </Reveal>

      {/* HOW TO ORDER */}
      <Reveal>
        <section className="bg-gray-50 py-16 px-8">
          <h2 className="text-3xl font-extrabold mb-10 text-center">How to Order</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-3">🍓</div>
              <h3 className="font-bold mb-1">1. Pick Your Flavour</h3>
              <p className="text-gray-600 text-sm">Browse our flavours and choose what you'd like.</p>
            </div>
            <div>
              <div className="text-5xl mb-3">🛒</div>
              <h3 className="font-bold mb-1">2. Add to Cart</h3>
              <p className="text-gray-600 text-sm">Add your items and adjust quantities as needed.</p>
            </div>
            <div>
              <div className="text-5xl mb-3">✅</div>
              <h3 className="font-bold mb-1">3. Checkout</h3>
              <p className="text-gray-600 text-sm">Confirm your order and we'll get it ready for you.</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CUSTOMER REVIEWS */}
<Reveal>
  <ReviewSection />
</Reveal>

      <FloatingOrderButton />
    </div>
  )
}

export default Home