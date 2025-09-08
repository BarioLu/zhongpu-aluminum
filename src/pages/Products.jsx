import React, { useState } from 'react'
import SEOHead from '../components/SEOHead'
import Breadcrumb from '../components/Breadcrumb'
import { 
  Search, 
  Download, 
  MessageCircle, 
  ArrowRight,
  CheckCircle,
  Star,
  X,
  ZoomIn
} from 'lucide-react'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  // 产品图册数据
  const productCatalog = [
    // 第一行
    {
      id: 'catalog-1',
      name: 'Wave Panel 001Y',
      image: '/001Y.png',
      category: 'Wave Panel'
    },
    {
      id: 'catalog-2',
      name: 'Great Wall Panel 201',
      image: '/201.png',
      category: 'Great Wall Panel'
    },
    // 第二行
    {
      id: 'catalog-3',
      name: 'Wave Panel 002Y',
      image: '/002Y.png',
      category: 'Wave Panel'
    },
    {
      id: 'catalog-4',
      name: 'Great Wall Panel 203C',
      image: '/203C.png',
      category: 'Great Wall Panel'
    },
    // 第三行
    {
      id: 'catalog-5',
      name: 'Wave Panel 003Y',
      image: '/003Y.png',
      category: 'Wave Panel'
    },
    {
      id: 'catalog-6',
      name: 'Great Wall Panel 205C',
      image: '/205C.png',
      category: 'Great Wall Panel'
    },
    // 第四行
    {
      id: 'catalog-7',
      name: 'Wave Panel 005Y',
      image: '/005Y.png',
      category: 'Wave Panel'
    },
    {
      id: 'catalog-8',
      name: 'Great Wall Panel 209C',
      image: '/209C.png',
      category: 'Great Wall Panel'
    },
    // 第五行
    {
      id: 'catalog-9',
      name: 'Wave Panel 008Y',
      image: '/008Y.png',
      category: 'Wave Panel'
    },
    {
      id: 'catalog-10',
      name: 'Great Wall Panel 214C',
      image: '/214C.png',
      category: 'Great Wall Panel'
    },
    // 第六行
    {
      id: 'catalog-11',
      name: 'Wave Panel 009Y',
      image: '/009Y.png',
      category: 'Wave Panel'
    },
    {
      id: 'catalog-12',
      name: 'Great Wall Panel 215C',
      image: '/215C.png',
      category: 'Great Wall Panel'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'grille', name: 'Aluminum Grille Panel' },
    { id: 'wave', name: 'Wave-shaped Panel' },
    { id: 'great-wall', name: 'Great Wall Panel' },
    { id: 'air-vent', name: 'Air Vent Louvers' },
    { id: 'solid', name: 'Solid Aluminum Panel' },
    { id: 'custom', name: 'Custom Profiles (OEM)' }
  ]

  const products = [
    {
      id: 'grille-1',
      category: 'grille',
      name: 'Aluminum Grille Panel',
      image: '/grille-panel-1.png',
      description: 'Decorative aluminum grille panels for facade, ceiling and partition applications',
      applications: ['Facade', 'Ceiling', 'Partition'],
      features: [
        'Lightweight and durable',
        'Easy installation',
        'Various patterns available',
        'Customizable dimensions'
      ],
      specifications: {
        'Material': '6063-T5 Aluminum',
        'Thickness': '0.7-5.0mm',
        'Width': '10-200mm',
        'Length': '1000-6000mm',
        'Surface': 'Anodized/Powder Coated'
      }
    },
    {
      id: 'wave-1',
      category: 'wave',
      name: 'Wave-shaped Panel',
      image: '/wave-panel-1.jpg',
      description: 'Aesthetic wave-shaped aluminum panels for commercial and interior applications',
      applications: ['Storefront Signage', 'Elevator Lobby', 'TV Wall', 'Bar Counter', 'Corridor'],
      features: [
        'Unique wave design',
        'Eco-friendly properties',
        'Weather resistant',
        'Modern aesthetic appeal'
      ],
      specifications: {
        'Material': '6063-T5 Aluminum',
        'Thickness': '0.7-5.0mm',
        'Width': '10-200mm',
        'Length': '1000-6000mm',
        'Surface': 'Anodized/PVDF'
      }
    },
    {
      id: 'great-wall-1',
      category: 'great-wall',
      name: 'Great Wall Panel',
      image: '/great-wall-panel-1.jpg',
      description: 'High-strength aluminum panels for commercial and interior applications',
      applications: ['Storefront Signage', 'Elevator Lobby', 'TV Wall', 'Bar Counter', 'Corridor'],
      features: [
        'High strength and durability',
        'Fire resistant',
        'Low maintenance',
        'Excellent weather resistance'
      ],
      specifications: {
        'Material': '6063-T5 Aluminum',
        'Thickness': '0.7-5.0mm',
        'Width': '10-200mm',
        'Length': '1000-6000mm',
        'Surface': 'Anodized/Powder Coated'
      }
    },
    {
      id: 'air-vent-1',
      category: 'air-vent',
      name: 'Air Vent Louvers',
      image: '/air-vent-louvers-1.jpg',
      description: 'Functional and decorative air vent louvers for HVAC systems',
      applications: ['HVAC', 'Ventilation', 'Industrial', 'Commercial'],
      features: [
        'Air flow control',
        'Corrosion resistant',
        'Customizable angles',
        'Easy maintenance'
      ],
      specifications: {
        'Material': '6063-T5 Aluminum',
        'Thickness': '0.7-5.0mm',
        'Width': '10-200mm',
        'Length': '1000-6000mm',
        'Surface': 'Anodized/Powder Coated'
      }
    },
    {
      id: 'solid-1',
      category: 'solid',
      name: 'Solid Aluminum Panel',
      image: '/solid-panel-1.jpg',
      description: 'High-quality solid aluminum panels for various applications',
      applications: ['Cladding', 'Partition', 'Decoration', 'Industrial'],
      features: [
        'High strength',
        'Excellent durability',
        'Smooth surface finish',
        'Customizable thickness'
      ],
      specifications: {
        'Material': '6063-T5 Aluminum',
        'Thickness': '1.0-10.0mm',
        'Width': '50-2000mm',
        'Length': '1000-6000mm',
        'Surface': 'Anodized/Powder Coated/PVDF'
      }
    },
    {
      id: 'custom-1',
      category: 'custom',
      name: 'Custom Profiles (OEM)',
      image: '/custom-profiles-1.jpg',
      description: 'Custom aluminum profiles designed and manufactured to your specifications',
      applications: ['Custom Design', 'OEM/ODM', 'Special Projects', 'Architectural'],
      features: [
        'Custom design service',
        'OEM/ODM capabilities',
        'Flexible manufacturing',
        'Technical support'
      ],
      specifications: {
        'Material': '6063-T5/6061-T6 Aluminum',
        'Thickness': '0.5-20.0mm',
        'Width': '5-500mm',
        'Length': '500-12000mm',
        'Surface': 'All available options'
      }
    }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  // 图片模态框组件
  const ImageModal = ({ image, onClose }) => {
    if (!image) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="relative w-full h-full flex items-center justify-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={image.image}
            alt={image.name}
            className="max-w-full max-h-full object-contain"
            style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    )
  }

  return (
    <>
      <SEOHead 
        title="Aluminum Profile Products - Grille Panels, Wave Panels & Custom Profiles"
        description="Explore our high-quality aluminum profile products including grille panels, wave panels, air vent louvers, solid panels, and custom profiles. Professional manufacturer in Foshan, China."
        keywords="aluminum profile products, aluminum grille panels, wave panels, great wall panels, air vent louvers, solid aluminum panels, custom aluminum profiles, Foshan aluminum products"
      />
      <div>
        {/* Breadcrumb */}
        <div className="container-custom">
          <Breadcrumb items={[{name: 'Products'}]} />
        </div>
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative container-custom section-padding">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Our Products
              </h1>
              <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
                High-quality decorative aluminum profiles for architectural, interior design, 
                and industrial applications
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Product Categories
              </h2>
              <p className="text-lg text-gray-600">
                Browse our comprehensive range of aluminum profile solutions
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-gray-500">Product Image</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((app, idx) => (
                          <span key={idx} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <button className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-primary-600">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-primary-600">
                          <MessageCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Catalog - 新增部分 */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Product Catalog & Technical Drawings
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {productCatalog.slice(0, 12).map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="w-full bg-gray-200 overflow-hidden relative" style={{ aspectRatio: '2400/626' }}>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-gray-500 text-sm text-center px-2">Product Specs</span>
                    </div>
                    {/* 放大图标覆盖层 */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 联系提示信息 */}
            <div className="mt-12 text-center">
              <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Need More Specifications?
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Above are some of our product specification drawings. For complete technical parameters, detailed specification sheets, or customized solutions, please contact our technical team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/8618957133982"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Inquiry
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Get Full Specifications
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Specifications */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Product Specifications
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Standard specifications for our aluminum profile products
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.slice(0, 3).map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 font-medium">{key}:</span>
                        <span className="text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              We offer OEM/ODM services for custom aluminum profiles. 
              Contact us to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/8618957133982"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 inline mr-2" />
                Get Custom Quote
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Contact Sales Team
              </a>
            </div>
          </div>
        </section>

        {/* 图片模态框 */}
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      </div>
    </>
  )
}

export default Products 