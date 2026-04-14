import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, MessageCircle } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import SEOHead from '../components/SEOHead'
import { buildSiteUrl, COMPANY } from '../config/company'

const points = [
  'Fluted wall panel for hotel interior feature walls and branded spaces',
  'Decorative aluminum cladding for office project and lobby applications',
  'Custom profile support for section depth, spacing, finish, and installation needs',
  'Manufacturer and supplier support for OEM and project-based procurement',
]

const HotelFlutedPanelPage = () => {
  return (
    <>
      <SEOHead
        title="Fluted Wall Panel for Hotel Interior & Decorative Aluminum Cladding"
        description="Custom fluted wall panel for hotel interior and decorative aluminum cladding for office project applications from a China manufacturer and supplier."
        keywords="fluted wall panel for hotel interior, decorative aluminum cladding for office project, decorative aluminum panel, aluminum wall panel manufacturer, manufacturer, supplier, factory, OEM, custom"
        url={buildSiteUrl('/fluted-wall-panel-hotel-interior')}
      />
      <div>
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Fluted Wall Panel for Hotel Interior' }]} />
        </div>
        <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container-custom grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold lg:text-6xl">Fluted Wall Panel for Hotel Interior</h1>
              <p className="mt-6 text-lg text-primary-100">
                Zhongpu Aluminum provides decorative aluminum fluted and cladding solutions for hotel
                interiors, office projects, retail spaces, and other premium commercial environments.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle className="mr-2 inline h-5 w-5" />
                  Discuss Your Project
                </a>
                <Link to="/contact" className="btn-secondary">
                  Send Reference Image
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white/10">
              <img src="/great-wall-panel-1.jpg" alt="Fluted wall panel for hotel interior sample" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="container-custom grid gap-4 md:grid-cols-2">
            {points.map((item) => (
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

export default HotelFlutedPanelPage
