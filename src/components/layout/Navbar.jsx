import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { TrendingUp, Menu, X } from 'lucide-react'
import { useScrolled } from '../../hooks/useScrolled'

const LINKS = [
  { to: '/',           label: 'Home' },
  { to: '/about',      label: 'About' },
  { to: '/loans',      label: 'Loans' },
  { to: '/calculator', label: 'Calculator' },
  { to: '/apply',      label: 'Apply' },
  { to: '/contact',    label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]  = useState(false)
  const scrolled         = useScrolled(40)
  const navigate         = useNavigate()

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(11,31,77,0.97)' : 'rgba(11,31,77,0.86)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid rgba(212,175,55,0.18)' : 'none',
      transition: 'all 0.35s',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>

          {/* Logo */}
          <div onClick={() => navigate('/')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg,#D4AF37,#e8c84a)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={20} color="#0B1F4D" strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ fontFamily: '"Cormorant Garamond",Georgia,serif', fontSize: 20, fontWeight: 700, color: '#fff', lineHeight: 1.05 }}>ASCEND</div>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 3, color: '#D4AF37' }}>FINANCE</div>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ gap: 30 }}>
            {LINKS.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={({ isActive }) => ({ color: isActive ? '#D4AF37' : 'rgba(255,255,255,0.84)', fontSize: 13.5, fontWeight: 500, textDecoration: 'none' })}>
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex" style={{ gap: 10, alignItems: 'center' }}>
            <button className="btn-ghost" onClick={() => navigate('/dashboard')}
              style={{ padding: '8px 17px', borderRadius: 8, fontSize: 12.5, border: '1.5px solid rgba(255,255,255,0.32)' }}>
              Dashboard
            </button>
            <button className="btn-gold" onClick={() => navigate('/apply')}
              style={{ padding: '9px 22px', borderRadius: 8, fontSize: 12.5 }}>
              Apply Now ›
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 6 }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#060f26', borderTop: '1px solid rgba(212,175,55,0.15)', padding: '14px 22px 22px' }}>
          {LINKS.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                display: 'block', padding: '12px 0',
                color: isActive ? '#D4AF37' : 'rgba(255,255,255,0.82)',
                fontWeight: 500, fontSize: 15,
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                textDecoration: 'none',
              })}>
              {l.label}
            </NavLink>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
            <button className="btn-ghost" onClick={() => { navigate('/dashboard'); setOpen(false) }}
              style={{ flex: 1, padding: '11px 0', borderRadius: 8, fontSize: 13, border: '1.5px solid rgba(255,255,255,0.32)' }}>
              Dashboard
            </button>
            <button className="btn-gold" onClick={() => { navigate('/apply'); setOpen(false) }}
              style={{ flex: 1, padding: '11px 0', borderRadius: 8, fontSize: 13 }}>
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
