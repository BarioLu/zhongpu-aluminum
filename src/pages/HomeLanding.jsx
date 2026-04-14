import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  Boxes,
  CheckCircle,
  Factory,
  FileText,
  Globe,
  MessageCircle,
  Palette,
  Ruler,
  Shield,
  Truck,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { buildSiteUrl, COMPANY } from '../config/company'

const heroMetrics = [
  { value: 'OEM / ODM', label: 'Custom profile support' },
  { value: '30+ Countries', label: 'Export project experience' },
  { value: 'Fast Response', label: 'Quotation and technical follow-up' },
]

const customServices = [
  {
    icon: <Ruler className="h-7 w-7" />,
    title: 'Custom Profile Development',
    description:
      'We support customized aluminum sections based on your drawing, sample, or application target.',
  },
  {
    icon: <Boxes className="h-7 w-7" />,
    title: 'Mold & Extrusion Coordination',
    description:
      'From section confirmation to mold development and extrusion, we keep the full process connected.',
  },
  {
    icon: <Palette className="h-7 w-7" />,
    title: 'Surface Finishing Options',
    description:
      'Anodizing, powder coating, PVDF, and wood grain finishes are available for different markets.',
  },
  {
    icon: <Truck className="h-7 w-7" />,
    title: 'Export Packaging & Delivery',
    description:
      'We help prepare profiles for international shipment with practical packaging and documentation support.',
  },
]

const trustPoints = [
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Project-Focused Manufacturing',
    description: 'Suitable for architectural decoration, branded interiors, and OEM projects.',
  },
  {
    icon: <Factory className="h-6 w-6" />,
    title: 'Integrated Production Flow',
    description: 'A more reliable handoff from section confirmation to finishing and shipment.',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Export Communication Mindset',
    description: 'Built for overseas buyers who need clear specs, fast answers, and stable delivery.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'QC Before Shipment',
    description: 'Inspection remains part of the conversation, not something left until the end.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Send Drawing or Idea',
    description: 'Share a drawing, reference image, or application scenario with our team.',
  },
  {
    step: '02',
    title: 'Confirm Section & Finish',
    description: 'We align dimensions, finish, quantity, and target use before production moves forward.',
  },
  {
    step: '03',
    title: 'Mold, Sample & Approval',
    description: 'We coordinate mold preparation and sample confirmation for custom projects.',
  },
  {
    step: '04',
    title: 'Mass Production & Shipment',
    description: 'After approval, we move into production, inspection, packing, and export delivery.',
  },
]

const industryApplications = [
  'Facade and cladding systems',
  'Ceiling and partition decoration',
  'Retail storefront and signage',
  'Hospitality and commercial interiors',
  'HVAC and ventilation projects',
  'Brand OEM and custom builds',
]

const featuredProducts = [
  {
    name: 'Aluminum Grille Panel',
    image: '/grille-panel.png',
    description: 'A common choice for facade lines, ceiling systems, and decorative partitions.',
    tags: ['Custom size', 'Facade use', 'Ceiling use'],
  },
  {
    name: 'Wave-shaped Panel',
    image: '/wave-panel.jpg',
    description: 'Used when the project needs stronger visual rhythm for walls, counters, or display zones.',
    tags: ['Curved profile', 'Interior use', 'Brand display'],
  },
  {
    name: 'Great Wall Panel',
    image: '/great-wall-panel.jpg',
    description: 'A strong linear look for premium commercial interiors and architectural decoration.',
    tags: ['Linear design', 'Durable', 'Low maintenance'],
  },
  {
    name: 'Custom Profiles',
    image: '/custom-profiles-1.jpg',
    description: 'Built around your section drawing, assembly requirement, and finish specification.',
    tags: ['OEM / ODM', 'Drawing-based', 'Project matching'],
  },
]

const finishingOptions = [
  { name: 'Anodized', note: 'Clean metallic finish for durable architectural use.' },
  { name: 'Powder Coated', note: 'Flexible color matching for indoor and outdoor projects.' },
  { name: 'PVDF', note: 'Higher weather resistance for demanding exterior environments.' },
  { name: 'Wood Grain', note: 'A warmer decorative look for retail and hospitality spaces.' },
]

const inquiryItems = [
  'Profile drawing or section image',
  'Surface finish requirement',
  'Estimated quantity or project size',
  'Target market or installation environment',
]

