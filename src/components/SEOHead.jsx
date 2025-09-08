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
  const fullTitle = title ? `${title} | Zhongpu Aluminum` : 'Zhongpu Aluminum - Professional Decorative Aluminum Profile Manufacturer'
  const fullDescription = description || 'Leading decorative aluminum profile manufacturer in Foshan, China. 5+ years experience, ISO certified, OEM/ODM services.'
  const fullKeywords = keywords || 'aluminum profile manufacturer, decorative aluminum profiles, aluminum grille panels, wave panels, Foshan aluminum, China aluminum manufacturer'
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