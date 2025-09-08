import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 py-4" aria-label="Breadcrumb">
      <Link 
        to="/" 
        className="flex items-center space-x-1 hover:text-primary-600 transition-colors"
        aria-label="Home"
      >
        <Home size={16} />
        <span>Home</span>
      </Link>
      
      {items && items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={16} className="text-gray-400" />
          {item.href ? (
            <Link 
              to={item.href} 
              className="hover:text-primary-600 transition-colors"
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium" aria-current="page">
              {item.name}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

export default Breadcrumb