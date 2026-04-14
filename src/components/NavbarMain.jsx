import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { COMPANY } from '../config/company'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Surface Finishing', path: '/surface-finishing' },
  { name: 'Quality', path: '/quality' },
  { name: 'Contact', path: '/contact' },
]

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="bg-primary-600 py-2 text-white">
        <div className="container-custom flex items-center justify-between gap-4 text-sm">
          <div className="flex flex-wrap items-center gap-4">
            <a href={COMPANY.phoneHref} className="flex items-center gap-2 hover:text-primary-100">
              <Phone size={14} />
              <span>{COMPANY.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-2 hover:text-primary-100"
            >
              <Mail size={14} />
              <span>{COMPANY.email}</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-3 text-primary-50">
            <span>Quality Assured</span>
            <span>/</span>
            <span>5+ Years Experience</span>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
              <span className="text-xl font-bold text-white">Z</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{COMPANY.name}</h1>
              <p className="text-xs text-gray-500">{COMPANY.tagline}</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Quote
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-md p-2 text-gray-700 hover:text-primary-600 lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-gray-200 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
                onClick={closeMenu}
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavbarMain
