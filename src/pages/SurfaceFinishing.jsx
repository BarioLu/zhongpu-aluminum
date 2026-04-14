import React from 'react'
import SEOHead from '../components/SEOHead'
import Breadcrumb from '../components/Breadcrumb'
import { buildSiteUrl, COMPANY } from '../config/company'
import { 
  Palette, 
  Shield, 
  Zap, 
  Droplets,
  Download,
  MessageCircle,
  CheckCircle
} from 'lucide-react'

const SurfaceFinishing = () => {
  const surfaceFinishingStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Surface Finishing Services - ${COMPANY.name}`,
    "description": "Professional aluminum surface finishing services for decorative aluminum wall panel, ceiling panel, and facade panel projects.",
    "url": buildSiteUrl('/surface-finishing'),
    "provider": {
      "@type": "Organization",
      "name": COMPANY.name
    },
    "serviceType": ["Anodizing", "Powder Coating", "PVDF Coating", "Wood Grain Finish", "Brushed Finish"]
  }
  const finishingProcesses = [
    {
      name: 'Anodizing',
      icon: <Shield className="w-8 h-8" />,
      description: 'Electrochemical process that creates a protective oxide layer on aluminum surface',
      advantages: [
        'Excellent corrosion resistance',
        'Durable and long-lasting',
        'Available in various colors',
        'Environmentally friendly',
        'Maintains metallic appearance'
      ],
      colors: ['Silver', 'Bronze', 'Gold', 'Black', 'Blue', 'Red'],
      thickness: '5-25 microns',
      applications: ['Exterior facades', 'Interior decoration', 'Automotive parts', 'Electronics']
    },
    {
      name: 'Powder Coating',
      icon: <Palette className="w-8 h-8" />,
      description: 'Dry finishing process using electrostatically applied powder that is cured under heat',
      advantages: [
        'Wide range of colors available',
        'Excellent durability',
        'Uniform coating thickness',
        'Environmentally friendly',
        'Cost-effective'
      ],
      colors: ['RAL color matching', 'Custom colors', 'Metallic finishes', 'Textured finishes'],
      thickness: '60-120 microns',
      applications: ['Architectural panels', 'Furniture', 'Automotive parts', 'Industrial equipment']
    },
    {
      name: 'PVDF Coating',
      icon: <Zap className="w-8 h-8" />,
      description: 'High-performance fluoropolymer coating with exceptional weather resistance',
      advantages: [
        'Superior weather resistance',
        'Excellent color retention',
        'UV resistance',
        'Chemical resistance',
        'Long service life'
      ],
      colors: ['Standard colors', 'Custom colors', 'Metallic finishes'],
      thickness: '25-35 microns',
      applications: ['Exterior building facades', 'Roofing systems', 'Signage', 'Transportation']
    },
    {
      name: 'Wood Grain',
      icon: <Droplets className="w-8 h-8" />,
      description: 'Specialized coating process that creates realistic wood grain appearance on aluminum',
      advantages: [
        'Natural wood appearance',
        'Weather resistant',
        'Low maintenance',
        'Consistent quality',
        'Customizable patterns'
      ],
      colors: ['Oak', 'Walnut', 'Mahogany', 'Teak', 'Cherry', 'Custom wood grains'],
      thickness: '60-120 microns',
      applications: ['Interior decoration', 'Furniture', 'Wall panels', 'Ceiling systems']
    },
    {
      name: 'Brushed Finish',
      icon: <Shield className="w-8 h-8" />,
      description: 'Mechanical surface treatment that creates a linear brushed pattern',
      advantages: [
        'Elegant metallic appearance',
        'Scratch resistant',
        'Easy to maintain',
        'Modern aesthetic',
        'Consistent finish'
      ],
      colors: ['Natural aluminum', 'Anodized colors'],
      thickness: 'Surface treatment',
      applications: ['Interior decoration', 'Electronics', 'Automotive trim', 'Architectural details']
    },
    {
      name: 'Sandblasted',
      icon: <Zap className="w-8 h-8" />,
      description: 'Abrasive blasting process that creates a matte, textured surface',
      advantages: [
        'Non-reflective surface',
        'Good grip properties',
        'Uniform texture',
        'Customizable roughness',
        'Hides minor imperfections'
      ],
      colors: ['Natural aluminum', 'Anodized colors'],
      thickness: 'Surface treatment',
      applications: ['Industrial equipment', 'Safety applications', 'Decorative panels', 'Signage']
    }
  ]

  const qualityControl = [
    {
      title: 'Thickness Measurement',
      description: 'Precise measurement of coating thickness using advanced equipment',
      equipment: 'Digital thickness gauge'
    },
    {
      title: 'Adhesion Testing',
      description: 'Testing coating adhesion to ensure long-term durability',
      equipment: 'Cross-cut adhesion tester'
    },
    {
      title: 'Color Matching',
      description: 'Accurate color matching using spectrophotometer technology',
      equipment: 'Color spectrophotometer'
    },
    {
      title: 'Salt Spray Testing',
      description: 'Corrosion resistance testing under controlled conditions',
      equipment: 'Salt spray chamber'
    },
    {
      title: 'Weather Resistance',
      description: 'Accelerated weathering tests for long-term performance',
      equipment: 'Weathering chamber'
    },
    {
      title: 'Visual Inspection',
      description: 'Comprehensive visual inspection for surface defects',
      equipment: 'Magnified inspection system'
    }
  ]

  return (
    <>
      <SEOHead 
        title="Decorative Aluminum Panel Surface Finishing - Powder Coating, PVDF & Wood Grain"
        description="Surface finishing services for decorative aluminum panel, aluminum wall panel, and aluminum ceiling panel projects, including powder coating, PVDF, anodizing, and wood grain."
        keywords="decorative aluminum panel finish, aluminum wall panel powder coating, aluminum ceiling panel supplier finish, corrugated aluminum facade panel coating, wood grain aluminum panel, manufacturer, supplier, factory, OEM, custom"
        url={buildSiteUrl('/surface-finishing')}
        structuredData={surfaceFinishingStructuredData}
      />
      <div>
        {/* Breadcrumb */}
        <div className="container-custom">
          <Breadcrumb items={[{name: 'Surface Finishing'}]} />
        </div>
        
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container-custom section-padding">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Surface Finishing
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Professional surface treatment solutions to enhance the appearance, 
              durability, and performance of your aluminum profiles
            </p>
          </div>
        </div>
      </section>

      {/* Finishing Processes */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Surface Finishing Processes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of surface treatment options to meet your specific requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finishingProcesses.map((process, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-primary-600 mr-4">
                      {process.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {process.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {process.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Advantages:</h4>
                    <ul className="space-y-1">
                      {process.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Available Colors:</h4>
                    <div className="flex flex-wrap gap-1">
                      {process.colors.map((color, idx) => (
                        <span key={idx} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-700">Coating Thickness: </span>
                    <span className="text-sm text-gray-600">{process.thickness}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {process.applications.map((app, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAL Color Chart */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              RAL Color Chart
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Standard RAL color matching system for precise color selection
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Popular RAL Colors
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'RAL 9001', color: 'bg-gray-100', description: 'Cream White' },
                  { name: 'RAL 9002', color: 'bg-gray-200', description: 'Grey White' },
                  { name: 'RAL 9003', color: 'bg-white', description: 'Signal White' },
                  { name: 'RAL 9004', color: 'bg-gray-800', description: 'Signal Black' },
                  { name: 'RAL 9005', color: 'bg-black', description: 'Jet Black' },
                  { name: 'RAL 9006', color: 'bg-gray-300', description: 'White Aluminium' },
                  { name: 'RAL 9007', color: 'bg-gray-400', description: 'Grey Aluminium' },
                  { name: 'RAL 9010', color: 'bg-gray-500', description: 'Pure White' }
                ].map((ral, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className={`w-8 h-8 ${ral.color} rounded border border-gray-300`}></div>
                    <div>
                      <div className="font-medium text-sm">{ral.name}</div>
                      <div className="text-xs text-gray-600">{ral.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                RAL Color Chart
              </h3>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg" style={{width: '100%', maxWidth: '600px', height: '290px'}}>
                <img 
                  src="/ral-color-chart.jpg" 
                  alt="RAL Color Chart for powder coating aluminum profiles - Zhongpu Aluminum" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500">RAL Color Chart Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wood Grain Color Chart */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Wood Grain Color Chart
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto whitespace-nowrap">
              Natural wood grain patterns for elegant surface finishes with a slight texture and matte sheen
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 max-w-6xl mx-auto">
            {/* Row 1 - Top Row */}
            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Atlantic-Cedar.jpg" 
                  alt="Atlantic Cedar wood grain finish aluminum profile sample" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Atlantic Cedar</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Atlantic Cedar</p>
              <p className="text-xs text-gray-500">ACD</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Blackbutt.jpg" 
                  alt="Blackbutt" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Blackbutt</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Blackbutt</p>
              <p className="text-xs text-gray-500">BBT</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Bush-Cherry.jpg" 
                  alt="Bush Cherry" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Bush Cherry</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Bush Cherry</p>
              <p className="text-xs text-gray-500">BCH</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Calm-Oak.jpg" 
                  alt="Calm Oak" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Calm Oak</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Calm Oak</p>
              <p className="text-xs text-gray-500">COK</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Chestnut.jpg" 
                  alt="Chestnut" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Chestnut</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Chestnut</p>
              <p className="text-xs text-gray-500">CHT</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Classic-oak.jpg" 
                  alt="Classic Oak" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Classic Oak</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Classic Oak</p>
              <p className="text-xs text-gray-500">COK</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Eastern-Mahogany.jpg" 
                  alt="Eastern Mahogany" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Eastern Mahogany</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Eastern Mahogany</p>
              <p className="text-xs text-gray-500">EMH</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Hickory.jpg" 
                  alt="Hickory" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Hickory</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Hickory</p>
              <p className="text-xs text-gray-500">HKY</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Iroko.jpg" 
                  alt="Iroko" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Iroko</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Iroko</p>
              <p className="text-xs text-gray-500">IRK</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Knotty-Pine.jpg" 
                  alt="Knotty Pine" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Knotty Pine</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Knotty Pine</p>
              <p className="text-xs text-gray-500">KNP</p>
            </div>

            {/* Row 2 - Bottom Row */}
            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Kwila.jpg" 
                  alt="Kwila" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Kwila</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Kwila</p>
              <p className="text-xs text-gray-500">KWL</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Light-Oak.jpg" 
                  alt="Light Oak" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Light Oak</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Light Oak</p>
              <p className="text-xs text-gray-500">LOK</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Light-Walnut.jpg" 
                  alt="Light Walnut" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Light Walnut</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Light Walnut</p>
              <p className="text-xs text-gray-500">LWN</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Maple.jpg" 
                  alt="Maple" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Maple</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Maple</p>
              <p className="text-xs text-gray-500">MPL</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Royal-Oak.jpg" 
                  alt="Royal Oak" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Royal Oak</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Royal Oak</p>
              <p className="text-xs text-gray-500">ROK</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Spotted-Gum.jpg" 
                  alt="Spotted Gum" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Spotted Gum</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Spotted Gum</p>
              <p className="text-xs text-gray-500">SPG</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Tassie-Oak.jpg" 
                  alt="Tassie Oak" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Tassie Oak</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Tassie Oak</p>
              <p className="text-xs text-gray-500">TOK</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Teak-Brown.jpg" 
                  alt="Teak Brown" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Teak Brown</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Teak Brown</p>
              <p className="text-xs text-gray-500">TKB</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/Western-Red-Cedar.jpg" 
                  alt="Western Red Cedar" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">Western Red Cedar</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">Western Red Cedar</p>
              <p className="text-xs text-gray-500">WRC</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-24 bg-gray-200 rounded-tl-lg rounded-br-lg mb-2 shadow-md relative overflow-hidden">
                <img 
                  src="/White-Ash.jpeg" 
                  alt="White Ash" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-xs">White Ash</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-white transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
              <p className="text-xs font-medium text-gray-900 text-center">White Ash</p>
              <p className="text-xs text-gray-500">WAS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brushed Finish Display */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Brushed Finish Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto whitespace-nowrap">
              Premium brushed aluminum surface finishes with directional satin appearance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* First Row */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-200 overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
                <img 
                  src="/1.png" 
                  alt="Brushed finish aluminum profile sample 1 - directional satin surface" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-sm">Brushed 1</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-200 overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
                <img 
                  src="/2.png" 
                  alt="Brushed finish aluminum profile sample 2 - directional satin surface" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-sm">Brushed 2</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-200 overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
                <img 
                  src="/3.png" 
                  alt="Brushed finish aluminum profile sample 3 - directional satin surface" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-sm">Brushed 3</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-200 overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
                <img 
                  src="/4.png" 
                  alt="Brushed finish aluminum profile sample 4 - directional satin surface" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-sm">Brushed 4</span>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-200 overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
                <img 
                  src="/5.png" 
                  alt="Brushed Finish 5" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-sm">Brushed 5</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-200 overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
                <img 
                  src="/6.png" 
                  alt="Brushed Finish 6" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-sm">Brushed 6</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-200 overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
                <img 
                  src="/7.png" 
                  alt="Brushed Finish 7" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-sm">Brushed 7</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-200 overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
                <img 
                  src="/8.png" 
                  alt="Brushed Finish 8" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-sm">Brushed 8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quality Control Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto whitespace-nowrap">
              Comprehensive quality control measures to ensure consistent and reliable surface finishes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityControl.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {item.description}
                </p>
                <div className="text-sm">
                  <span className="font-medium text-gray-700">Equipment: </span>
                  <span className="text-gray-600">{item.equipment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surface Treatment Flow */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Surface Treatment Process Flow
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to surface treatment ensures consistent quality
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Material Preparation', description: 'Cleaning and degreasing of aluminum profiles' },
              { step: '2', title: 'Surface Treatment', description: 'Application of chosen finishing process' },
              { step: '3', title: 'Quality Inspection', description: 'Comprehensive testing and verification' },
              { step: '4', title: 'Final Packaging', description: 'Careful packaging for safe transportation' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Custom Surface Finishing?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Contact our technical team to discuss your specific surface treatment requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8618957133982"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 inline mr-2" />
              Get Technical Support
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Request Sample
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default SurfaceFinishing 
