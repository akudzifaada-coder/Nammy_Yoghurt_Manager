const API_BASE_URL = 'http://localhost:5000/api'

export async function fetchReviews() {
  const response = await fetch(`${API_BASE_URL}/reviews`)
  return response.json()
}

export async function submitReview(reviewData) {
  const response = await fetch(`${API_BASE_URL}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reviewData)
  })
  return response.json()
}