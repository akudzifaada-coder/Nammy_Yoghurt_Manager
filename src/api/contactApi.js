const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

function getAuthHeaders() {
  const tokens = JSON.parse(localStorage.getItem('tokens'))
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokens?.accessToken}`
  }
}

export async function sendContactMessage(data) {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return response.json()
}

export async function fetchContactMessages() {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    headers: getAuthHeaders()
  })
  return response.json()
}