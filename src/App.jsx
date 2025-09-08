import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

import SurfaceFinishing from './pages/SurfaceFinishing'
import Quality from './pages/Quality'

import Contact from './pages/Contact'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GoogleAnalytics />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
      
              <Route path="/surface-finishing" element={<SurfaceFinishing />} />
              <Route path="/quality" element={<Quality />} />
      
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App 