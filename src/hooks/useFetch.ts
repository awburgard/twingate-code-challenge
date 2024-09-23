import { useState, useEffect, useCallback } from 'react'

const useFetch = (url: string) => {
  const [data, setData] = useState(null)

  const fetchData = useCallback(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error fetching data:', error)
        setData(null)
      })
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const refetch = () => {
    fetchData()
  }

  return { data, refetch }
}

export default useFetch
