import { useEffect, useState } from 'react'

const imageCache = new Map()

export function useProductsUrls(folderPath: string) {
  const [urls, setUrls] = useState([])

  useEffect(() => {
    if (imageCache.has(folderPath)) {
      setUrls(imageCache.get(folderPath))
      return
    }
    async function getUrl() {
      const data = await fetch(`/api/${folderPath}`)
      const url = await data.json()
      imageCache.set(folderPath, url)
      setUrls(url)
    }
    getUrl()
  }, [folderPath])
  return urls
}
