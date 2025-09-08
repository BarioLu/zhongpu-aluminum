import { useEffect } from 'react'

const GoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

  useEffect(() => {
    // 在有GA_MEASUREMENT_ID的情况下加载GA（包括预览环境）
    if (GA_MEASUREMENT_ID) {
      console.log('Loading Google Analytics with ID:', GA_MEASUREMENT_ID)
      // 动态加载gtag脚本
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
      document.head.appendChild(script1)

      // 初始化gtag
      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_title: document.title,
          page_location: window.location.href,
        });
      `
      document.head.appendChild(script2)

      // 设置全局gtag函数
      window.gtag = function() {
        window.dataLayer.push(arguments)
      }
      
      console.log('Google Analytics loaded successfully')
    } else {
      console.log('GA_MEASUREMENT_ID not found:', GA_MEASUREMENT_ID)
    }
  }, [GA_MEASUREMENT_ID])

  return null // 这个组件不渲染任何内容
}

// 手动追踪页面访问的辅助函数
export const trackPageView = (url, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    })
  }
}

// 手动追踪事件的辅助函数
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export default GoogleAnalytics