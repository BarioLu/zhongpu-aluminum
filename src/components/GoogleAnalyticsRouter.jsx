import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-HYV8ELQTRR'

const loadGoogleAnalytics = () => {
  if (!GA_MEASUREMENT_ID || document.getElementById('ga-script')) {
    return
  }

  const scriptTag = document.createElement('script')
  scriptTag.id = 'ga-script'
  scriptTag.async = true
  scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(scriptTag)

  const inlineTag = document.createElement('script')
  inlineTag.id = 'ga-inline-script'
  inlineTag.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `
  document.head.appendChild(inlineTag)
}

const GoogleAnalyticsRouter = () => {
  const location = useLocation()

  useEffect(() => {
    loadGoogleAnalytics()
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [location])

  return null
}

export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export default GoogleAnalyticsRouter
