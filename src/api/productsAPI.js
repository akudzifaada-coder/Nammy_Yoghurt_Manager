const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

function getAuthHeaders() {
  const tokens = JSON.parse(localStorage.getItem('tokens'))
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokens?.accessToken}`
  }
}

export async function fetchProducts() {
  const response = await fetch(`${API_BASE_URL}/products`)
  return response.json()
}

export async function createProduct(productData) {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(productData)
  })
  return response.json()
}

export async function updateProduct(id, productData) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(productData)
  })
  return response.json()
}

export async function deleteProduct(id) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders()
  })
  return response.json()
}