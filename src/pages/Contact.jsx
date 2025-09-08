import React, { useState, useEffect } from 'react'
import SEOHead from '../components/SEOHead'
import Breadcrumb from '../components/Breadcrumb'
import { sendContactForm, initEmailJS } from '../config/emailjs'
import { trackEvent } from '../components/GoogleAnalytics'
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Clock,
  Send,
  CheckCircle
} from 'lucide-react'

const Contact = () => {
  // 初始化EmailJS
  useEffect(() => {
    initEmailJS()
  }, [])

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Zhongpu Aluminum",
    "description": "Get in touch with Zhongpu Aluminum for professional consultation, quotes, and technical support. Leading aluminum profile manufacturer in Foshan, China.",
    "url": "https://zhongpu-aluminum.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zhongpu Aluminum",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+86-18957133982",
        "contactType": "customer service",
        "email": "zhongpualu@outlook.com",
        "availableLanguage": "English, Chinese"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 12, Ligang Industrial Zone, Guanyao, Shishan Town",
        "addressLocality": "Nanhai District",
        "addressRegion": "Foshan City",
        "addressCountry": "CN"
      }
    }
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // 验证表单数据
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitError('Please fill in all required fields.')
      return
    }
    
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Please enter a valid email address.')
      return
    }
    
    setIsLoading(true)
    setSubmitError('')
    
    try {
      const result = await sendContactForm(formData)
      
      if (result.success) {
        // Google Analytics事件追踪
        trackEvent('contact_form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1
        })
        
        // 显示成功消息
        setIsSubmitted(true)
        
        // 清空表单
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        })
        
        // 5秒后隐藏成功消息
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        // 根据错误类型提供更具体的错误消息
        if (result.error && result.error.includes('network')) {
          setSubmitError('Network error. Please check your connection and try again.')
        } else if (result.error && result.error.includes('invalid')) {
          setSubmitError('Invalid email configuration. Please contact us directly.')
        } else {
          setSubmitError('Failed to send message. Please try again or contact us directly at zhongpualu@outlook.com')
        }
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // 键盘事件处理
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMapModalOpen) {
        setIsMapModalOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMapModalOpen])

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Factory Address',
      content: 'No. 12, Ligang Industrial Zone, Guanyao, Shishan Town, Nanhai District, Foshan City, Guangdong Province, China',
      subtitle: ''
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Numbers',
      content: '+86 18957133982',
      subtitle: 'Office & WhatsApp'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Address',
      content: 'zhongpualu@outlook.com',
      subtitle: ''
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      content: 'Monday - Friday: 8:00 AM - 6:00 PM (GMT+8)\nSaturday: 9:00 AM - 5:00 PM (GMT+8)',
      subtitle: ''
    }
  ]



  return (
    <>
      <SEOHead 
        title="Contact Us - Get Quote & Technical Support"
        description="Contact Zhongpu Aluminum for professional consultation, quotes, and technical support. Leading aluminum profile manufacturer in Foshan, China. WhatsApp: +86 18957133982"
        keywords="contact Zhongpu Aluminum, aluminum profile manufacturer contact, Foshan aluminum contact, China aluminum manufacturer contact, get quote aluminum profiles"
        url="https://zhongpu-aluminum.com/contact"
        structuredData={contactStructuredData}
      />
      <div>
        {/* Breadcrumb */}
        <div className="container-custom">
          <Breadcrumb items={[{name: 'Contact'}]} />
        </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container-custom section-padding">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Get in touch with our team for professional consultation, quotes, and technical support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="technical-support" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to help you with your aluminum profile requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 mb-1 whitespace-pre-line">
                  {info.content}
                </p>
                {info.subtitle && (
                  <p className="text-sm text-gray-500">
                    {info.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section id="sample-request" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <div>
                      <h3 className="text-lg font-semibold text-green-800">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-green-700">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="bg-red-100 border border-red-200 text-red-800 px-4 py-3 rounded relative" role="alert">
                      <strong className="font-bold">Error!</strong>
                      <span className="block sm:inline"> {submitError}</span>
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Please describe your requirements in detail..."
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      type="submit"
                      className="btn-primary inline-flex items-center"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                    <a
                      href="https://wa.me/8613800123456"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Chat
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Map and Quick Contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Location
              </h2>
              <div className="bg-gray-200 rounded-lg h-64 overflow-hidden mb-6 cursor-pointer hover:opacity-90 transition-opacity relative" onClick={() => setIsMapModalOpen(true)}>
                <img 
                  src="/factory-map.png" 
                  alt="Zhongpu Aluminum Factory Location Map" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500">Interactive Map</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    🔍 Click to view full size
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/8618957133982"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp: +86 18957133982</span>
                  </a>
                  <a
                    href="mailto:zhongpualu@outlook.com"
                    className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email: zhongpualu@outlook.com</span>
                  </a>
                  <a
                    href="tel:+8618957133982"
                    className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Phone: +86 18957133982</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our products and services
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'What is your minimum order quantity?',
                answer: 'Our minimum order quantity varies by product type. For standard products, MOQ is typically 1,000kg. For custom profiles, please contact us for specific requirements.'
              },
              {
                question: 'How long does production take?',
                answer: 'Standard products typically take 7-15 days for production. Custom profiles may take 15-25 days depending on complexity and quantity.'
              },
              {
                question: 'Do you provide samples?',
                answer: 'Yes, we provide samples for evaluation. Sample costs and lead times vary by product type. Contact us for specific sample requests.'
              },
              {
                question: 'What payment terms do you accept?',
                answer: 'We accept various payment terms including T/T, L/C, and PayPal. Payment terms are negotiable based on order value and customer relationship.'
              },
              {
                question: 'Do you provide technical support?',
                answer: 'Yes, our technical team provides comprehensive support including product selection, installation guidance, and technical consultation.'
              },
              {
                question: 'What quality certifications do you have?',
                answer: 'We maintain strict quality control standards and all products undergo 100% inspection before shipment. We are committed to continuous quality improvement.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Contact our team today for professional consultation and competitive quotes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8618957133982"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 inline mr-2" />
              WhatsApp Chat
            </a>
            <a
              href="tel:+8618957133982"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Map Modal */}
      {isMapModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={() => setIsMapModalOpen(false)}>
          <div className="relative w-full h-full flex items-center justify-center">
            <button 
              onClick={() => setIsMapModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ×
            </button>
            <img 
              src="/factory-map.png" 
              alt="Zhongpu Aluminum Factory Location Map" 
              className="max-w-full max-h-full object-contain"
              style={{ maxWidth: '90vw', maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Contact 