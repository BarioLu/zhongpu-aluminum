import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle,
  Download,
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
    description: 'Decorative aluminum grille panels for facade, ceiling, and partition projects.',
    applications: ['Facade', 'Ceiling', 'Partition'],
    features: ['Lightweight and durable', 'Easy installation', 'Various patterns available'],
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
    description: 'Aesthetic wave-shaped aluminum panels for commercial and interior applications.',
    applications: ['Storefront Signage', 'Elevator Lobby', 'TV Wall', 'Bar Counter', 'Corridor'],
    features: ['Unique wave design', 'Eco-friendly properties', 'Weather resistant'],
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
    description: 'High-strength linear aluminum panels for architectural and branded interiors.',
    applications: ['Storefront Signage', 'Elevator Lobby', 'TV Wall', 'Bar Counter', 'Corridor'],
    features: ['High strength', 'Fire resistant', 'Low maintenance'],
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
    description: 'Functional and decorative louvers for HVAC, ventilation, and commercial spaces.',
    applications: ['HVAC', 'Ventilation', 'Industrial', 'Commercial'],
    features: ['Air flow control', 'Corrosion resistant', 'Customizable angles'],
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
    description: 'Solid aluminum panels for durable cladding, decoration, and industrial use.',
    applications: ['Cladding', 'Partition', 'Decoration', 'Industrial'],
    features: ['High strength', 'Smooth finish', 'Customizable thickness'],
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
    description: 'Custom aluminum profiles designed and produced around your drawing or sample.',
    applications: ['OEM/ODM', 'Architectural', 'Industrial', 'Special Projects'],
    features: ['Custom design service', 'Flexible manufacturing', 'Technical support'],
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
  ['catalog-7', 'Wave Panel 005Y', '/005Y.png'],
  ['catalog-8', 'Great Wall Panel 209C', '/209C.png'],
  ['catalog-9', 'Wave Panel 008Y', '/008Y.png'],
  ['catalog-10', 'Great Wall Panel 214C', '/214C.png'],
  ['catalog-11', 'Wave Panel 009Y', '/009Y.png'],
  ['catalog-12', 'Great Wall Panel 215C', '/215C.png'],
].map(([id, name, image]) => ({ id, name, image }))

const seoLandingPages = [
  {
    title: 'Aluminum Wave Panel Manufacturer',
    description: 'For custom wave-shaped and corrugated decorative panel sourcing.',
    to: '/aluminum-wave-panel-manufacturer',
  },
  {
    title: 'Aluminum Ceiling Panel Supplier',
    description: 'For shopping mall and commercial ceiling system projects.',
    to: '/aluminum-ceiling-panel-supplier',
  },
  {
    title: 'Fluted Wall Panel for Hotel Interior',
    description: 'For premium interior wall and office cladding applications.',
    to: '/fluted-wall-panel-hotel-interior',
  },
  {
    title: 'Decorative Aluminum Panel Manufacturer',
    description: 'For custom wall, ceiling, and branded decorative panel programs.',
    to: '/decorative-aluminum-panel-manufacturer',
  },
  {
    title: 'Corrugated Aluminum Facade Panel',
    description: 'For exterior facade and feature-cladding inquiries.',
    to: '/corrugated-aluminum-facade-panel',
  },
]

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products
    }

    return products.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  return (
    <>
      <SEOHead
        title="Custom Aluminum Wave Panel, Fluted Panel & Wall Panel Products"
        description="Explore custom aluminum wave panel, aluminum fluted panel, decorative aluminum panel, and aluminum wall panel solutions from a China manufacturer and supplier for shopping mall, hotel, office, ceiling, and facade projects."
        keywords="aluminum wave panel, aluminum fluted panel, decorative aluminum panel, aluminum wall panel manufacturer, aluminum ceiling panel supplier, corrugated aluminum facade panel, fluted wall panel for hotel interior, decorative aluminum cladding for office project, manufacturer, supplier, factory, OEM, custom"
        url={buildSiteUrl('/products')}
      />
      <div>
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Products' }]} />
        </div>

        <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="relative container-custom section-padding">
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-bold lg:text-6xl">Our Products</h1>
              <p className="mx-auto max-w-3xl text-xl text-primary-100">
                High-quality decorative aluminum profiles for architecture, interiors, and
                industrial applications.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Product Categories</h2>
              <p className="text-lg text-gray-600">
                Browse our core aluminum profile solutions and technical drawings.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-lg px-6 py-3 font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
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

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">{product.name}</h3>
                    <p className="mb-4 text-gray-600">{product.description}</p>

                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-medium text-gray-700">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((app) => (
                          <span key={app} className="rounded bg-primary-100 px-2 py-1 text-xs text-primary-700">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-2 text-sm font-medium text-gray-700">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <a
                        href={COMPANY.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Ask About This
                      </a>
                      <button
                        type="button"
                        onClick={() => setSelectedImage({ image: product.image, name: product.name })}
                        className="inline-flex items-center text-gray-500 hover:text-primary-600"
                      >
                        <Search className="mr-1 h-4 w-4" />
                        Preview
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Product Catalog & Technical Drawings
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Browse reference drawings for common profiles. Contact us for full dimension sheets
                and customized drawings.
              </p>
            </div>
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
              {productCatalog.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative w-full overflow-hidden bg-gray-200" style={{ aspectRatio: '2400/626' }}>
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

            <div className="mt-12 text-center">
              <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Need More Specifications?</h3>
                <p className="mb-6 text-lg text-gray-600">
                  We can provide complete technical parameters, detailed specification sheets, and
                  customized profile support for your project.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    href={COMPANY.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-primary-700"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Inquiry
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-primary-600 px-6 py-3 font-medium text-primary-600 transition-colors duration-200 hover:bg-primary-600 hover:text-white"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Get Full Specifications
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Product Specifications</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Standard reference specifications for our most requested aluminum profile products.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.slice(0, 3).map((product) => (
                <div key={product.id} className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">{product.name}</h3>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between gap-4">
                        <span className="font-medium text-gray-600">{key}:</span>
                        <span className="text-right text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Browse by Search Intent
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                These focused pages help buyers land on the closest match for their project type,
                application scene, and procurement request.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {seoLandingPages.map((page) => (
                <article key={page.title} className="flex h-full flex-col rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{page.title}</h3>
                  <p className="mb-5 flex-1 text-gray-600">{page.description}</p>
                  <Link to={page.to} className="font-medium text-primary-600 hover:text-primary-700">
                    View Landing Page
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary-600 text-white">
          <div className="container-custom text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Need Custom Solutions?</h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
              We provide OEM and ODM services for custom aluminum profiles, finishing options, and
              project-specific dimensions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-8 py-3 font-medium text-primary-600 transition-colors duration-200 hover:bg-gray-100"
              >
                <MessageCircle className="mr-2 inline h-5 w-5" />
                Get Custom Quote
              </a>
              <a
                href="/contact"
                className="rounded-lg border-2 border-white px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-white hover:text-primary-600"
              >
                Contact Sales Team
              </a>
            </div>
          </div>
        </section>

        {selectedImage ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
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

export default ProductsPage
