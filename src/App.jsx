import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar  from './components/layout/Navbar'
import Footer  from './components/layout/Footer'
import Home       from './pages/Home'
import About      from './pages/About'
import Loans      from './pages/Loans'
import Calculator from './pages/Calculator'
import Apply      from './pages/Apply'
import Contact    from './pages/Contact'
import Dashboard  from './pages/Dashboard'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  const isDashboard = pathname === '/dashboard'

  return (
    <>
      <ScrollToTop />
      {!isDashboard && <Navbar />}

      <Routes>
        <Route path="/"           element={<Home />}       />
        <Route path="/about"      element={<About />}      />
        <Route path="/loans"      element={<Loans />}      />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/apply"      element={<Apply />}      />
        <Route path="/contact"    element={<Contact />}    />
        <Route path="/dashboard"  element={<Dashboard />}  />
        {/* 404 fallback */}
        <Route path="*" element={
          <div style={{ paddingTop: 70, minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, background: '#F7F9FC' }}>
            <div style={{ fontSize: 72, fontFamily: '"Cormorant Garamond",serif', fontWeight: 700, color: '#0B1F4D' }}>404</div>
            <div style={{ fontSize: 18, color: '#64748b' }}>Page not found</div>
            <a href="/" style={{ padding: '11px 28px', borderRadius: 10, background: 'linear-gradient(135deg,#D4AF37,#e8c84a)', color: '#0B1F4D', fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
              Go Home
            </a>
          </div>
        } />
      </Routes>

      {!isDashboard && <Footer />}
    </>
  )
}
