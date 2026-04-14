import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, MessageCircle } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import SEOHead from '../components/SEOHead'
import { buildSiteUrl, COMPANY } from '../config/company'

const useCases = [
  'Aluminum ceiling for shopping mall projects',
  'Decorative aluminum ceiling panel supplier for commercial interiors',
  'Custom OEM production based on section and finish requirements',
  'Multiple finishes for retail, office, and hospitality ceiling systems',
]

const AluminumCeilingPanelPage = () => {
  return (
    <>
      <SEOHead
        title="Aluminum Ceiling Panel Supplier for Shopping Mall & Commercial Projects"
        description="Aluminum ceiling panel supplier in China for shopping mall, office, and commercial decorative ceiling projects with OEM and custom manufacturing support."
        keywords="aluminum ceiling panel supplier, aluminum ceiling for shopping mall, decorative aluminum panel, aluminum wall panel manufacturer, manufacturer, supplier, factory, OEM, custom"
        url={buildSiteUrl('/aluminum-ceiling-panel-supplier')}
      />
      <div>
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Aluminum Ceiling Panel Supplier' }]} />
        </div>
        <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container-custom grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold lg:text-6xl">Aluminum Ceiling Panel Supplier</h1>
              <p className="mt-6 text-lg text-primary-100">
                We supply decorative aluminum ceiling panel solutions for shopping mall, office,
                retail, and commercial interior projects with custom size and finish support.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle className="mr-2 inline h-5 w-5" />
                  Ask for Ceiling Solution
                </a>
                <Link to="/contact" className="btn-secondary">
                  Request Quotation
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white/10">
              <img src="/grille-panel-1.png" alt="Aluminum ceiling panel supplier project sample" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="container-custom grid gap-4 md:grid-cols-2">
            {useCases.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
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

export default AluminumCeilingPanelPage
