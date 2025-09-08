import React from 'react'
import SEOHead from '../components/SEOHead'
import Breadcrumb from '../components/Breadcrumb'
import { 
  MapPin, 
  Factory, 
  Users, 
  Award, 
  Globe, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const About = () => {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Zhongpu Aluminum",
    "description": "Learn about Zhongpu Aluminum, a professional decorative aluminum profile manufacturer in Foshan, China with 5+ years of experience.",
    "url": "https://zhongpu-aluminum.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zhongpu Aluminum",
      "foundingDate": "2020",
      "description": "Professional decorative aluminum profile manufacturer"
    }
  }

  const companyStats = [
    { icon: <Factory className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Users className="w-8 h-8" />, number: "100+", label: "Employees" },
    { icon: <Globe className="w-8 h-8" />, number: "30+", label: "Export Countries" },
    { icon: <Award className="w-8 h-8" />, number: "1000+", label: "Orders Completed" }
  ]

  const productionLines = [
    {
      title: "Extrusion Lines",
      icon: <Factory className="w-6 h-6" />,
      description: "Advanced aluminum extrusion equipment with annual capacity of 10,000 tons"
    },
    {
      title: "Anodizing Lines",
      icon: <Shield className="w-6 h-6" />,
      description: "Professional anodizing treatment with various color options"
    },
    {
      title: "Powder Coating Lines",
      icon: <CheckCircle className="w-6 h-6" />,
      description: "Automated powder coating system with RAL color matching"
    },
    {
      title: "Quality Control",
      icon: <Award className="w-6 h-6" />,
      description: "Comprehensive quality inspection before shipment"
    }
  ]

  const certifications = [
    "Strict Quality Control System",
    "Environmental Protection Standards",
    "Occupational Health and Safety Standards",
    "High-Tech Enterprise Certification",
    "Enterprise Credit Rating AAA",
    "Quality Management System Certification",
    "Green Manufacturing Certification",
    "Innovation Enterprise Certification"
  ]

  return (
    <>
      <SEOHead 
        title="About Us - Professional Aluminum Profile Manufacturer"
        description="Learn about Zhongpu Aluminum, a professional decorative aluminum profile manufacturer in Foshan, China with 5+ years of experience and ISO certification."
        keywords="about Zhongpu Aluminum, aluminum profile manufacturer history, Foshan aluminum company, China aluminum manufacturer about"
        url="https://zhongpu-aluminum.com/about"
        structuredData={aboutStructuredData}
      />
      <div>
        {/* Breadcrumb */}
        <div className="container-custom">
          <Breadcrumb items={[{name: 'About Us'}]} />
        </div>
        
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container-custom section-padding">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About Zhongpu Aluminum
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Professional decorative aluminum profile manufacturer from Foshan, China, 
              committed to providing high-quality solutions for global customers.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Company Overview
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2020, Zhongpu Aluminum has grown into a leading manufacturer 
                  of decorative aluminum profiles in Foshan, China. Our company specializes 
                  in the production of high-quality aluminum profiles for architectural, 
                  interior design, and industrial applications.
                </p>
                <p>
                  With over 5 years of experience, we have established a strong reputation 
                  for quality, innovation, and customer service. Our products are exported 
                  to more than 30 countries worldwide, serving architects, contractors, 
                  and manufacturers who demand the highest standards.
                </p>
                <p>
                  Located in Foshan, the aluminum capital of China, we benefit from 
                  the complete industrial chain and advanced manufacturing technology, 
                  ensuring competitive pricing and reliable quality.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 overflow-hidden">
              <img 
                src="/factory.jpg" 
                alt="Zhongpu Aluminum factory facility in Foshan China - professional aluminum profile manufacturing" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-gray-500">Factory Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key statistics that demonstrate our scale and experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capability */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Production Capability
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced manufacturing facilities and comprehensive production lines
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {productionLines.map((line, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-primary-600">
                      {line.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {line.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {line.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Quality
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards through international certifications
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 overflow-hidden">
              <img 
                src="/certification-images.png" 
                alt="ISO certification and quality assurance certificates - Zhongpu Aluminum manufacturing standards" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-gray-500">Certification Images</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Contact our team to discuss your project requirements and get professional consultation
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
            <a
              href="/contact"
              className="btn-secondary"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default About 