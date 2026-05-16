import { useNavigate } from 'react-router-dom'
import HeroSlider from '../components/sections/HeroSlider'
import StatsSection from '../components/sections/StatsSection'
import SectionHeader from '../components/ui/SectionHeader'
import { FEATURES, LOAN_PRODUCTS, TESTIMONIALS } from '../data'

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <HeroSlider />

      {/* ── Features ── */}
      <section className="dots-bg" style={{ padding: '76px 0', background: '#F7F9FC' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          <SectionHeader badge="Why Choose Us" title="Banking Made Simple & Smart"
            subtitle="We combine cutting-edge technology with a human touch to deliver financial services that truly work for every Kenyan." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(272px,1fr))', gap: 22 }}>
            {FEATURES.map((f, i) => (
              <div key={i} className="card-lift" style={{ padding: '28px 24px', position: 'relative', overflow: 'hidden', background: '#fff', borderRadius: 16, border: '1px solid #E8ECF4' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#D4AF37,#e8c84a)' }} />
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.emoji}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0B1F4D', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.72 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* ── About Preview ── */}
      <section style={{ padding: '76px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 52, alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-block', background: '#D4AF3720', color: '#D4AF37', border: '1px solid #D4AF3744', padding: '4px 15px', borderRadius: 20, fontSize: 12, fontWeight: 700, marginBottom: 14 }}>About ASCEND FINANCE</span>
              <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, color: '#0B1F4D', lineHeight: 1.14, margin: '14px 0 18px' }}>
                Empowering Kenya's Financial Future
              </h2>
              <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.82, marginBottom: 16 }}>
                Founded in 2016, ASCEND FINANCE has grown to become one of Kenya's most trusted microfinance institutions. We combine technology with personalized service to deliver financial solutions that truly work.
              </p>
              <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.82, marginBottom: 26 }}>
                Our mission is to bridge the financial gap by providing accessible, transparent, and affordable credit to individuals and businesses across Kenya.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 28 }}>
                {[['🎯 Mission', 'Democratize finance for every Kenyan'], ['👁️ Vision', 'A financially empowered Africa']].map(([t, d]) => (
                  <div key={t} style={{ flex: '1 1 190px', background: '#F7F9FC', borderRadius: 12, padding: '15px 18px', borderLeft: '4px solid #D4AF37' }}>
                    <div style={{ fontWeight: 700, color: '#0B1F4D', fontSize: 13, marginBottom: 5 }}>{t}</div>
                    <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.65 }}>{d}</div>
                  </div>
                ))}
              </div>
              <button className="btn-primary" onClick={() => navigate('/about')}
                style={{ padding: '11px 26px', borderRadius: 10, fontSize: 14 }}>
                Learn More About Us →
              </button>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=75&auto=format&fit=crop"
                alt="Team" style={{ width: '100%', borderRadius: 20, objectFit: 'cover', height: 420 }} />
              <div className="glass" style={{ position: 'absolute', bottom: 24, left: -20, borderRadius: 14, padding: '15px 20px', background: 'rgba(11,31,77,0.93)', border: '1px solid rgba(212,175,55,0.28)', animation: 'float 3s ease-in-out infinite' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <span style={{ fontSize: 22, color: '#D4AF37' }}>✓</span>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>CBK Regulated</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11 }}>Fully Licensed & Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Loan Products ── */}
      <section className="dots-bg" style={{ padding: '76px 0', background: '#F7F9FC' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          <SectionHeader badge="Our Products" title="Loan Solutions for Every Need"
            subtitle="From personal emergencies to business growth — we have a loan product designed for your exact situation." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 20 }}>
            {LOAN_PRODUCTS.map((l, i) => (
              <div key={i} className="card-lift" style={{ padding: '28px 20px', textAlign: 'center', cursor: 'pointer', background: '#fff', borderRadius: 16, border: '1px solid #E8ECF4' }}
                onClick={() => navigate('/loans')}>
                <div style={{ fontSize: 40, marginBottom: 14 }}>{l.emoji}</div>
                <h3 style={{ fontSize: 15.5, fontWeight: 700, color: '#0B1F4D', marginBottom: 8 }}>{l.title}</h3>
                <p style={{ fontSize: 12.5, color: '#64748b', lineHeight: 1.65, marginBottom: 13 }}>{l.desc}</p>
                <div style={{ fontSize: 11.5, fontWeight: 700, color: l.color, background: l.color + '14', padding: '3px 10px', borderRadius: 20, display: 'inline-block', marginBottom: 14 }}>{l.max}</div>
                <button className="btn-primary" onClick={e => { e.stopPropagation(); navigate('/apply') }}
                  style={{ padding: '8px 0', borderRadius: 8, fontSize: 12, width: '100%' }}>Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: '76px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          <SectionHeader badge="Client Stories" title="What Our Clients Say"
            subtitle="Thousands of Kenyans trust ASCEND FINANCE to help them achieve their financial goals every day." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 22 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card-lift" style={{ padding: '28px 26px', background: '#F7F9FC', borderRadius: 16, border: '1px solid #E8ECF4' }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {Array(t.stars).fill(0).map((_, j) => <span key={j} style={{ color: '#D4AF37', fontSize: 16 }}>★</span>)}
                </div>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.78, fontStyle: 'italic', marginBottom: 20 }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#0B1F4D,#1a3a7c)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13.5, color: '#0B1F4D' }}>{t.name}</div>
                    <div style={{ fontSize: 11.5, color: '#64748b', marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg,#0B1F4D,#1a3a7c)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(28px,5vw,50px)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>
            Ready to Start Your Financial Journey?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', marginBottom: 34, maxWidth: 520, margin: '0 auto 34px' }}>
            Apply in minutes. Get approved in hours. Receive funds the same day via M-Pesa.
          </p>
          <div style={{ display: 'flex', gap: 13, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-gold" onClick={() => navigate('/apply')}
              style={{ padding: '14px 36px', borderRadius: 50, fontSize: 15 }}>Apply Now →</button>
            <button className="btn-ghost" onClick={() => navigate('/calculator')}
              style={{ padding: '14px 30px', borderRadius: 50, fontSize: 15, border: '1.5px solid rgba(255,255,255,0.32)' }}>
              Calculate My Loan
            </button>
          </div>
        </div>
      </section>

      <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }`}</style>
    </>
  )
}
