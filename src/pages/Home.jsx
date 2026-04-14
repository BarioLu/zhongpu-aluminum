import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { buildSiteUrl, COMPANY } from '../config/company'
import { Award, Globe, Factory, Shield, MessageCircle } from 'lucide-react'

const Home = () => {
  // 初始化EmailJS
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Zhongpu Aluminum - Professional Decorative Aluminum Profile Manufacturer",
    "description": "Leading decorative aluminum profile manufacturer in Foshan, China. 5+ years experience, ISO certified, OEM/ODM services.",
    "url": buildSiteUrl(),
    "mainEntity": {
      "@type": "Organization",
      "name": "Zhongpu Aluminum",
      "description": "Professional decorative aluminum profile manufacturer"
    }
  }

  const handleQuickInquiry = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const requirements = formData.get('requirements')
    
    if (!name || !email || !requirements) {
      setQuickInquiryError('Please fill in all fields.')
      return
    }
    
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setQuickInquiryError('Please enter a valid email address.')
      return
    }
    
    setIsQuickInquiryLoading(true)
    setQuickInquiryError('')
    
    try {
      const result = await sendQuickInquiry({
        name,
        email,
        requirements
      })
      
      if (result.success) {
        setIsQuickInquirySubmitted(true)
        e.target.reset()
        
        // 5秒后隐藏成功消息
        setTimeout(() => {
          setIsQuickInquirySubmitted(false)
        }, 5000)
      } else {
        setQuickInquiryError('Failed to send inquiry. Please try again or contact us directly.')
      }
    } catch (error) {
      setQuickInquiryError('An error occurred. Please try again or contact us directly.')
    } finally {
      setIsQuickInquiryLoading(false)
    }
  }

  const advantages = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "5+ Years Experience",
      description: "Professional aluminum profile manufacturing since 2020"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "OEM & ODM",
      description: "Custom design and manufacturing capabilities"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Export to 30+ Countries",
      description: "Global supply chain and logistics network"
    },
    {
      icon: <Shield className="w-8 h-8" />,
              title: "Quality Assured",
              description: "Strict quality control system"
    }
  ]

  const hotProducts = [
    {
      name: "Aluminum Grille Panel",
      image: "/grille-panel.png",
      applications: ["Facade", "Ceiling", "Partition"],
      features: ["Lightweight", "Durable", "Easy Installation"]
    },
    {
      name: "Wave-shaped Panel",
      image: "/wave-panel.jpg",
      applications: ["Storefront Signage", "Elevator Lobby", "TV Wall", "Bar Counter", "Corridor"],
      features: ["Aesthetic Design", "Eco-friendly", "Weather Resistant"]
    },
    {
      name: "Great Wall Panel",
      image: "/great-wall-panel.jpg",
      applications: ["Storefront Signage", "Elevator Lobby", "TV Wall", "Bar Counter", "Corridor"],
      features: ["High Strength", "Fire Resistant", "Low Maintenance"]
    },
    {
      name: "Air Vent Louvers",
      image: "/air-vent-louvers.jpg",
      applications: ["HVAC", "Ventilation"],
      features: ["Air Flow Control", "Corrosion Resistant", "Customizable"]
    }
  ]

  const surfaceFinishes = [
    { name: "Anodized", color: "bg-gray-200" },
    { name: "Powder Coated", color: "bg-blue-200" },
    { name: "PVDF", color: "bg-green-200" },
    { name: "Wood Grain", color: "bg-yellow-200" }
  ]

  return (
    <>
      <SEOHead 
        title="Professional Decorative Aluminum Profile Manufacturer"
        description="Leading decorative aluminum profile manufacturer in Foshan, China. 5+ years experience, ISO certified, OEM/ODM services. High-quality aluminum grille panels, wave panels, and custom profiles."
        keywords="aluminum profile manufacturer, decorative aluminum profiles, aluminum grille panels, wave panels, Foshan aluminum, China aluminum manufacturer, OEM aluminum profiles, ODM aluminum"
        structuredData={homeStructuredData}
      />
      <div>
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative container-custom section-padding">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Professional Decorative Aluminum Profile Manufacturer
              </h1>
              <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
                Leading manufacturer of high-quality decorative aluminum profiles in Foshan, China. 5+ years experience, ISO certified, OEM/ODM services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/8618957133982"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get Quote Now
                </a>
                <Link to="/products" className="btn-secondary">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Company Advantages */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zhongpu Aluminum?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive solutions with professional service and reliable quality
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <article key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Hot Products */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Hot Products
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our most popular decorative aluminum profile products
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hotProducts.map((product, index) => (
                <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={`${product.name} - ${product.description}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.features.map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link to="/products" className="btn-primary w-full text-center">
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      {/* Surface Finishing */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Surface Finishing Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple surface treatment options to meet your specific requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {surfaceFinishes.map((finish, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className={`w-16 h-16 ${finish.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-gray-700 font-medium">{finish.name[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {finish.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional {finish.name.toLowerCase()} surface treatment
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/surface-finishing" className="btn-primary">
              View All Finishing Options
            </Link>
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
            Get in touch with our team for professional consultation and competitive quotes
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
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Home 
