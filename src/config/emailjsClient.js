import emailjs from '@emailjs/browser'
import { COMPANY } from './company'

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zhongpu',
  CONTACT_TEMPLATE_ID:
    import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'template_contact',
  QUICK_INQUIRY_TEMPLATE_ID:
    import.meta.env.VITE_EMAILJS_QUICK_INQUIRY_TEMPLATE_ID || 'template_quick_inquiry',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'lxg3--SargfI9rJNI',
}

export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || COMPANY.email

let hasInitialized = false

export const initEmailJS = () => {
  if (!EMAILJS_CONFIG.PUBLIC_KEY || hasInitialized) {
    return
  }

  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
  hasInitialized = true
}

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
      to_name: COMPANY.name,
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )

    return { success: true, data: response }
  } catch (error) {
    console.error('Contact form EmailJS error:', error)
    return { success: false, error: error.message || error.text || 'Unknown error' }
  }
}

export const sendQuickInquiry = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      requirements: formData.requirements,
      to_email: CONTACT_EMAIL,
      to_name: COMPANY.name,
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.QUICK_INQUIRY_TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )

    return { success: true, data: response }
  } catch (error) {
    console.error('Quick inquiry EmailJS error:', error)
    return { success: false, error: error.message || error.text || 'Unknown error' }
  }
}
