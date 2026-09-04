import { useState, useCallback } from 'react'

function useApi(apiFunction) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errMessage, setErrMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const request = useCallback(async (...args) => {
    setLoading(true)
    setIsError(false)
    setErrMessage('')
    setIsSuccess(false)
    setSuccessMessage('')

    try {
      const response = await apiFunction(...args)

      if (response.success) {
        setData(response.data)
        setIsSuccess(true)
        setSuccessMessage(response.message || 'Request successful')
        return response
      } else {
        setIsError(true)
        setErrMessage(response.message || 'Something went wrong')
        return response
      }
    } catch (error) {
      setIsError(true)
      setErrMessage(error.message || 'Network error occurred')
      throw error
    } finally {
      setLoading(false)
    }
  }, [apiFunction])

  return { data, loading, isError, errMessage, isSuccess, successMessage, request }
}

export default useApi