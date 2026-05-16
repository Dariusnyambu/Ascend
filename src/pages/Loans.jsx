import { useNavigate } from 'react-router-dom'
import { AlertTriangle, Check } from 'lucide-react'
import Badge from '../components/ui/Badge'
import SectionHeader from '../components/ui/SectionHeader'
import { LOAN_PRODUCTS } from '../data'

export default function Loans() {
  const navigate = useNavigate()

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,#060f26,#0B1F4D)', padding: '68px 0 50px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          <Badge>Loan Products</Badge>
          <h1 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(30px,6vw,58px)', fontWeight: 700, color: '#fff', margin: '12px 0 10px' }}>Find Your Perfect Loan</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', maxWidth: 520, margin: '0 auto' }}>
            Transparent terms, competitive rates, and fast processing — every single time, guaranteed.
          </p>
        </div>
      </div>

      {/* Products */}
      <section style={{ padding: '76px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          {/* Warning */}
          <div style={{ background: '#D97706' + '18', border: '1px solid #D97706' + '40', borderRadius: 12, padding: '14px 20px', marginBottom: 40, display: 'flex', gap: 12, alignItems: 'center' }}>
            <AlertTriangle size={20} color="#D97706" />
            <p style={{ margin: 0, fontSize: 13.5, color: '#92400e' }}>
              <strong>Important:</strong> All loans carry a <strong>30% monthly interest rate</strong> on the outstanding balance. A <strong>5% late payment penalty</strong> applies to overdue amounts. Please borrow responsibly.
            </p>
          </div>

          <div style={{ display: 'grid', gap: 22 }}>
            {LOAN_PRODUCTS.map((l, i) => (
              <div key={i} className="card-lift" style={{ padding: '28px 30px', borderRadius: 18, background: '#fff', border: '1px solid #E8ECF4', display: 'grid', gridTemplateColumns: '70px 1fr auto', gap: 24, alignItems: 'start' }}>
                <div style={{ fontSize: 44, lineHeight: 1, paddingTop: 4 }}>{l.emoji}</div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0B1F4D', marginBottom: 8 }}>{l.title}</h3>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.72, marginBottom: 14 }}>{l.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginBottom: 14 }}>
                    {[['Max Loan', l.max, l.color], ['Interest Rate', l.rate, '#D97706'], ['Loan Term', l.term, '#059669']].map(([label, val, col]) => (
                      <div key={label} style={{ background: col + '0e', border: `1px solid ${col}28`, borderRadius: 9, padding: '6px 13px' }}>
                        <div style={{ fontSize: 10, color: col, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 2 }}>{label}</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#0B1F4D' }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {l.requirements.map(r => (
                      <span key={r} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11.5, color: '#0B1F4D', background: '#0B1F4D' + '0a', padding: '3px 10px', borderRadius: 20 }}>
                        <Check size={10} color="#0B1F4D" /> {r}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="btn-gold" onClick={() => navigate('/apply')}
                  style={{ padding: '12px 22px', borderRadius: 10, fontSize: 13, whiteSpace: 'nowrap', flexShrink: 0 }}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="dots-bg" style={{ padding: '76px 0', background: '#F7F9FC' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          <SectionHeader badge="How It Works" title="Simple 3-Step Process" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24, textAlign: 'center' }}>
            {[
              ['01', 'Apply Online', 'Fill out our simple application form with your details and loan requirements in under 5 minutes.', '📝'],
              ['02', 'Get Approved', 'Our system reviews your application instantly. Most loans are approved within 2 working hours.', '✅'],
              ['03', 'Receive Funds', 'Once approved, funds are disbursed directly to your M-Pesa account within minutes.', '💸'],
            ].map(([num, t, d, ico]) => (
              <div key={num} className="card-lift" style={{ background: '#fff', borderRadius: 16, padding: '32px 24px', border: '1px solid #E8ECF4' }}>
                <div style={{ fontSize: 42, marginBottom: 14 }}>{ico}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#D4AF37', letterSpacing: 1.5, marginBottom: 8 }}>STEP {num}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0B1F4D', marginBottom: 10 }}>{t}</h3>
                <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.72 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