const HomeLanding = () => {
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Custom Aluminum Profile Manufacturer for Export Projects',
    description:
      'Custom aluminum profile manufacturer in Foshan, China for OEM, architectural decoration, and export projects.',
    url: buildSiteUrl(),
    mainEntity: {
      '@type': 'Organization',
      name: COMPANY.name,
      description: 'Custom aluminum profile manufacturer for architectural and OEM projects',
    },
  }

  return (
    <>
      <SEOHead
        title="Custom Aluminum Profile Manufacturer for OEM & Export Projects"
        description="Custom aluminum profile manufacturer in China for OEM, decorative, and architectural projects. Support for drawing-based production, surface finishing, and export delivery."
        keywords="custom aluminum profiles, OEM aluminum profile manufacturer, aluminum extrusion supplier China, decorative aluminum profiles, custom aluminum extrusion, export aluminum manufacturer"
        url={buildSiteUrl('/')}
        structuredData={homeStructuredData}
      />
      <div className="bg-white">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.32),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_32%)]" />
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-white/5 to-transparent lg:block" />
          <div className="relative container-custom section-padding">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-5 inline-flex items-center rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-2 text-sm text-primary-100">
                  Custom aluminum profiles for overseas buyers, contractors, and OEM projects
                </div>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Custom Aluminum Profile Solutions Built for Export Projects
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                  Zhongpu Aluminum helps turn drawings, ideas, and project requirements into
                  finished aluminum profiles with coordinated extrusion, surface finishing, and
                  export support.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={COMPANY.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-7 py-4 font-semibold text-white transition-colors hover:bg-primary-600"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send Drawing for Quotation
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-slate-950"
                  >
                    Request Custom Solution
                  </Link>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {heroMetrics.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-lg font-semibold text-white">{item.value}</div>
                      <div className="mt-1 text-sm text-slate-300">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl">
                  <img
                    src="/factory.jpg"
                    alt="Zhongpu Aluminum factory production environment"
                    className="h-72 w-full object-cover lg:h-80"
                  />
                  <div className="grid gap-4 p-6 sm:grid-cols-2">
                    <div>
                      <div className="text-sm uppercase tracking-[0.2em] text-primary-200">
                        Best for
                      </div>
                      <div className="mt-2 text-lg font-semibold">Custom sections and decorative systems</div>
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-[0.2em] text-primary-200">
                        Typical request
                      </div>
                      <div className="mt-2 text-lg font-semibold">Drawing, finish, quantity, and target use</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl border border-primary-900/10 bg-white p-6 text-slate-900 shadow-xl">
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary-600" />
                    <h2 className="text-xl font-semibold">What to send us for a faster quote</h2>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {inquiryItems.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-sm leading-6 text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50 py-6">
          <div className="container-custom">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {trustPoints.map((point) => (
                <div key={point.title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{point.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">
                Custom Service
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-5xl">
                Built Around Customization, Not Just Standard Catalog Products
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The homepage now explains custom capability first, so overseas buyers understand
                right away that this is a manufacturing partner, not just a static catalog website.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {customServices.map((service) => (
                <article
                  key={service.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                    {service.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">
                  Workflow
                </div>
                <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-5xl">
                  A Clear Process Makes Custom Orders Easier to Trust
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Showing the workflow reduces friction for first-time buyers and gives Google Ads
                  traffic a clearer next step after landing on the homepage.
                </p>
                <div className="mt-8 rounded-3xl bg-slate-900 p-7 text-white">
                  <h3 className="text-xl font-semibold">Good fit for buyers who need</h3>
                  <div className="mt-5 grid gap-3">
                    {industryApplications.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-300" />
                        <span className="text-sm leading-6 text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                {processSteps.map((step) => (
                  <div key={step.step} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-600 text-lg font-bold text-white">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">
                  Featured Products
                </div>
                <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-5xl">
                  Product Types Buyers Commonly Customize
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Instead of reading like a generic brochure, this section ties products back to
                  real use cases and customization intent.
                </p>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center font-semibold text-primary-600 transition-colors hover:text-primary-700"
              >
                View complete product range
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <article
                  key={product.name}
                  className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-56 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-950 text-white">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-2 text-sm text-primary-100">
                  Surface finish matters in export presentation and specification approval
                </div>
                <h2 className="mt-5 text-3xl font-bold lg:text-5xl">
                  Finishing Options That Match Different Market Needs
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                  For custom aluminum projects, finish selection is often part of the buying
                  decision. This section turns finishing capability into a trust and sales signal.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {finishingOptions.map((finish) => (
                    <div key={finish.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="flex items-center gap-3">
                        <Palette className="h-5 w-5 text-primary-300" />
                        <h3 className="font-semibold">{finish.name}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{finish.note}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/surface-finishing"
                  className="mt-8 inline-flex items-center font-semibold text-primary-300 transition-colors hover:text-primary-200"
                >
                  Explore all finishing details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {['/Atlantic-Cedar.jpg', '/Blackbutt.jpg', '/Light-Oak.jpg', '/Teak-Brown.jpg'].map((image) => (
                  <div key={image} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <img src={image} alt="Wood grain aluminum finish sample" className="h-52 w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="rounded-[2rem] bg-gradient-to-br from-primary-600 to-sky-700 p-8 text-white shadow-2xl lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-100">
                    Stronger Inquiry CTA
                  </div>
                  <h2 className="mt-4 text-3xl font-bold lg:text-5xl">
                    Ready to Quote a Custom Aluminum Profile Project?
                  </h2>
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-primary-50">
                    Send us your drawing, target finish, and estimated quantity. We can help review
                    the section and move the discussion toward sample and production.
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
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-lg border border-white/40 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-primary-700"
                    >
                      Contact Sales Team
                    </Link>
                  </div>
                </div>
                <div className="rounded-3xl bg-white/12 p-7 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold">Why this homepage converts better now</h3>
                  <div className="mt-5 grid gap-4">
                    {[
                      'It explains custom capability before company background.',
                      'It gives buyers a simple workflow to follow.',
                      'It ties products to use cases, not just names.',
                      'It turns finishing and export support into trust signals.',
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

export default HomeLanding
