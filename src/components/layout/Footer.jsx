import { useNavigate } from 'react-router-dom'
import { TrendingUp, Phone, Mail, MapPin } from 'lucide-react'
import { LOAN_PRODUCTS, CONTACT_INFO } from '../../data'

const LINKS = [
  { to: '/',           label: 'Home' },
  { to: '/about',      label: 'About Us' },
  { to: '/loans',      label: 'Loan Products' },
  { to: '/calculator', label: 'Loan Calculator' },
  { to: '/apply',      label: 'Apply for Loan' },
  { to: '/contact',    label: 'Contact Us' },
  { to: '/dashboard',  label: 'Dashboard' },
]

export default function Footer() {
  const navigate = useNavigate()
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#060f26', color: 'rgba(255,255,255,0.68)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>

        <div style={{ padding: '52px 0 36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(185px,1fr))', gap: 36 }}>

          {/* Brand column */}
          <div>
            <div onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 16, cursor: 'pointer' }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg,#D4AF37,#e8c84a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp size={19} color="#0B1F4D" strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ fontFamily: '"Cormorant Garamond",Georgia,serif', fontSize: 19, fontWeight: 700, color: '#fff' }}>ASCEND</div>
                <div style={{ fontSize: 7.5, letterSpacing: 3, color: '#D4AF37', fontWeight: 700 }}>FINANCE</div>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.82, marginBottom: 18 }}>
              Kenya's trusted microfinance partner since 2016. Fast, flexible, and fully transparent financial solutions for every Kenyan.
            </p>
            <div style={{ display: 'flex', gap: 9 }}>
              {[['Facebook','#fb'], ['Twitter','#tw'], ['Instagram','#ig'], ['LinkedIn','#li']].map(([l]) => (
                <div key={l} title={l} style={{ width: 33, height: 33, borderRadius: 8, background: 'rgba(255,255,255,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s', fontSize: 14 }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.35)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.09)'}>
                  {l[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: 1.6, marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid rgba(212,175,55,0.22)' }}>Quick Links</div>
            {LINKS.map(l => (
              <div key={l.to} onClick={() => navigate(l.to)} style={{ fontSize: 13, marginBottom: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.68)'}>
                › {l.label}
              </div>
            ))}
          </div>

          {/* Loan Products */}
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: 1.6, marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid rgba(212,175,55,0.22)' }}>Loan Products</div>
            {LOAN_PRODUCTS.map(p => (
              <div key={p.title} onClick={() => navigate('/loans')} style={{ fontSize: 13, marginBottom: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.68)'}>
                {p.emoji} {p.title}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: 1.6, marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid rgba(212,175,55,0.22)' }}>Get in Touch</div>
            {[
              { Icon: Phone,  text: CONTACT_INFO.phone },
              { Icon: Mail,   text: CONTACT_INFO.email },
              { Icon: MapPin, text: CONTACT_INFO.address },
            ].map(({ Icon, text }) => (
              <div key={text} style={{ display: 'flex', gap: 9, marginBottom: 13, alignItems: 'center' }}>
                <Icon size={13} color="#D4AF37" />
                <span style={{ fontSize: 13 }}>{text}</span>
              </div>
            ))}
            <div style={{ marginTop: 18, padding: '13px 15px', borderRadius: 11, background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.2)' }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: '#D4AF37', marginBottom: 5 }}>⏰ Business Hours</div>
              <div style={{ fontSize: 12.5 }}>{CONTACT_INFO.hours}</div>
              <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.42)', marginTop: 3 }}>Closed Sundays & Public Holidays</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ fontSize: 12.5 }}>© {year} ASCEND FINANCE LIMITED. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}>Terms of Service</span>
            <span style={{ fontSize: 11.5, color: '#D4AF37', fontWeight: 700 }}>🔒 CBK Regulated — Fully Licensed</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
