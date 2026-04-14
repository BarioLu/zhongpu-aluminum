import React, { useEffect, useState } from 'react'
import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import Breadcrumb from '../components/Breadcrumb'
import { trackEvent } from '../components/GoogleAnalyticsRouter'
import { buildSiteUrl, COMPANY } from '../config/company'
import { initEmailJS, sendContactForm } from '../config/emailjsClient'

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Factory Address',
    content: COMPANY.addressFull,
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Phone Numbers',
    content: COMPANY.phoneDisplay,
    subtitle: 'Office and WhatsApp',
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email Address',
    content: COMPANY.email,
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Business Hours',
    content: COMPANY.businessHours,
  },
]

const initialFormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  subject: '',
  message: '',
}

const ContactPage = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)

  useEffect(() => {
    initEmailJS()
  }, [])

  useEffect(() => {
    if (!isMapModalOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMapModalOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMapModalOpen])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitError('Please fill in all required fields.')
      return
    }

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
        trackEvent('contact_form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1,
        })
        setIsSubmitted(true)
        setFormData(initialFormData)
        window.setTimeout(() => setIsSubmitted(false), 5000)
      } else if (result.error?.toLowerCase().includes('network')) {
        setSubmitError('Network error. Please check your connection and try again.')
      } else if (result.error?.toLowerCase().includes('invalid')) {
        setSubmitError('Email configuration is invalid. Please contact us directly.')
      } else {
        setSubmitError(`Failed to send message. Please email us directly at ${COMPANY.email}.`)
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const contactStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${COMPANY.name}`,
    description:
      'Get in touch with Zhongpu Aluminum for professional consultation, quotes, and technical support. Leading aluminum profile manufacturer in Foshan, China.',
    url: buildSiteUrl('/contact'),
    mainEntity: {
      '@type': 'Organization',
      name: COMPANY.name,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: COMPANY.phoneDisplay.replace(/\s/g, '-'),
        contactType: 'customer service',
        email: COMPANY.email,
        availableLanguage: 'English, Chinese',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No. 12, Ligang Industrial Zone, Guanyao, Shishan Town',
        addressLocality: 'Nanhai District',
        addressRegion: 'Foshan City',
        addressCountry: 'CN',
      },
    },
  }

  return (
    <>
      <SEOHead
        title="Contact Aluminum Wall Panel Manufacturer for Custom Quote"
        description={`Contact ${COMPANY.name} for custom aluminum wave panel, fluted panel, wall panel, and ceiling panel quotation. WhatsApp: ${COMPANY.phoneDisplay}`}
        keywords="contact aluminum wall panel manufacturer, aluminum ceiling panel supplier contact, aluminum wave panel quotation, aluminum fluted panel supplier, manufacturer, supplier, factory, OEM, custom"
        url={buildSiteUrl('/contact')}
        structuredData={contactStructuredData}
      />
      <div>
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Contact' }]} />
        </div>

        <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="relative container-custom section-padding">
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-bold lg:text-6xl">Contact Us</h1>
              <p className="mx-auto max-w-3xl text-xl text-primary-100">
                Reach our team for quotations, technical consultation, samples, and project support.
              </p>
            </div>
          </div>
        </section>

        <section id="technical-support" className="section-padding">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Get in Touch</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Our sales and technical teams are ready to help with specifications, customization,
                and delivery planning.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="rounded-lg bg-white p-6 text-center shadow-md">
                  <div className="mb-4 flex justify-center text-primary-600">{info.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{info.title}</h3>
                  <p className="mb-1 whitespace-pre-line text-gray-600">{info.content}</p>
                  {info.subtitle ? <p className="text-sm text-gray-500">{info.subtitle}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sample-request" className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Send Us a Message</h2>
                {isSubmitted ? (
                  <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-800">
                          Message Sent Successfully
                        </h3>
                        <p className="text-green-700">
                          Thank you for contacting us. We will get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError ? (
                      <div className="rounded border border-red-200 bg-red-100 px-4 py-3 text-red-800" role="alert">
                        {submitError}
                      </div>
                    ) : null}

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Please describe your requirements in detail..."
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        type="submit"
                        className="btn-primary inline-flex items-center"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </button>
                      <a
                        href={COMPANY.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp Chat
                      </a>
                    </div>
                  </form>
                )}
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Location</h2>
                <button
                  type="button"
                  className="relative mb-6 h-64 w-full overflow-hidden rounded-lg bg-gray-200 text-left transition-opacity hover:opacity-90"
                  onClick={() => setIsMapModalOpen(true)}
                >
                  <img
                    src="/factory-map.png"
                    alt={`${COMPANY.name} factory location map`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all hover:bg-black/20">
                    <div className="rounded-lg bg-black/70 px-4 py-2 text-sm font-medium text-white">
                      Click to view full size
                    </div>
                  </div>
                </button>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">Quick Contact</h3>
                  <div className="space-y-4">
                    <a
                      href={COMPANY.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-700 transition-colors hover:text-primary-600"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>WhatsApp: {COMPANY.phoneDisplay}</span>
                    </a>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-center gap-3 text-gray-700 transition-colors hover:text-primary-600"
                    >
                      <Mail className="h-5 w-5" />
                      <span>Email: {COMPANY.email}</span>
                    </a>
                    <a
                      href={COMPANY.phoneHref}
                      className="flex items-center gap-3 text-gray-700 transition-colors hover:text-primary-600"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Phone: {COMPANY.phoneDisplay}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Quick answers to common questions about our products and services.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                [
                  'What is your minimum order quantity?',
                  'Our minimum order quantity varies by product type. Standard products usually start around 1,000 kg.',
                ],
                [
                  'How long does production take?',
                  'Standard products usually take 7 to 15 days. Custom profiles often require 15 to 25 days depending on complexity.',
                ],
                [
                  'Do you provide samples?',
                  'Yes. We can provide samples for evaluation. Timing and cost depend on the product and customization level.',
                ],
                [
                  'What payment terms do you accept?',
                  'We commonly work with T/T and L/C, and can discuss other options based on order size and relationship history.',
                ],
                [
                  'Do you provide technical support?',
                  'Yes. Our team supports product selection, specification review, and installation guidance.',
                ],
                [
                  'What quality certifications do you have?',
                  'We maintain strict inspection standards and can share relevant quality documents and certificates during quotation.',
                ],
              ].map(([question, answer]) => (
                <div key={question} className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">{question}</h3>
                  <p className="text-gray-600">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary-600 text-white">
          <div className="container-custom text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Ready to Start Your Project?</h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
              Contact our team today for professional consultation and competitive quotes.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-8 py-3 font-medium text-primary-600 transition-colors duration-200 hover:bg-gray-100"
              >
                <MessageCircle className="mr-2 inline h-5 w-5" />
                WhatsApp Chat
              </a>
              <a
                href={COMPANY.phoneHref}
                className="rounded-lg border-2 border-white px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-white hover:text-primary-600"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        {isMapModalOpen ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIsMapModalOpen(false)}
          >
            <div className="relative flex h-full w-full items-center justify-center">
              <button
                type="button"
                onClick={() => setIsMapModalOpen(false)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-3xl font-bold text-white hover:text-gray-300"
                aria-label="Close map modal"
              >
                x
              </button>
              <img
                src="/factory-map.png"
                alt={`${COMPANY.name} factory location map`}
                className="max-h-[90vh] max-w-[90vw] object-contain"
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default ContactPage
