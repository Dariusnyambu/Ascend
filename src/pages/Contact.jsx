import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import Badge from '../components/ui/Badge'
import SectionHeader from '../components/ui/SectionHeader'
import { CONTACT_INFO, FAQS, mockContactSubmit } from '../data'

export default function Contact() {
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)
  const [cf, setCf]         = useState({ name:'', email:'', phone:'', subject:'', message:'' })
  const [errs, setErrs]     = useState({})

  const set = (k, v) => setCf(p => ({ ...p, [k]: v }))

  const submit = async () => {
    const e = {}
    if (!cf.name.trim())    e.name    = 'Name is required'
    if (!cf.email.trim())   e.email   = 'Email is required'
    if (!cf.message.trim()) e.message = 'Message is required'
    setErrs(e)
    if (Object.keys(e).length) return
    setLoading(true)
    await mockContactSubmit(cf)
    setLoading(false)
    setSent(true)
  }

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,#060f26,#0B1F4D)', padding: '68px 0 50px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          <Badge>Contact Us</Badge>
          <h1 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(28px,6vw,56px)', fontWeight: 700, color: '#fff', margin: '12px 0 10px' }}>
            Get In Touch
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', maxWidth: 480, margin: '0 auto' }}>
            Our friendly team is ready to help you every step of the way.
          </p>
        </div>
      </div>

      <section className="dots-bg" style={{ padding: '76px 0', background: '#F7F9FC' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>

          {/* Info cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 18, marginBottom: 44 }}>
            {[
              { icon: Phone,  title: '📞 Call Us',    detail: CONTACT_INFO.phone,   sub: 'Mon–Sat  8am–6pm',       color: '#059669' },
              { icon: Mail,   title: '✉️ Email Us',   detail: CONTACT_INFO.email,   sub: 'Response within 24hrs',  color: '#4F46E5' },
              { icon: MapPin, title: '📍 Visit Us',   detail: 'Nairobi CBD, Kenya', sub: 'Capital House, 3rd Floor',color: '#D4AF37' },
              { icon: Phone,  title: '⏰ Hours',      detail: 'Mon – Sat',          sub: '8:00am to 6:00pm',       color: '#0B1F4D' },
            ].map(({ title, detail, sub, color }) => (
              <div key={title} className="card-lift" style={{ background: '#fff', borderRadius: 14, padding: '22px 20px', border: '1px solid #E8ECF4' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{title.slice(0, 2)}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#0B1F4D' }}>{title.slice(3)}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color, margin: '4px 0' }}>{detail}</div>
                <div style={{ fontSize: 11.5, color: '#64748b' }}>{sub}</div>
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 26 }}>

            {/* Contact form */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '34px 30px', boxShadow: '0 4px 26px rgba(11,31,77,0.07)', border: '1px solid #E8ECF4' }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0B1F4D', marginBottom: 22 }}>📧 Send a Message</h2>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '38px 0' }}>
                  <CheckCircle size={52} color="#059669" style={{ margin: '0 auto 16px', display: 'block' }} />
                  <h3 style={{ color: '#0B1F4D', fontWeight: 700, marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ color: '#64748b', fontSize: 14 }}>We'll get back to you within 24 hours.</p>
                  <button className="btn-gold" onClick={() => { setSent(false); setCf({ name:'', email:'', phone:'', subject:'', message:'' }) }}
                    style={{ marginTop: 20, padding: '10px 24px', borderRadius: 10, fontSize: 13 }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                    {[['name','Full Name *','text'],['email','Email Address *','email'],['phone','Phone Number','tel'],['subject','Subject','text']].map(([k, ph, t]) => (
                      <div key={k}>
                        <input type={t} className={`input-field${errs[k] ? ' error' : ''}`} placeholder={ph}
                          value={cf[k]} onChange={e => set(k, e.target.value)} />
                        {errs[k] && <span style={{ fontSize: 11, color: '#DC2626', display: 'block', marginTop: 3 }}>{errs[k]}</span>}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: 18 }}>
                    <textarea className={`input-field${errs.message ? ' error' : ''}`} placeholder="Your message..."
                      rows={4} value={cf.message} onChange={e => set('message', e.target.value)} />
                    {errs.message && <span style={{ fontSize: 11, color: '#DC2626', display: 'block', marginTop: 3 }}>{errs.message}</span>}
                  </div>
                  <button className="btn-gold" onClick={submit} disabled={loading}
                    style={{ width: '100%', padding: '13px 0', borderRadius: 10, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: loading ? 0.7 : 1 }}>
                    <Send size={15} color="#0B1F4D" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </>
              )}
            </div>

            {/* Map image */}
            <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #E8ECF4', minHeight: 380, position: 'relative', background: '#E8ECF4' }}>
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=75&auto=format&fit=crop"
                alt="Nairobi Office"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(11,31,77,0.88) 0%,transparent 52%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>ASCEND FINANCE HEADQUARTERS</div>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.76)', marginTop: 4 }}>Capital House, 3rd Floor, Nairobi CBD</div>
                <a href="tel:0729983747" style={{ fontSize: 13, color: '#D4AF37', marginTop: 6, display: 'block', textDecoration: 'none' }}>
                  📞 {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginTop: 64 }}>
            <SectionHeader badge="FAQs" title="Frequently Asked Questions" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 18, maxWidth: 900, margin: '0 auto' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} style={{ background: '#fff', borderRadius: 14, padding: '20px 22px', border: '1px solid #E8ECF4' }}>
                  <div style={{ fontWeight: 700, fontSize: 14.5, color: '#0B1F4D', marginBottom: 8 }}>{q}</div>
                  <div style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.72 }}>{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
