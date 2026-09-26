import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import useApi from '../hooks/useApi'
import { fetchOrders, updateOrderStatus } from '../api/orderApi'
import { fetchContactMessages } from '../api/contactApi'
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../api/productsApi'

function Dashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')

  const { data: orders, request: loadOrders } = useApi(fetchOrders)
  const { data: messages, request: loadMessages } = useApi(fetchContactMessages)
  const { data: products, request: loadProducts } = useApi(fetchProducts)

  useEffect(() => {
    loadOrders()
    loadMessages()
    loadProducts()
  }, [])

  const todayOrders = orders?.filter((o) => {
    const orderDate = new Date(o.createdAt).toDateString()
    return orderDate === new Date().toDateString()
  }) || []

  const totalRevenue = orders?.reduce((sum, o) => sum + Number(o.totalPrice), 0) || 0
  const pendingCount = orders?.filter((o) => o.status === 'pending').length || 0

  async function handleStatusChange(orderId, newStatus) {
    await updateOrderStatus(orderId, newStatus)
    loadOrders()
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
      <p className="text-gray-600 mb-6">Welcome back, {user?.firstName}!</p>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-6">
        {['overview', 'orders', 'products', 'messages'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-1 capitalize font-semibold ${
              activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">Today's Orders</p>
            <p className="text-3xl font-bold">{todayOrders.length}</p>
          </div>
          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-3xl font-bold">GHS {totalRevenue}</p>
          </div>
          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">Pending Orders</p>
            <p className="text-3xl font-bold">{pendingCount}</p>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <OrdersTab orders={orders} onStatusChange={handleStatusChange} />
      )}

      {activeTab === 'products' && (
        <ProductsTab products={products} reload={loadProducts} />
      )}

      {activeTab === 'messages' && (
        <div className="flex flex-col gap-4">
          {messages && messages.length === 0 && <p className="text-gray-500">No messages yet.</p>}
          {messages && messages.map((msg) => (
            <div key={msg.id} className="border rounded-lg p-4">
              <p className="font-bold">{msg.name}</p>
              <p className="text-sm text-gray-500">{msg.email} {msg.phone && `• ${msg.phone}`}</p>
              <p className="text-sm text-gray-700 mt-2">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function OrdersTab({ orders, onStatusChange }) {
  if (!orders) return <p className="text-gray-500">Loading orders...</p>
  if (orders.length === 0) return <p className="text-gray-500">No orders yet.</p>

  return (
    <div className="flex flex-col gap-4">
      {orders.map((order) => (
        <div key={order.id} className="border rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="font-bold">{order.customerName}</p>
              <p className="text-sm text-gray-500">{order.phone}</p>
            </div>
            <select
              value={order.status}
              onChange={(e) => onStatusChange(order.id, e.target.value)}
              className={`text-xs font-semibold px-2 py-1 rounded border ${
                order.status === 'fulfilled' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              <option value="pending">Pending</option>
              <option value="preparing">Preparing</option>
              <option value="out for delivery">Out for Delivery</option>
              <option value="fulfilled">Fulfilled</option>
            </select>
          </div>
          <p className="text-sm text-gray-600 mb-2">{order.address}</p>
          <ul className="text-sm text-gray-700 mb-2">
            {order.items.map((item, i) => (
              <li key={i}>{item.quantity}x {item.name} ({item.size}) — GHS {item.price * item.quantity}</li>
            ))}
          </ul>
          <p className="font-bold">Total: GHS {order.totalPrice}</p>
        </div>
      ))}
    </div>
  )
}

function ProductsTab({ products, reload }) {
  const [editingProduct, setEditingProduct] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '', flavour: '', price: '', size: '', description: '', image: ''
  })

  function openNewForm() {
    setEditingProduct(null)
    setFormData({ name: '', flavour: '', price: '', size: '', description: '', image: '' })
    setShowForm(true)
  }

  function openEditForm(product) {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      flavour: product.flavour,
      price: product.price || '',
      size: product.size || '',
      description: product.description,
      image: product.image || ''
    })
    setShowForm(true)
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const payload = { ...formData, price: Number(formData.price) }

    if (editingProduct) {
      await updateProduct(editingProduct.id, payload)
    } else {
      await createProduct(payload)
    }

    setShowForm(false)
    reload()
  }

  async function handleDelete(id) {
    if (!confirm('Delete this product?')) return
    await deleteProduct(id)
    reload()
  }

  return (
    <div>
      <button
        onClick={openNewForm}
        className="bg-blue-600 text-white px-4 py-2 rounded font-semibold mb-4 hover:bg-blue-700 transition-colors"
      >
        + Add Product
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="border rounded-lg p-4 mb-6 flex flex-col gap-3 max-w-md">
          <h3 className="font-bold">{editingProduct ? 'Edit Product' : 'New Product'}</h3>
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="border p-2 rounded" />
          <input name="flavour" placeholder="Flavour" value={formData.flavour} onChange={handleChange} required className="border p-2 rounded" />
          <input name="price" type="number" placeholder="Price (GHS)" value={formData.price} onChange={handleChange} required className="border p-2 rounded" />
          <input name="size" placeholder="Size (e.g. 350ml)" value={formData.size} onChange={handleChange} className="border p-2 rounded" />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required rows="2" className="border p-2 rounded" />
          <input name="image" placeholder="Image path (e.g. /images/banana-yoghurt.png)" value={formData.image} onChange={handleChange} className="border p-2 rounded" />
          <div className="flex gap-2">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">
              {editingProduct ? 'Save Changes' : 'Create'}
            </button>
            <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 rounded border">
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products && products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 flex justify-between items-start">
            <div>
              <p className="font-bold">{product.name}</p>
              <p className="text-sm text-gray-500">{product.size} — GHS {product.price}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => openEditForm(product)} className="text-blue-600 text-sm font-semibold">Edit</button>
              <button onClick={() => handleDelete(product.id)} className="text-red-600 text-sm font-semibold">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard