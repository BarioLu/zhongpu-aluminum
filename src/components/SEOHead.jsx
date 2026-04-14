import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData 
}) => {
  const fullTitle = title
    ? `${title} | Zhongpu Aluminum`
    : 'Custom Aluminum Wall & Ceiling Panel Manufacturer | Zhongpu Aluminum'
  const fullDescription =
    description ||
    'Zhongpu Aluminum is a custom aluminum wall panel manufacturer and aluminum ceiling panel supplier in China, providing aluminum wave panel, aluminum fluted panel, and decorative aluminum panel solutions for commercial projects.'
  const fullKeywords =
    keywords ||
    'aluminum wave panel, aluminum fluted panel, decorative aluminum panel, aluminum wall panel manufacturer, aluminum ceiling panel supplier, manufacturer, supplier, factory, OEM, custom'
  const fullImage = image || 'https://zhongpu-aluminum.com/logo.png'
  const fullUrl = url || 'https://zhongpu-aluminum.com'

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={fullImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOHead 
