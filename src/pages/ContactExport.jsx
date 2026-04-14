import React, { useEffect, useState } from 'react'
import {
  CheckCircle,
  Clock,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import SEOHead from '../components/SEOHead'
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
    title: 'Phone & WhatsApp',
    content: COMPANY.phoneDisplay,
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email',
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

const requestChecklist = [
  'Product type or application scene',
  'Drawing, section image, or reference photo',
  'Surface finish and color target',
  'Estimated quantity and target market',
]

const faqItems = [
  {
    question: 'Can I send a drawing directly for quotation?',
    answer: 'Yes. Drawing-based inquiries are one of the fastest ways for us to review feasibility and quote direction.',
  },
  {
    question: 'Do you support OEM and custom profile development?',
    answer: 'Yes. We support custom profile requests for decorative, architectural, and OEM applications.',
  },
  {
    question: 'Can you recommend a suitable profile if I only have reference images?',
    answer: 'Yes. If you do not have a final drawing yet, we can start from application photos or concept references.',
  },
  {
    question: 'Do you provide samples before mass production?',
    answer: 'Yes. Sample and approval steps can be discussed depending on the project and customization level.',
  },
]

const ContactExport = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)

  useEffect(() => {
    initEmailJS()
  }, [])

  useEffect(() => {
    if (!isMapModalOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMapModalOpen(false)
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
      'Contact Zhongpu Aluminum for custom aluminum profile quotation, project discussion, and technical follow-up.',
    url: buildSiteUrl('/contact'),
    mainEntity: {
      '@type': 'Organization',
      name: COMPANY.name,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: COMPANY.phoneDisplay.replace(/\s/g, '-'),
        contactType: 'sales',
        email: COMPANY.email,
        availableLanguage: 'English, Chinese',
      },
    },
  }

  return (
    <>
      <SEOHead
        title="Contact Zhongpu Aluminum - Send Drawing for Quotation"
        description="Contact Zhongpu Aluminum for custom aluminum profile quotation, technical support, and export project discussion."
        keywords="contact aluminum profile manufacturer, send drawing for quotation, custom aluminum profile contact, OEM aluminum supplier contact"
        url={buildSiteUrl('/contact')}
        structuredData={contactStructuredData}
      />
      <div>
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Contact' }]} />
        </div>

        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.15),_transparent_30%)]" />
          <div className="relative container-custom section-padding">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="inline-flex rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-2 text-sm text-primary-100">
                  Contact page redesigned for inquiry clarity and faster lead qualification
                </div>
                <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Send Your Project Information and Get a Faster Custom Quote
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                  If you have a drawing, product idea, or target finish, this page now helps buyers
                  understand what to send and how to start a practical project conversation.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={COMPANY.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-7 py-4 font-semibold text-white transition-colors hover:bg-primary-600"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp for Fast Response
                  </a>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-slate-950"
                  >
                    Email Sales Team
                  </a>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary-300" />
                  <h2 className="text-xl font-semibold">Best information to send us</h2>
                </div>
                <div className="mt-5 grid gap-3">
                  {requestChecklist.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-300" />
                      <span className="text-sm leading-6 text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="rounded-3xl bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                    {info.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{info.title}</h3>
                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-600">{info.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sample-request" className="section-padding">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr]">
              <div className="rounded-3xl bg-white p-7 shadow-md ring-1 ring-slate-200">
                <h2 className="text-3xl font-bold text-slate-900">Start Your Inquiry</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  The form is now positioned as the start of a custom project discussion, not just a
                  generic contact message.
                </p>

                {isSubmitted ? (
                  <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-800">Inquiry Sent Successfully</h3>
                        <p className="text-green-700">
                          Thank you. We will review your request and get back to you as soon as possible.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    {submitError ? (
                      <div className="rounded border border-red-200 bg-red-100 px-4 py-3 text-red-800" role="alert">
                        {submitError}
                      </div>
                    ) : null}

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Custom aluminum profile, drawing quotation, finish request..."
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="7"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Tell us the product type, finish, quantity, installation use, or any drawing details you already have..."
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <button type="submit" className="btn-primary inline-flex items-center" disabled={isLoading}>
                        {isLoading ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Inquiry
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

              <div className="grid gap-6">
                <button
                  type="button"
                  className="relative h-72 overflow-hidden rounded-3xl bg-slate-100 text-left shadow-md ring-1 ring-slate-200 transition-opacity hover:opacity-95"
                  onClick={() => setIsMapModalOpen(true)}
                >
                  <img src="/factory-map.png" alt={`${COMPANY.name} factory location map`} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6">
                    <div>
                      <div className="text-lg font-semibold text-white">Factory Location</div>
                      <div className="mt-1 text-sm text-slate-200">Click to view the map in full size</div>
                    </div>
                  </div>
                </button>

                <div className="rounded-3xl bg-slate-950 p-7 text-white">
                  <h3 className="text-2xl font-semibold">Prefer direct contact?</h3>
                  <div className="mt-5 grid gap-4">
                    <a
                      href={COMPANY.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-100 transition-colors hover:text-white"
                    >
                      <MessageCircle className="h-5 w-5 text-primary-300" />
                      <span>WhatsApp: {COMPANY.phoneDisplay}</span>
                    </a>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-center gap-3 text-slate-100 transition-colors hover:text-white"
                    >
                      <Mail className="h-5 w-5 text-primary-300" />
                      <span>Email: {COMPANY.email}</span>
                    </a>
                    <a href={COMPANY.phoneHref} className="flex items-center gap-3 text-slate-100 transition-colors hover:text-white">
                      <Phone className="h-5 w-5 text-primary-300" />
                      <span>Phone: {COMPANY.phoneDisplay}</span>
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-7 shadow-md ring-1 ring-slate-200">
                  <h3 className="text-2xl font-semibold text-slate-900">FAQ for first inquiries</h3>
                  <div className="mt-5 grid gap-5">
                    {faqItems.map((faq) => (
                      <div key={faq.question}>
                        <div className="font-semibold text-slate-900">{faq.question}</div>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-br from-primary-600 to-sky-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold lg:text-5xl">Ready to Move a Custom Aluminum Project Forward?</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-primary-50">
              Send the available information you have now. Even if the drawing is not final, we can
              still start with the product use, finish target, and reference images.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-4 font-semibold text-primary-700 transition-colors hover:bg-slate-100"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start on WhatsApp
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-primary-700"
              >
                Email Your Inquiry
              </a>
            </div>
          </div>
        </section>

        {isMapModalOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setIsMapModalOpen(false)}>
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

export default ContactExport
