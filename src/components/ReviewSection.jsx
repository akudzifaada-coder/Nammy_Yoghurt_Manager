import { useEffect, useState } from 'react'
import useApi from '../hooks/useApi'
import { fetchReviews, submitReview } from '../api/reviewApi'

function ReviewSection() {
  const { data: reviews, loading, request: loadReviews } = useApi(fetchReviews)
  const { loading: submitting, isSuccess, request: sendReview } = useApi(submitReview)

  const [formData, setFormData] = useState({ customerName: '', rating: 5, comment: '' })

  useEffect(() => {
    loadReviews()
  }, [])

  useEffect(() => {
    if (isSuccess) {
      setFormData({ customerName: '', rating: 5, comment: '' })
      loadReviews()
    }
  }, [isSuccess])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await sendReview(formData)
  }

  return (
    <section className="py-16 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-8 text-center">What Customers Say</h2>

      {loading && <p className="text-gray-500 text-center">Loading reviews...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {reviews && reviews.length === 0 && !loading && (
          <p className="text-gray-500 col-span-2 text-center">No reviews yet — be the first!</p>
        )}
        {reviews && reviews.map((review) => (
          <div key={review.id} className="bg-white border rounded-2xl p-6 shadow-sm">
            <p className="text-yellow-500 mb-2">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
            <p className="text-gray-700 mb-3">{review.comment}</p>
            <p className="font-semibold text-sm text-gray-500">— {review.customerName}</p>
          </div>
        ))}
      </div>

      <div className="max-w-md mx-auto border-t pt-8">
        <h3 className="font-bold text-lg mb-4 text-center">Leave a Review</h3>
        {isSuccess && <p className="bg-green-100 text-green-700 p-2 rounded mb-4 text-center">Thanks for your review!</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="customerName"
            placeholder="Your Name"
            value={formData.customerName}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <select name="rating" value={formData.rating} onChange={handleChange} className="border p-2 rounded">
            <option value="5">★★★★★ Excellent</option>
            <option value="4">★★★★☆ Good</option>
            <option value="3">★★★☆☆ Okay</option>
            <option value="2">★★☆☆☆ Poor</option>
            <option value="1">★☆☆☆☆ Bad</option>
          </select>
          <textarea
            name="comment"
            placeholder="Your review"
            value={formData.comment}
            onChange={handleChange}
            required
            rows="3"
            className="border p-2 rounded"
          />
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {submitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ReviewSection