import React, { useState } from 'react'
import optimizedImages from '../data/optimized-images.json'

export const getOptimizedImageSources = (src) => optimizedImages[src] || null

const OptimizedImage = ({ src, alt, onError, ...props }) => {
  const [useOptimized, setUseOptimized] = useState(true)
  const sources = useOptimized ? getOptimizedImageSources(src) : null

  const handleError = (event) => {
    if (useOptimized) {
      setUseOptimized(false)
      event.currentTarget.src = src
      return
    }

    if (onError) {
      onError(event)
    }
  }

  if (!sources) {
    return <img src={src} alt={alt} onError={onError} {...props} />
  }

  return (
    <picture>
      {sources.webp ? <source srcSet={sources.webp} type="image/webp" /> : null}
      {sources.avif ? <source srcSet={sources.avif} type="image/avif" /> : null}
      <img src={src} alt={alt} onError={handleError} {...props} />
    </picture>
  )
}

export default OptimizedImage