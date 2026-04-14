import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  X,
  Youtube,
} from 'lucide-react'
import { COMPANY } from '../config/company'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Surface Finishing', path: '/surface-finishing' },
  { name: 'Quality', path: '/quality' },
  { name: 'Contact', path: '/contact' },
]

const productCategories = [
  { name: 'Aluminum Grille Panel', path: '/products#grille-panels' },
  { name: 'Wave-shaped Panel', path: '/products#wave-panels' },
  { name: 'Great Wall Panel', path: '/products#great-wall-panels' },
  { name: 'Air Vent Louvers', path: '/products#air-vent-louvers' },
  { name: 'Solid Aluminum Panel', path: '/products#solid-panels' },
  { name: 'Custom Profiles (OEM)', path: '/products#custom-profiles' },
]

const services = [
  { name: 'OEM/ODM Services', path: '/about#capabilities' },
  { name: 'Custom Design', path: '/about#capabilities' },
  { name: 'Technical Support', path: '/contact#technical-support' },
  { name: 'Quality Assurance', path: '/quality#quality-process' },
  { name: 'Sample Service', path: '/contact#sample-request' },
  { name: 'Company Profile', path: '/about#company-overview' },
]

const socialLinks = [
  { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, url: 'https://facebook.com' },
  { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com' },
  { name: 'YouTube', icon: <Youtube className="h-5 w-5" />, url: 'https://youtube.com' },
  { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com' },
]

const qrCodes = [
  {
    name: 'WeChat',
    image: '/wechat.png',
    description: 'Scan to add our WeChat account',
  },
  {
    name: 'WhatsApp',
    image: '/whatapp.png',
    description: 'Scan to start a WhatsApp conversation',
  },
]

const FooterMain = () => {
  const currentYear = new Date().getFullYear()
  const [showQRCode, setShowQRCode] = useState(null)

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-xl font-bold text-white">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{COMPANY.name}</h3>
                <p className="text-sm text-gray-400">{COMPANY.tagline}</p>
              </div>
            </div>
            <p className="mb-6 text-gray-300">
              Professional decorative aluminum profile manufacturer from Foshan, China.
              We build dependable architectural and industrial aluminum solutions for
              customers worldwide.
            </p>
            <div className="space-y-3 text-gray-300">
              <a href={COMPANY.phoneHref} className="flex items-center gap-3 hover:text-white">
                <Phone className="h-4 w-4" />
                <span>{COMPANY.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                <span>{COMPANY.email}</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>{COMPANY.addressShort}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Products</h4>
            <ul className="space-y-3">
              {productCategories.map((product) => (
                <li key={product.path}>
                  <Link
                    to={product.path}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-gray-400">
              <p>&copy; {currentYear} {COMPANY.name}. All rights reserved.</p>
              <p className="mt-1">Quality Assured / 5+ Years Experience</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {qrCodes.map((qr) => (
                <div key={qr.name} className="relative">
                  <button
                    type="button"
                    onClick={() => setShowQRCode((current) => (current === qr.name ? null : qr.name))}
                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm text-white transition-colors hover:bg-green-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{qr.name}</span>
                  </button>

                  {showQRCode === qr.name && (
                    <div className="absolute bottom-full right-0 z-50 mb-2 rounded-lg bg-white p-4 shadow-xl">
                      <div className="mb-2 flex items-center justify-between">
                        <h5 className="text-sm font-medium text-gray-900">{qr.name} QR Code</h5>
                        <button
                          type="button"
                          onClick={() => setShowQRCode(null)}
                          className="text-gray-500 hover:text-gray-700"
                          aria-label="Close QR code"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="h-32 w-32 overflow-hidden rounded-lg bg-gray-100">
                        <img src={qr.image} alt={`${qr.name} QR code`} className="h-full w-full object-cover" />
                      </div>
                      <p className="mt-2 text-center text-xs text-gray-600">{qr.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 py-4">
        <div className="container-custom flex flex-col items-center justify-between gap-2 text-xs text-gray-500 md:flex-row">
          <p>Professional aluminum profile manufacturer / Export to 30+ countries / OEM and ODM services</p>
          <p>Built in Foshan, China</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterMain
