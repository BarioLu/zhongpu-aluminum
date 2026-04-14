import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, MessageCircle } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import SEOHead from '../components/SEOHead'
import { buildSiteUrl, COMPANY } from '../config/company'

const facadePoints = [
  'Corrugated aluminum facade panel manufacturer for exterior decorative projects',
  'Custom section depth, spacing, finish, and project-based OEM production support',
  'Suitable for shopping mall facade, office elevation, canopy, and feature cladding',
  'Factory supply with export packing and quotation support for overseas contractors',
]

const CorrugatedAluminumFacadePage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Corrugated Aluminum Facade Panel',
    description:
      'Corrugated aluminum facade panel manufacturer and supplier for custom exterior cladding projects.',
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
        title="Corrugated Aluminum Facade Panel Manufacturer"
        description="Corrugated aluminum facade panel manufacturer in China for custom exterior cladding, shopping mall facade, and office elevation projects."
        keywords="corrugated aluminum facade panel, aluminum wave panel, decorative aluminum panel, aluminum wall panel manufacturer, corrugated facade panel manufacturer, manufacturer, supplier, factory, OEM, custom"
        url={buildSiteUrl('/corrugated-aluminum-facade-panel')}
        structuredData={structuredData}
      />
      <div>
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Corrugated Aluminum Facade Panel' }]} />
        </div>
        <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container-custom grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold lg:text-6xl">
                Corrugated Aluminum Facade Panel Manufacturer
              </h1>
              <p className="mt-6 text-lg text-primary-100">
                We manufacture corrugated aluminum facade panel systems for commercial exterior
                cladding, combining custom profile production, surface finishing, and export-ready
                project support.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle className="mr-2 inline h-5 w-5" />
                  Discuss Facade Project
                </a>
                <Link to="/contact" className="btn-secondary">
                  Request Custom Solution
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white/10">
              <img
                src="/wave-panel.jpg"
                alt="Corrugated aluminum facade panel sample"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="container-custom grid gap-4 md:grid-cols-2">
            {facadePoints.map((item) => (
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

export default CorrugatedAluminumFacadePage
