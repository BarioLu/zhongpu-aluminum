import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import NavbarMain from './components/NavbarMain'
import FooterMain from './components/FooterMain'
import GoogleAnalyticsRouter from './components/GoogleAnalyticsRouter'
import HomePage from './pages/HomePage'
import About from './pages/About'
import ProductsPage from './pages/ProductsPage'
import AluminumWavePanelPage from './pages/AluminumWavePanelPage'
import AluminumCeilingPanelPage from './pages/AluminumCeilingPanelPage'
import HotelFlutedPanelPage from './pages/HotelFlutedPanelPage'
import DecorativeAluminumPanelPage from './pages/DecorativeAluminumPanelPage'
import CorrugatedAluminumFacadePage from './pages/CorrugatedAluminumFacadePage'

import SurfaceFinishing from './pages/SurfaceFinishing'
import Quality from './pages/Quality'

import ContactPage from './pages/ContactPage'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <GoogleAnalyticsRouter />
          <NavbarMain />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/aluminum-wave-panel-manufacturer" element={<AluminumWavePanelPage />} />
              <Route path="/aluminum-ceiling-panel-supplier" element={<AluminumCeilingPanelPage />} />
              <Route path="/fluted-wall-panel-hotel-interior" element={<HotelFlutedPanelPage />} />
              <Route path="/decorative-aluminum-panel-manufacturer" element={<DecorativeAluminumPanelPage />} />
              <Route path="/corrugated-aluminum-facade-panel" element={<CorrugatedAluminumFacadePage />} />
      
              <Route path="/surface-finishing" element={<SurfaceFinishing />} />
              <Route path="/quality" element={<Quality />} />
      
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <FooterMain />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App 
