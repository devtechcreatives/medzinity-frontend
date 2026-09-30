import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import IntroLoader from './components/IntroLoader.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import WhyMedzinity from './pages/WhyMedzinity.jsx'
import QualityCompliance from './pages/QualityCompliance.jsx'
import TechnologyAI from './pages/TechnologyAI.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Industries from './pages/Industries.jsx'
import IndustryDetail from './pages/IndustryDetail.jsx'
import Insights from './pages/Insights.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <>
      <IntroLoader />
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/why-medzinity" element={<WhyMedzinity />} />
          <Route path="/about-us/quality-security-compliance" element={<QualityCompliance />} />
          <Route path="/technology-ai" element={<TechnologyAI />} />
          <Route path="/solutions" element={<Services />} />
          <Route path="/solutions/:slug" element={<ServiceDetail />} />
          {/* Legacy /services routes redirect to /solutions */}
          <Route path="/services" element={<Navigate to="/solutions" replace />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
