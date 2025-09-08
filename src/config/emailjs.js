import emailjs from '@emailjs/browser'

// EmailJS配置
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zhongpu',
  CONTACT_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'template_contact',
  QUICK_INQUIRY_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_QUICK_INQUIRY_TEMPLATE_ID || 'template_quick_inquiry',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'lxg3--SargfI9rJNI',
}

// 联系邮箱配置
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'zhongpualu@outlook.com'

// 初始化EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
}

// 发送联系表单邮件
export const sendContactForm = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      phone: formData.phone || 'Not provided',
      subject: formData.subject,
      message: formData.message,
      to_email: CONTACT_EMAIL,
      to_name: 'Zhongpu Aluminum'
    }
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    
    return { success: true, data: response }
  } catch (error) {
    console.error('Contact form EmailJS Error:', error)
    return { success: false, error: error.message || error.text || 'Unknown error' }
  }
}

// 发送快速询价邮件
export const sendQuickInquiry = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      requirements: formData.requirements,
      to_email: CONTACT_EMAIL,
      to_name: 'Zhongpu Aluminum'
    }
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.QUICK_INQUIRY_TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    
    return { success: true, data: response }
  } catch (error) {
    console.error('Quick inquiry EmailJS Error:', error)
    return { success: false, error: error.message || error.text || 'Unknown error' }
  }
} 