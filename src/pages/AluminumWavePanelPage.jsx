import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, MessageCircle } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import SEOHead from '../components/SEOHead'
import { buildSiteUrl, COMPANY } from '../config/company'

const highlights = [
  'Custom aluminum wave panel and corrugated decorative profiles',
  'OEM and custom size support for facade, ceiling, and interior projects',
  'Suitable for shopping mall, office, and commercial decoration applications',
  'Surface options including powder coating, PVDF, anodizing, and wood grain',
]

const AluminumWavePanelPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Aluminum Wave Panel',
    description:
      'Custom aluminum wave panel manufacturer and supplier for decorative wall, ceiling, and facade projects.',
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
        title="Aluminum Wave Panel Manufacturer & Supplier"
        description="Custom aluminum wave panel manufacturer and supplier in China for decorative aluminum wall panel, ceiling panel, and corrugated aluminum facade panel projects."
        keywords="aluminum wave panel, corrugated aluminum facade panel, decorative aluminum panel, aluminum wall panel manufacturer, aluminum ceiling panel supplier, manufacturer, supplier, factory, OEM, custom"
        url={buildSiteUrl('/aluminum-wave-panel-manufacturer')}
        structuredData={structuredData}
      />
      <div>
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Aluminum Wave Panel' }]} />
        </div>
        <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container-custom grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold lg:text-6xl">Aluminum Wave Panel Manufacturer & Supplier</h1>
              <p className="mt-6 text-lg text-primary-100">
                Zhongpu Aluminum supplies custom aluminum wave panel solutions for decorative wall,
                ceiling, and facade projects, with OEM support and export-ready production.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle className="mr-2 inline h-5 w-5" />
                  Get Quote
                </a>
                <Link to="/contact" className="btn-secondary">
                  Send Drawing
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white/10">
              <img src="/wave-panel-1.jpg" alt="Aluminum wave panel manufacturer product sample" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-4 md:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AluminumWavePanelPage
