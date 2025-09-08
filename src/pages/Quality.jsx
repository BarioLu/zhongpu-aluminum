import React from 'react'
import SEOHead from '../components/SEOHead'
import Breadcrumb from '../components/Breadcrumb'
import { 
  Shield, 
  CheckCircle, 
  Award, 
  FileText,
  MessageCircle,
  Download,
  ArrowRight
} from 'lucide-react'

const Quality = () => {
  const qualityStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Quality Control - Zhongpu Aluminum",
    "description": "Learn about Zhongpu Aluminum's comprehensive quality control processes, ISO certification, and testing standards for aluminum profiles.",
    "url": "https://zhongpu-aluminum.com/quality",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zhongpu Aluminum",
      "description": "ISO certified aluminum profile manufacturer with comprehensive quality control"
    }
  }
  const qualityProcess = [
    {
      step: '1',
      title: 'Raw Material Inspection',
      description: 'Comprehensive testing of incoming aluminum materials for composition and mechanical properties',
      tests: ['Chemical composition analysis', 'Mechanical property testing', 'Surface quality inspection'],
      equipment: 'Metal Composition Analyzer, Metal Flaw Detector'
    },
    {
      step: '2',
      title: 'Production Process Control',
      description: 'Real-time monitoring and control of extrusion and surface treatment processes',
      tests: ['Temperature monitoring', 'Pressure control', 'Speed regulation', 'Quality sampling'],
      equipment: 'Process control systems, Quality sampling tools'
    },
    {
      step: '3',
      title: 'Surface Treatment Quality',
      description: 'Rigorous testing of surface treatment quality including thickness, adhesion, and appearance',
      tests: ['Coating thickness measurement', 'Adhesion testing', 'Color matching', 'Surface appearance'],
      equipment: 'Thickness gauge, Adhesion tester, Color spectrophotometer'
    },
    {
      step: '4',
      title: 'Final Product Inspection',
      description: 'Comprehensive final inspection including dimensions, appearance, and performance testing',
      tests: ['Dimensional accuracy', 'Visual inspection', 'Performance testing', 'Packaging verification'],
      equipment: 'Measuring instruments, Visual inspection system'
    },
    {
      step: '5',
      title: 'Quality Documentation',
      description: 'Complete documentation of quality control process and test results for traceability',
      tests: ['Test report generation', 'Quality certificate issuance', 'Documentation management'],
      equipment: 'Quality management system'
    },
    {
      step: '6',
      title: 'Pre-shipment Inspection',
      description: 'Final verification before shipment to ensure all requirements are met',
      tests: ['Final visual inspection', 'Packaging verification', 'Documentation review'],
      equipment: 'Inspection checklist, Quality control system'
    }
  ]

  const certifications = [
    {
      name: 'Quality Control System',
      description: 'Strict quality management process',
      scope: 'Design, development, production and sales of aluminum profiles',
      validity: 'Ongoing',
      icon: <Award className="w-8 h-8" />
    },
    {
      name: 'Environmental Protection Standards',
      description: 'Environmental management in manufacturing',
      scope: 'Environmental management in aluminum profile manufacturing',
      validity: 'Ongoing',
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: 'Occupational Health and Safety Standards',
      description: 'Occupational health and safety management',
      scope: 'Occupational health and safety management system',
      validity: 'Ongoing',
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: 'High-Tech Enterprise Certification',
      description: 'National High-Tech Enterprise Recognition',
      scope: 'Innovation and technology development capabilities',
      validity: '2023-2026',
      icon: <Award className="w-8 h-8" />
    },
    {
      name: 'Enterprise Credit Rating AAA',
      description: 'Highest level of enterprise credit rating',
      scope: 'Financial stability and business credibility',
      validity: 'Annual renewal',
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      name: 'Green Manufacturing Certification',
      description: 'Environmentally friendly manufacturing practices',
      scope: 'Sustainable production and environmental protection',
      validity: 'Ongoing',
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: 'Innovation Enterprise Certification',
      description: 'Recognition for innovative capabilities',
      scope: 'Product innovation and R&D capabilities',
      validity: '2023-2026',
      icon: <Award className="w-8 h-8" />
    }
  ]

  const qualityCommitments = [
    {
      title: '100% Inspection',
      description: 'Every product undergoes comprehensive quality inspection before shipment',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Material Traceability',
      description: 'Complete traceability of raw materials and production processes',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'Quality Guarantee',
      description: 'Quality guarantee for all products with comprehensive warranty coverage',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Continuous Improvement',
      description: 'Ongoing quality improvement programs and process optimization',
      icon: <ArrowRight className="w-6 h-6" />
    }
  ]

  return (
    <>
      <SEOHead 
        title="Quality Control & ISO Certification - Aluminum Profile Testing"
        description="Zhongpu Aluminum maintains the highest quality standards with ISO certification, comprehensive testing processes, and quality control for all aluminum profiles."
        keywords="aluminum profile quality control, ISO certification aluminum, aluminum testing standards, quality assurance Foshan, aluminum profile inspection"
        url="https://zhongpu-aluminum.com/quality"
        structuredData={qualityStructuredData}
      />
      <div>
        {/* Breadcrumb */}
        <div className="container-custom">
          <Breadcrumb items={[{name: 'Quality Control'}]} />
        </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container-custom section-padding">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Quality Control & Certifications
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Comprehensive quality management system ensuring the highest standards 
              in aluminum profile manufacturing
            </p>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quality Control Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to quality control ensures consistent and reliable products
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityProcess.map((process, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {process.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {process.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Quality Tests:</h4>
                    <ul className="space-y-1">
                      {process.tests.map((test, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {test}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm">
                    <span className="font-medium text-gray-700">Equipment: </span>
                    <span className="text-gray-600">{process.equipment}</span>
                  </div>
                </div>
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
              Our Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              International certifications demonstrating our commitment to quality and standards
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="text-primary-600 mr-4">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {cert.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Scope: </span>
                    <span className="text-gray-600">{cert.scope}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Validity: </span>
                    <span className="text-gray-600">{cert.validity}</span>
                  </div>
                </div>

                <button className="mt-4 inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  <Download className="w-4 h-4 mr-1" />
                  View Certificate
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitments */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Quality Commitments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our promises to ensure the highest quality standards for every product
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {qualityCommitments.map((commitment, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 mt-1">
                    {commitment.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {commitment.title}
                    </h3>
                    <p className="text-gray-600">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Statistics */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quality Performance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our quality metrics demonstrate our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">99.8%</div>
              <div className="text-gray-600">Quality Pass Rate</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Inspection Coverage</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">0.1%</div>
              <div className="text-gray-600">Defect Rate</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Equipment */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced Quality Testing Equipment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              State-of-the-art equipment for comprehensive quality testing and verification
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Digital Thickness Gauge',
                description: 'Precise measurement of coating thickness with digital accuracy',
                application: 'Surface treatment quality control'
              },
              {
                name: 'Salt Spray Chamber',
                description: 'Corrosion resistance testing under controlled salt spray conditions',
                application: 'Durability testing'
              },
              {
                name: 'Color Spectrophotometer',
                description: 'Accurate color matching and measurement for surface finishes',
                application: 'Color quality control'
              },
              {
                name: 'Tensile Testing Machine',
                description: 'Mechanical property testing for material strength verification',
                application: 'Material quality testing'
              },
              {
                name: 'Cross-cut Adhesion Tester',
                description: 'Testing coating adhesion strength and durability',
                application: 'Surface treatment verification'
              },
              {
                name: 'Weathering Chamber',
                description: 'Accelerated weathering tests for long-term performance evaluation',
                application: 'Environmental resistance testing'
              }
            ].map((equipment, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {equipment.name}
                </h3>
                <p className="text-gray-600 mb-3">
                  {equipment.description}
                </p>
                <div className="text-sm">
                  <span className="font-medium text-gray-700">Application: </span>
                  <span className="text-gray-600">{equipment.application}</span>
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
            Trust Our Quality Standards
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Experience the difference that comprehensive quality control makes in your projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8618957133982"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 inline mr-2" />
              Get Quality Assurance
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Request Quality Report
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Quality 