import React from 'react'
import { Link } from 'react-router-dom'
import { Award, Factory, FileText, Globe, MessageCircle, Palette, Ruler, Shield } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { buildSiteUrl, COMPANY } from '../config/company'

const advantages = [
  {
    icon: <Award className="h-8 w-8" />,
    title: '5+ Years Experience',
    description: 'Focused production experience in decorative aluminum applications.',
  },
  {
    icon: <Factory className="h-8 w-8" />,
    title: 'OEM & ODM',
    description: 'Flexible manufacturing support for custom profiles and branded projects.',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Export to 30+ Countries',
    description: 'Stable delivery support for international contractors, distributors, and developers.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Quality Assured',
    description: 'Consistent inspection standards from raw material to shipment.',
  },
]

const hotProducts = [
  {
    name: 'Aluminum Grille Panel',
    image: '/grille-panel.png',
    description: 'Decorative grille systems for facades, ceilings, and partitions.',
    applications: ['Facade', 'Ceiling', 'Partition'],
    features: ['Lightweight', 'Durable', 'Easy Installation'],
  },
  {
    name: 'Wave-shaped Panel',
    image: '/wave-panel.jpg',
    description: 'Curved aluminum panels that add rhythm and depth to commercial interiors.',
    applications: ['Storefront Signage', 'Elevator Lobby', 'TV Wall', 'Bar Counter', 'Corridor'],
    features: ['Aesthetic Design', 'Eco-friendly', 'Weather Resistant'],
  },
  {
    name: 'Great Wall Panel',
    image: '/great-wall-panel.jpg',
    description: 'Linear aluminum profiles with a bold architectural look and long service life.',
    applications: ['Storefront Signage', 'Elevator Lobby', 'TV Wall', 'Bar Counter', 'Corridor'],
    features: ['High Strength', 'Fire Resistant', 'Low Maintenance'],
  },
  {
    name: 'Air Vent Louvers',
    image: '/air-vent-louvers.jpg',
    description: 'Functional louvers engineered for airflow control and clean visual integration.',
    applications: ['HVAC', 'Ventilation'],
    features: ['Air Flow Control', 'Corrosion Resistant', 'Customizable'],
  },
]

const surfaceFinishes = [
  { name: 'Anodized', color: 'bg-gray-200' },
  { name: 'Powder Coated', color: 'bg-blue-200' },
  { name: 'PVDF', color: 'bg-green-200' },
  { name: 'Wood Grain', color: 'bg-yellow-200' },
]

const customizationSteps = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Send Drawing or Idea',
    description: 'Share your drawing, reference image, or application requirement with our team.',
  },
  {
    icon: <Ruler className="h-6 w-6" />,
    title: 'Confirm Section & Size',
    description: 'We review dimensions, profile structure, and suitable production direction.',
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'Choose Finish & Details',
    description: 'Surface treatment, color, quantity, and packaging are aligned before production.',
  },
  {
    icon: <Factory className="h-6 w-6" />,
    title: 'Sample / Production',
    description: 'After confirmation, we move forward with sample coordination or mass production.',
  },
]

const seoLandingLinks = [
  {
    title: 'Aluminum Wave Panel Manufacturer',
    description: 'Targeted page for aluminum wave panel and custom corrugated profile inquiries.',
    to: '/aluminum-wave-panel-manufacturer',
  },
  {
    title: 'Aluminum Ceiling Panel Supplier',
    description: 'Focused on shopping mall, office, and commercial ceiling panel sourcing needs.',
    to: '/aluminum-ceiling-panel-supplier',
  },
  {
    title: 'Fluted Wall Panel for Hotel Interior',
    description: 'Dedicated page for decorative fluted panel and office cladding applications.',
    to: '/fluted-wall-panel-hotel-interior',
  },
  {
    title: 'Decorative Aluminum Panel Manufacturer',
    description: 'Covers custom decorative panel production for wall, ceiling, and facade projects.',
    to: '/decorative-aluminum-panel-manufacturer',
  },
]

const HomePage = () => {
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Custom Aluminum Wall & Ceiling Panel Manufacturer',
    description:
      'Custom aluminum wall panel manufacturer and aluminum ceiling panel supplier for decorative commercial projects.',
    url: buildSiteUrl(),
    mainEntity: {
      '@type': 'Organization',
      name: COMPANY.name,
      description: 'Custom aluminum wall panel manufacturer and aluminum ceiling panel supplier',
    },
  }

  return (
    <>
      <SEOHead
        title="Aluminum Wave Panel, Fluted Panel & Decorative Aluminum Panel Manufacturer"
        description="Zhongpu Aluminum is an aluminum wall panel manufacturer and aluminum ceiling panel supplier in China, offering aluminum wave panel, aluminum fluted panel, and decorative aluminum panel solutions for shopping mall, hotel, office, and facade projects."
        keywords="aluminum wave panel, aluminum fluted panel, decorative aluminum panel, aluminum wall panel manufacturer, aluminum ceiling panel supplier, aluminum ceiling for shopping mall, fluted wall panel for hotel interior, corrugated aluminum facade panel, decorative aluminum cladding for office project, manufacturer, supplier, factory, OEM, custom"
        structuredData={homeStructuredData}
      />
      <div>
        <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="relative container-custom section-padding">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
                Professional Decorative Aluminum Profile Manufacturer
              </h1>
              <p className="mb-8 text-xl text-primary-100">
                Leading manufacturer of high-quality decorative aluminum profiles in Foshan,
                China. ISO-focused production, OEM and ODM support, and responsive export service.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get Quote Now
                </a>
                <Link to="/products" className="btn-secondary">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Hot Products</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Popular aluminum profile solutions for facade, interior, and HVAC applications.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {hotProducts.map((product) => (
                <article key={product.name} className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 min-h-[3.5rem] text-xl font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mb-4 min-h-[4.5rem] text-gray-600">{product.description}</p>
                    <div className="mb-4 min-h-[7rem]">
                      <h4 className="mb-2 text-sm font-medium text-gray-700">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((application) => (
                          <span
                            key={application}
                            className="rounded bg-primary-100 px-2 py-1 text-xs text-primary-700"
                          >
                            {application}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4 min-h-[7rem]">
                      <h4 className="mb-2 text-sm font-medium text-gray-700">Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.features.map((feature) => (
                          <span key={feature} className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link to="/products" className="btn-primary mt-auto block w-full text-center">
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                Customization Process
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                A simple process to help overseas buyers move from idea to quotation faster.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {customizationSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    {step.icon}
                  </div>
                  <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-600">
                    Step {index + 1}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/contact" className="btn-primary">
                Start Your Custom Inquiry
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                Why Choose Zhongpu Aluminum?
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                We combine manufacturing consistency, export experience, and responsive support to
                help projects move faster.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {advantages.map((advantage) => (
                <article key={advantage.title} className="rounded-lg bg-white p-6 text-center shadow-md">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    {advantage.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                Explore Popular Project Solutions
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Start from the product direction that matches your project, then send us drawings,
                dimensions, or reference images for a faster quotation.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {seoLandingLinks.map((item) => (
                <article key={item.title} className="flex h-full flex-col rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mb-6 flex-1 text-gray-600">{item.description}</p>
                  <Link to={item.to} className="font-medium text-primary-600 hover:text-primary-700">
                    View Solution
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                Surface Finishing Options
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Multiple surface treatment options to match architectural style, durability, and
                environmental requirements.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {surfaceFinishes.map((finish) => (
                <div key={finish.name} className="rounded-lg bg-white p-6 text-center shadow-md">
                  <div
                    className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg ${finish.color}`}
                  >
                    <span className="font-medium text-gray-700">{finish.name[0]}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{finish.name}</h3>
                  <p className="text-sm text-gray-600">
                    Professional {finish.name.toLowerCase()} surface treatment.
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/surface-finishing" className="btn-primary">
                View All Finishing Options
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary-600 text-white">
          <div className="container-custom text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Ready to Start Your Project?</h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
              Get in touch with our team for technical consultation, samples, and competitive
              quotations.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-8 py-3 font-medium text-primary-600 transition-colors duration-200 hover:bg-gray-100"
              >
                <MessageCircle className="mr-2 inline h-5 w-5" />
                WhatsApp Chat
              </a>
              <Link
                to="/contact"
                className="rounded-lg border-2 border-white px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-white hover:text-primary-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage
