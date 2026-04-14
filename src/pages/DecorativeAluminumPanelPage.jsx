import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, MessageCircle } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import SEOHead from '../components/SEOHead'
import { buildSiteUrl, COMPANY } from '../config/company'

const strengths = [
  'Decorative aluminum panel manufacturer for wall, ceiling, and facade applications',
  'Custom OEM support for panel pattern, size, thickness, and installation structure',
  'Suitable for office, retail, hospitality, and branded commercial environments',
  'Multiple finishes including powder coating, PVDF, anodizing, and wood grain effect',
]

const DecorativeAluminumPanelPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Decorative Aluminum Panel',
    description:
      'Decorative aluminum panel manufacturer and supplier for custom commercial wall, ceiling, and facade projects.',
    brand: {
      '@type': 'Brand',
      name: COMPANY.name,
    },
    manufacturer: {
      '@type': 'Organization',
      name: COMPANY.name,
    },
  }

  return (
    <>
      <SEOHead
        title="Decorative Aluminum Panel Manufacturer & OEM Supplier"
        description="Decorative aluminum panel manufacturer and OEM supplier in China for custom wall, ceiling, and facade projects with multiple finishes and export support."
        keywords="decorative aluminum panel, decorative aluminum panel manufacturer, aluminum wall panel manufacturer, aluminum ceiling panel supplier, decorative aluminum cladding for office project, manufacturer, supplier, factory, OEM, custom"
        url={buildSiteUrl('/decorative-aluminum-panel-manufacturer')}
        structuredData={structuredData}
      />
      <div>
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Decorative Aluminum Panel Manufacturer' }]} />
        </div>
        <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container-custom grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold lg:text-6xl">
                Decorative Aluminum Panel Manufacturer
              </h1>
              <p className="mt-6 text-lg text-primary-100">
                Zhongpu Aluminum supplies custom decorative aluminum panel solutions for office,
                retail, hotel, and public commercial projects, with OEM support from drawing to
                production.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle className="mr-2 inline h-5 w-5" />
                  Request Panel Quote
                </a>
                <Link to="/contact" className="btn-secondary">
                  Send Drawings
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white/10">
              <img
                src="/solid-panel-1.jpg"
                alt="Decorative aluminum panel manufacturer sample"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="container-custom grid gap-4 md:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default DecorativeAluminumPanelPage
