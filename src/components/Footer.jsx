import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  X
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showQRCode, setShowQRCode] = useState(null)

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },

    { name: 'Surface Finishing', path: '/surface-finishing' },
    { name: 'Quality', path: '/quality' },

    { name: 'Contact', path: '/contact' }
  ]

  const productCategories = [
    { name: 'Aluminum Grille Panel', path: '/products#grille-panels' },
    { name: 'Wave-shaped Panel', path: '/products#wave-panels' },
    { name: 'Great Wall Panel', path: '/products#great-wall-panels' },
    { name: 'Air Vent Louvers', path: '/products#air-vent-louvers' },
    { name: 'Solid Aluminum Panel', path: '/products#solid-panels' },
    { name: 'Custom Profiles (OEM)', path: '/products#custom-profiles' }
  ]

  const services = [
    { name: 'OEM/ODM Services', path: '/about#services' },
    { name: 'Custom Design', path: '/about#capabilities' },
    { name: 'Technical Support', path: '/contact#technical-support' },
    { name: 'Quality Assurance', path: '/quality#quality-process' },
    { name: 'Sample Service', path: '/contact#sample-request' },
    { name: 'Global Shipping', path: '/about#global-reach' }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: 'https://youtube.com' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com' }
  ]

  const qrCodes = [
    {
      name: 'WeChat',
      image: '/wechat.png',
      description: 'Scan to add WeChat friend',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'WhatsApp',
      image: '/whatapp.png',
      description: 'Scan to add WhatsApp contact',
      color: 'bg-green-600 hover:bg-green-700'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Zhongpu Aluminum</h3>
                <p className="text-sm text-gray-400">Professional Manufacturer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Professional decorative aluminum profile manufacturer from Foshan, China. 
              Committed to providing high-quality solutions for global customers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+86 18957133982</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>zhongpualu@outlook.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Foshan, Guangdong, China</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {productCategories.map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} Zhongpu Aluminum. All rights reserved.</p>
              <p className="mt-1">Quality Assured • 5+ Years Experience</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* QR Code Buttons */}
            <div className="flex items-center space-x-3">
              {qrCodes.map((qr, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => setShowQRCode(showQRCode === qr.name ? null : qr.name)}
                    className={`inline-flex items-center space-x-2 ${qr.color} text-white px-4 py-2 rounded-lg transition-colors duration-200`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{qr.name}</span>
                  </button>
                  
                  {/* QR Code Modal */}
                  {showQRCode === qr.name && (
                    <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-xl p-4 z-50">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-gray-900 font-medium text-sm">{qr.name} QR Code</h5>
                        <button
                          onClick={() => setShowQRCode(null)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={qr.image} 
                          alt={`${qr.name} QR Code`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                          <span className="text-gray-500 text-xs">{qr.name} QR Code</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs mt-2 text-center">{qr.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-gray-950 py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-500 text-xs">
              <p>Professional aluminum profile manufacturer • Export to 30+ countries • OEM/ODM services available</p>
            </div>
            <div className="text-gray-500 text-xs">
              <p>Made with ❤️ in Foshan, China</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 