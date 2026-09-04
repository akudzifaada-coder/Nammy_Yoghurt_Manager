import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Nammy Yoghurt
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Handcrafted yoghurt made with real fruit and quality ingredients — banana,
        vanilla, strawberry, parfait, and Greek yoghurt, made fresh for you.
      </p>
      <Link
        to="/catalogue"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        View Our Catalogue
      </Link>
    </div>
  )
}

export default Home