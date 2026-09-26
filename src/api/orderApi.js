const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

function getAuthHeaders() {
  const tokens = JSON.parse(localStorage.getItem('tokens'))
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokens?.accessToken}`
  }
}

export async function placeOrder(orderData) {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  })
  return response.json()
}

export async function fetchOrders() {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    headers: getAuthHeaders()
  })
  return response.json()
}

export async function updateOrderStatus(id, status) {
  const response = await fetch(`${API_BASE_URL}/orders/${id}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: JSON.stringify({ status })
  })
  return response.json()
}