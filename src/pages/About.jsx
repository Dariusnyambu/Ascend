import StatsSection from '../components/sections/StatsSection'
import SectionHeader from '../components/ui/SectionHeader'
import Badge from '../components/ui/Badge'
import { TEAM, MILESTONES } from '../data'

export default function About() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,#060f26,#0B1F4D)', padding: '72px 0 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          <Badge>About Us</Badge>
          <h1 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(32px,6vw,60px)', fontWeight: 700, color: '#fff', margin: '14px 0 14px', lineHeight: 1.09 }}>
            Our Story & Mission
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', maxWidth: 540, margin: '0 auto', lineHeight: 1.78 }}>
            Since 2016, we've been on a mission to make financial services accessible to every Kenyan regardless of background.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <section style={{ padding: '76px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 44, alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(26px,4vw,42px)', fontWeight: 700, color: '#0B1F4D', marginBottom: 16 }}>Who We Are</h2>
              <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.82, marginBottom: 14 }}>
                ASCEND FINANCE is a Central Bank of Kenya-regulated microfinance institution dedicated to providing fast, transparent, and accessible credit solutions to individuals and businesses across Kenya.
              </p>
              <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.82, marginBottom: 22 }}>
                We leverage technology to simplify the borrowing experience while maintaining the human touch that makes us genuinely different from traditional lenders.
              </p>
              {[
                ['🎯 Our Mission', 'To bridge the financial gap by providing accessible, transparent, and affordable credit solutions to every Kenyan.'],
                ['👁️ Our Vision', 'A continent where every individual and business has access to the financial tools needed to thrive and grow.'],
                ['💎 Our Values', 'Integrity, Transparency, Innovation, and Customer-First service in absolutely everything we do.'],
              ].map(([t, d]) => (
                <div key={t} style={{ marginBottom: 13, padding: '14px 18px', background: '#F7F9FC', borderRadius: 12, borderLeft: '4px solid #D4AF37' }}>
                  <div style={{ fontWeight: 700, color: '#0B1F4D', fontSize: 13, marginBottom: 5 }}>{t}</div>
                  <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65 }}>{d}</div>
                </div>
              ))}
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=75&auto=format&fit=crop"
                alt="Office" style={{ width: '100%', borderRadius: 20, objectFit: 'cover', height: 480 }} />
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Team */}
      <section style={{ padding: '76px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          <SectionHeader badge="Our Leadership" title="The Team Behind ASCEND" />
          <div style={{ display: 'flex', gap: 22, justifyContent: 'center', flexWrap: 'wrap' }}>
            {TEAM.map((m, i) => (
              <div key={i} className="card-lift" style={{ background: '#F7F9FC', borderRadius: 18, padding: '28px 24px', textAlign: 'center', width: 220, border: '1px solid #E8ECF4' }}>
                <img src={m.img} alt={m.name}
                  style={{ width: 86, height: 86, borderRadius: '50%', objectFit: 'cover', border: '3px solid #D4AF37', marginBottom: 14, margin: '0 auto 14px', display: 'block' }}
                  onError={e => { e.currentTarget.style.display = 'none' }} />
                <div style={{ fontWeight: 700, fontSize: 15.5, color: '#0B1F4D' }}>{m.name}</div>
                <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="dots-bg" style={{ padding: '76px 0', background: '#F7F9FC' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          <SectionHeader badge="Our Journey" title="Key Milestones" />
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            {MILESTONES.map(({ year, event }, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 24, alignItems: 'flex-start' }}>
                <div style={{ width: 72, flexShrink: 0, textAlign: 'right' }}>
                  <span style={{ background: '#D4AF37', color: '#0B1F4D', fontWeight: 700, fontSize: 13, padding: '4px 10px', borderRadius: 20, display: 'inline-block' }}>{year}</span>
                </div>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#0B1F4D', border: '3px solid #D4AF37', marginBottom: 6 }} />
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
