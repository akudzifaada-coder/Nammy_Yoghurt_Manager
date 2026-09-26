const API_BASE_URL = 'http://localhost:5000/api'

export async function sendContactMessage(data) {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return response.json()
}

export async function fetchContactMessages() {
  const tokens = JSON.parse(localStorage.getItem('tokens'))
  const response = await fetch(`${API_BASE_URL}/contact`, {
    headers: { Authorization: `Bearer ${tokens?.accessToken}` }
  })
  return response.json()
}