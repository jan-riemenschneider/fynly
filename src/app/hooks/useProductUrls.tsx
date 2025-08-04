import { useEffect, useState } from 'react'

const imageCache = new Map()

export function useProductsUrls(folderParth: string) {
  const [urls, setUrls] = useState([])

  useEffect(() => {
    if (imageCache.has(folderParth)) {
      setUrls(imageCache.get(folderParth))
      return
    }
    async function getUrl() {
      const data = await fetch(`/api/${folderParth}`)
      const url = await data.json()
      imageCache.set(folderParth, url)
      setUrls(url)
    }
    getUrl()
  }, [folderParth])
  return urls
}
