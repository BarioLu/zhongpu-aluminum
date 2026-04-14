import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  CheckCircle,
  Factory,
  Globe,
  MessageCircle,
  Shield,
  Users,
} from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import SEOHead from '../components/SEOHead'
import { buildSiteUrl, COMPANY } from '../config/company'

const companyStats = [
  { icon: <Factory className="h-7 w-7" />, number: '5+', label: 'Years in aluminum profile production' },
  { icon: <Users className="h-7 w-7" />, number: '100+', label: 'Team members supporting projects' },
  { icon: <Globe className="h-7 w-7" />, number: '30+', label: 'Countries served' },
  { icon: <Award className="h-7 w-7" />, number: '1000+', label: 'Orders and project batches delivered' },
]

const capabilityBlocks = [
  {
    title: 'Section Review & Custom Development',
    description: 'We help evaluate drawing-based requests and align section structure with the intended application.',
  },
  {
    title: 'Extrusion & Finishing Coordination',
    description: 'Profiles, surface treatment, and downstream requirements are discussed as one workflow, not isolated steps.',
  },
  {
    title: 'QC and Shipment Preparation',
    description: 'Inspection, packaging, and export preparation are built into project execution.',
  },
  {
    title: 'OEM / ODM Communication',
    description: 'We support buyers who need faster technical follow-up and clearer manufacturing coordination.',
  },
]

const reasonsToTrust = [
  'Located in Foshan with access to a mature aluminum supply chain',
  'Suitable for architectural decoration, branded interiors, and OEM requests',
  'Supports custom finish combinations and application-driven recommendations',
  'Experienced with export communication and overseas project expectations',
]

const certifications = [
  'Strict quality control system',
  'Environmental protection standards',
  'Occupational health and safety standards',
  'Quality management certification support',
]

const AboutLanding = () => {
  const aboutStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${COMPANY.name}`,
    description:
      'Learn how Zhongpu Aluminum supports custom aluminum profile projects for OEM, decorative, and export applications.',
    url: buildSiteUrl('/about'),
    mainEntity: {
      '@type': 'Organization',
      name: COMPANY.name,
      foundingDate: '2020',
      description: 'Custom aluminum profile manufacturer for architectural and OEM projects',
    },
  }

  return (
    <>
      <SEOHead
        title="About Zhongpu Aluminum - Custom Aluminum Profile Manufacturing Partner"
        description="Learn how Zhongpu Aluminum supports custom aluminum profile projects with extrusion, finishing, quality control, and export coordination."
        keywords="about Zhongpu Aluminum, custom aluminum profile factory, aluminum extrusion manufacturer China, OEM aluminum partner"
        url={buildSiteUrl('/about')}
        structuredData={aboutStructuredData}
      />
      <div>
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'About Us' }]} />
        </div>

        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.28),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.15),_transparent_35%)]" />
          <div className="relative container-custom section-padding">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
              <div>
                <div className="inline-flex rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-2 text-sm text-primary-100">
                  More than a company profile, this page explains how we support custom export work
                </div>
                <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  A Manufacturing Partner for Custom Aluminum Profile Projects
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                  Zhongpu Aluminum is based in Foshan, China and focuses on decorative and custom
                  aluminum profile production for overseas buyers, project contractors, and OEM
                  customers who need more than a standard catalog.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={COMPANY.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-7 py-4 font-semibold text-white transition-colors hover:bg-primary-600"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Talk About Your Project
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-slate-950"
                  >
                    Contact Sales Team
                  </Link>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                  <img
                    src="/factory.jpg"
                    alt="Factory environment at Zhongpu Aluminum"
                    className="h-80 w-full object-cover"
                  />
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h2 className="text-xl font-semibold">What this means for buyers</h2>
                  <div className="mt-5 grid gap-3">
                    {reasonsToTrust.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-300" />
                        <span className="text-sm leading-6 text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {companyStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-white p-6 shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                    {stat.icon}
                  </div>
                  <div className="mt-4 text-3xl font-bold text-slate-900">{stat.number}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">
                Core Capabilities
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-5xl">
                What We Actually Help Customers Move Forward
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                This page is now less about generic company language and more about the parts of the
                process buyers care about when choosing a manufacturing partner.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {capabilityBlocks.map((block) => (
                <div key={block.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900">{block.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{block.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">
                  Quality & Trust
                </div>
                <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-5xl">
                  Buyers Need Confidence Before They Send a Custom Inquiry
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Quality messaging works best when it is tied to actual project execution. We now
                  frame this section around trust and buyer confidence rather than generic claims.
                </p>
                <div className="mt-8 grid gap-3">
                  {certifications.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                      <span className="text-sm leading-6 text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200">
                <img
                  src="/certification-images.png"
                  alt="Certification and quality documentation"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="rounded-[2rem] bg-gradient-to-br from-primary-600 to-sky-700 p-8 text-white shadow-2xl lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold lg:text-5xl">Need a Factory That Understands Custom Work?</h2>
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-primary-50">
                    Send your drawing, target finish, or reference image and we can help review the
                    project from a manufacturing perspective.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={COMPANY.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-4 font-semibold text-primary-700 transition-colors hover:bg-slate-100"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp for Fast Response
                    </a>
                    <Link
                      to="/products"
                      className="inline-flex items-center justify-center rounded-lg border border-white/40 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-primary-700"
                    >
                      View Product Types
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="rounded-3xl bg-white/12 p-7 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold">What this page now does better</h3>
                  <div className="mt-5 grid gap-4">
                    {[
                      'Explains buyer-facing manufacturing capability',
                      'Connects factory background to custom order flow',
                      'Uses trust signals that support export inquiries',
                      'Pushes users toward product and contact actions',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                        <span className="text-sm leading-6 text-primary-50">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutLanding
