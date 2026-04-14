import React, { useMemo, useState } from 'react'
import {
  ArrowRight,
  Boxes,
  CheckCircle,
  Download,
  FileText,
  MessageCircle,
  Search,
  X,
  ZoomIn,
} from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import SEOHead from '../components/SEOHead'
import { COMPANY, buildSiteUrl } from '../config/company'

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'grille', name: 'Aluminum Grille Panel' },
  { id: 'wave', name: 'Wave-shaped Panel' },
  { id: 'great-wall', name: 'Great Wall Panel' },
  { id: 'air-vent', name: 'Air Vent Louvers' },
  { id: 'solid', name: 'Solid Aluminum Panel' },
  { id: 'custom', name: 'Custom Profiles (OEM)' },
]

const products = [
  {
    id: 'grille-1',
    category: 'grille',
    anchor: 'grille-panels',
    name: 'Aluminum Grille Panel',
    image: '/grille-panel-1.png',
    description: 'Decorative aluminum grille systems for facade, ceiling, and partition projects.',
    fit: 'Used by buyers who need linear decorative systems with adjustable sizing and finish options.',
    applications: ['Facade', 'Ceiling', 'Partition'],
    features: ['Custom width and spacing', 'Surface finish matching', 'Suitable for architectural decoration'],
    specifications: {
      Material: '6063-T5 Aluminum',
      Thickness: '0.7-5.0mm',
      Width: '10-200mm',
      Length: '1000-6000mm',
      Surface: 'Anodized / Powder Coated',
    },
  },
  {
    id: 'wave-1',
    category: 'wave',
    anchor: 'wave-panels',
    name: 'Wave-shaped Panel',
    image: '/wave-panel-1.jpg',
    description: 'Curved aluminum profiles for stronger visual expression in interior and commercial spaces.',
    fit: 'A strong fit when the project needs a more design-led profile rather than a flat standard panel.',
    applications: ['Storefront Signage', 'Elevator Lobby', 'TV Wall', 'Bar Counter', 'Corridor'],
    features: ['Custom section look', 'Decorative rhythm', 'Interior branding support'],
    specifications: {
      Material: '6063-T5 Aluminum',
      Thickness: '0.7-5.0mm',
      Width: '10-200mm',
      Length: '1000-6000mm',
      Surface: 'Anodized / PVDF',
    },
  },
  {
    id: 'great-wall-1',
    category: 'great-wall',
    anchor: 'great-wall-panels',
    name: 'Great Wall Panel',
    image: '/great-wall-panel-1.jpg',
    description: 'Linear high-strength decorative profiles for premium interior and exterior applications.',
    fit: 'Useful when buyers want a deep, architectural line effect with durable finishing options.',
    applications: ['Storefront Signage', 'Elevator Lobby', 'TV Wall', 'Bar Counter', 'Corridor'],
    features: ['Strong linear appearance', 'Decorative depth', 'Low maintenance'],
    specifications: {
      Material: '6063-T5 Aluminum',
      Thickness: '0.7-5.0mm',
      Width: '10-200mm',
      Length: '1000-6000mm',
      Surface: 'Anodized / Powder Coated',
    },
  },
  {
    id: 'air-vent-1',
    category: 'air-vent',
    anchor: 'air-vent-louvers',
    name: 'Air Vent Louvers',
    image: '/air-vent-louvers-1.jpg',
    description: 'Functional and decorative louver profiles for ventilation and HVAC projects.',
    fit: 'Suitable for buyers balancing airflow requirements with appearance and corrosion resistance.',
    applications: ['HVAC', 'Ventilation', 'Industrial', 'Commercial'],
    features: ['Airflow control', 'Durable finish', 'Custom angle and size support'],
    specifications: {
      Material: '6063-T5 Aluminum',
      Thickness: '0.7-5.0mm',
      Width: '10-200mm',
      Length: '1000-6000mm',
      Surface: 'Anodized / Powder Coated',
    },
  },
  {
    id: 'solid-1',
    category: 'solid',
    anchor: 'solid-panels',
    name: 'Solid Aluminum Panel',
    image: '/solid-panel-1.jpg',
    description: 'Solid aluminum solutions for cladding, decoration, and industrial applications.',
    fit: 'Works well when a buyer prioritizes clean appearance, structural strength, and customized dimensions.',
    applications: ['Cladding', 'Partition', 'Decoration', 'Industrial'],
    features: ['Thickness flexibility', 'Project-specific dimensions', 'Multiple finish options'],
    specifications: {
      Material: '6063-T5 Aluminum',
      Thickness: '1.0-10.0mm',
      Width: '50-2000mm',
      Length: '1000-6000mm',
      Surface: 'Anodized / Powder Coated / PVDF',
    },
  },
  {
    id: 'custom-1',
    category: 'custom',
    anchor: 'custom-profiles',
    name: 'Custom Profiles (OEM)',
    image: '/custom-profiles-1.jpg',
    description: 'Drawing-based aluminum profiles developed for OEM, branded, and special-project use.',
    fit: 'Best for buyers who already have section drawings, assembly targets, or custom functional requirements.',
    applications: ['OEM/ODM', 'Architectural', 'Industrial', 'Special Projects'],
    features: ['Drawing-based review', 'Flexible manufacturing', 'Project coordination support'],
    specifications: {
      Material: '6063-T5 / 6061-T6 Aluminum',
      Thickness: '0.5-20.0mm',
      Width: '5-500mm',
      Length: '500-12000mm',
      Surface: 'All available options',
    },
  },
]

const productCatalog = [
  ['catalog-1', 'Wave Panel 001Y', '/001Y.png'],
  ['catalog-2', 'Great Wall Panel 201', '/201.png'],
  ['catalog-3', 'Wave Panel 002Y', '/002Y.png'],
  ['catalog-4', 'Great Wall Panel 203C', '/203C.png'],
  ['catalog-5', 'Wave Panel 003Y', '/003Y.png'],
  ['catalog-6', 'Great Wall Panel 205C', '/205C.png'],
].map(([id, name, image]) => ({ id, name, image }))

const quoteChecklist = [
  'Section drawing, sample photo, or concept image',
  'Surface finish and color target',
  'Expected quantity and target market',
  'Installation or assembly use case',
]

const ProductsExport = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products
    return products.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  return (
    <>
      <SEOHead
        title="Custom Aluminum Profile Products for OEM & Export Projects"
        description="Explore aluminum profile product types for OEM, decorative, and architectural projects. Suitable for drawing-based customization, surface finishing, and export supply."
        keywords="custom aluminum profile products, OEM aluminum extrusion, aluminum decorative profiles, export aluminum supplier, aluminum grille panel manufacturer"
        url={buildSiteUrl('/products')}
      />
      <div>
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Products' }]} />
        </div>

        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_30%)]" />
          <div className="relative container-custom section-padding">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="inline-flex rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-2 text-sm text-primary-100">
                  Product page redesigned to support inquiry decisions, not just product browsing
                </div>
                <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Aluminum Profile Types for Custom Projects and Export Supply
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                  This page now focuses on what overseas buyers need to understand before sending an
                  inquiry: product fit, customization direction, finish flexibility, and technical
                  follow-up.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={COMPANY.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-7 py-4 font-semibold text-white transition-colors hover:bg-primary-600"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Ask for Product Recommendation
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-slate-950"
                  >
                    Request Quotation
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary-300" />
                  <h2 className="text-xl font-semibold">What to send for a faster quote</h2>
                </div>
                <div className="mt-5 grid gap-3">
                  {quoteChecklist.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-300" />
                      <span className="text-sm leading-6 text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="mb-8 text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">
                Product Categories
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-5xl">
                Start With the Product Direction That Matches Your Project
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-6 py-3 font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            {products.map((product) => (
              <div key={product.anchor} id={product.anchor} className="anchor-offset" />
            ))}
            <div className="grid gap-8 xl:grid-cols-2">
              {filteredProducts.map((product) => (
                <article key={product.id} className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200">
                  <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="h-full bg-slate-100">
                      <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-7">
                      <div className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                        {product.category === 'custom' ? 'Custom focused' : 'Project-ready category'}
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold text-slate-900">{product.name}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
                      <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                        <span className="font-semibold text-slate-900">Best fit:</span> {product.fit}
                      </div>

                      <div className="mt-5">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                          Applications
                        </h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {product.applications.map((app) => (
                            <span key={app} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                          Buyer-facing strengths
                        </h4>
                        <div className="mt-3 grid gap-2">
                          {product.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2">
                              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                              <span className="text-sm leading-6 text-slate-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center gap-4">
                        <a
                          href={COMPANY.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center font-semibold text-primary-600 hover:text-primary-700"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Ask About This Product
                        </a>
                        <button
                          type="button"
                          onClick={() => setSelectedImage({ image: product.image, name: product.name })}
                          className="inline-flex items-center font-medium text-slate-500 hover:text-primary-600"
                        >
                          <Search className="mr-2 h-4 w-4" />
                          Preview Image
                        </button>
                      </div>
                    </div>
                  </div>
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
                  Technical Drawings
                </div>
                <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-5xl">
                  Drawings Help Buyers Move From Interest to Real Inquiry
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Instead of acting like a brochure-only page, this section helps buyers imagine the
                  next step: discussing real dimensions, section details, and custom adjustments.
                </p>
                <div className="mt-8 rounded-3xl bg-slate-900 p-7 text-white">
                  <div className="flex items-center gap-3">
                    <Boxes className="h-6 w-6 text-primary-300" />
                    <h3 className="text-xl font-semibold">Need full specification support?</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-200">
                    We can provide more detailed technical parameters, section references, and
                    drawing-based support during quotation.
                  </p>
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={COMPANY.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Inquiry
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-slate-950"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Request Technical Sheet
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {productCatalog.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    className="group overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200"
                  >
                    <div className="relative w-full overflow-hidden bg-slate-100" style={{ aspectRatio: '2400/626' }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                        <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">
                Standard Reference
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-5xl">
                Key Specification Ranges Buyers Usually Ask First
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.slice(0, 3).map((product) => (
                <div key={product.id} className="rounded-3xl bg-white p-7 shadow-md ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
                  <div className="mt-5 grid gap-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                        <span className="text-sm font-medium text-slate-500">{key}</span>
                        <span className="text-right text-sm text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-br from-primary-600 to-sky-700 text-white">
          <div className="container-custom">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold lg:text-5xl">
                  Need Help Choosing the Right Profile for Your Project?
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-primary-50">
                  If you are not sure which product type fits your application, send us the use case,
                  image, or concept and we can help point you toward the right custom direction.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={COMPANY.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-4 font-semibold text-primary-700 transition-colors hover:bg-slate-100"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get Product Advice
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-white/40 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-primary-700"
                  >
                    Request Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl bg-white/12 p-7 backdrop-blur-sm">
                <h3 className="text-xl font-semibold">What changed on this page</h3>
                <div className="mt-5 grid gap-4">
                  {[
                    'Product cards now explain project fit, not only names',
                    'The page invites technical discussion earlier',
                    'Drawings are presented as part of the buying journey',
                    'CTAs are written for inquiry intent rather than generic browsing',
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
        </section>

        {selectedImage ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative flex h-full w-full items-center justify-center">
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:text-gray-300"
                aria-label="Close image preview"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="max-h-[90vh] max-w-[90vw] object-contain"
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default ProductsExport
