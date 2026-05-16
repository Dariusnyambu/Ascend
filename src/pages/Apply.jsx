import { useState } from 'react'
import { AlertTriangle, ChevronLeft, ChevronRight, Check, Send, Upload, CheckCircle } from 'lucide-react'
import Badge from '../components/ui/Badge'
import FieldLabel from '../components/ui/FieldLabel'
import { genRef, isValidEmail, mockApplyLoan } from '../data'

const STEPS = ['Borrower', 'Credit', 'Repayment', 'Penalties', 'Defaults', 'Agreement', 'Signatures']

const INIT_FORM = {
  fullName:'', natId:'', addr:'', phone:'', email:'', occ:'',
  amount:'', currency:'KES', purpose:'',
  repDate:'', payMethod:'M-Pesa',
  bName:'', bSig:'', bDate:'',
  gName:'', gPhone:'', gId:'', gSig:'', gDate:'',
  a1:false, a2:false, a3:false, a4:false,
}

export default function Apply() {
  const [step, setStep]   = useState(1)
  const [form, setForm]   = useState(INIT_FORM)
  const [errs, setErrs]   = useState({})
  const [done, setDone]   = useState(false)
  const [ref,  setRef]    = useState('')
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))

  const validate = () => {
    const e = {}
    if (step === 1) {
      if (!form.fullName.trim()) e.fullName = 'Full name is required'
      if (!form.natId.trim())    e.natId    = 'National ID is required'
      if (!form.phone.trim())    e.phone    = 'Phone number is required'
      if (!form.email.trim())    e.email    = 'Email is required'
      else if (!isValidEmail(form.email)) e.email = 'Enter a valid email address'
    }
    if (step === 2) {
      if (!form.amount || +form.amount < 1000) e.amount  = 'Enter a valid amount (min KES 1,000)'
      if (!form.purpose.trim())               e.purpose = 'Purpose of credit is required'
    }
    if (step === 6) {
      if (!form.a1) e.a1 = 'r'; if (!form.a2) e.a2 = 'r'
      if (!form.a3) e.a3 = 'r'; if (!form.a4) e.a4 = 'r'
    }
    setErrs(e)
    return Object.keys(e).length === 0
  }

  const next = () => { if (validate()) setStep(s => Math.min(s + 1, 7)) }
  const prev = () => setStep(s => Math.max(s - 1, 1))

  const submit = async () => {
    if (!validate()) return
    setLoading(true)
    const result = await mockApplyLoan(form)
    setRef(result.reference)
    setLoading(false)
    setDone(true)
  }

  if (done) return (
    <div style={{ paddingTop: 70, minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F7F9FC' }} className="dots-bg">
      <div style={{ background: '#fff', borderRadius: 24, padding: '52px 44px', maxWidth: 520, width: '100%', textAlign: 'center', boxShadow: '0 8px 52px rgba(11,31,77,0.13)' }}>
        <div style={{ width: 84, height: 84, borderRadius: '50%', background: '#05966918', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', animation: 'pulseRing 2s ease infinite' }}>
          <CheckCircle size={46} color="#059669" />
        </div>
        <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 34, fontWeight: 700, color: '#0B1F4D', marginBottom: 12 }}>Application Submitted!</h2>
        <p style={{ fontSize: 14.5, color: '#64748b', lineHeight: 1.78, marginBottom: 22 }}>
          Thank you, <strong>{form.fullName || 'Applicant'}</strong>! Your application has been received. Our team will contact you within 2 hours on <strong>{form.phone}</strong>.
        </p>
        <div style={{ background: '#F7F9FC', borderRadius: 12, padding: '15px 20px', marginBottom: 24, textAlign: 'left' }}>
          <div style={{ fontSize: 11, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 7 }}>Application Reference</div>
          <div style={{ fontWeight: 800, color: '#0B1F4D', fontSize: 20 }}>{ref}</div>
        </div>
        <button className="btn-gold" onClick={() => { setDone(false); setStep(1); setForm(INIT_FORM) }}
          style={{ padding: '12px 28px', borderRadius: 10, fontSize: 14 }}>
          New Application
        </button>
      </div>
      <style>{`@keyframes pulseRing{0%,100%{box-shadow:0 0 0 0 rgba(5,150,105,.4)}50%{box-shadow:0 0 0 14px rgba(5,150,105,0)}}`}</style>
    </div>
  )

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Header + progress */}
      <div style={{ background: 'linear-gradient(135deg,#060f26,#0B1F4D)', padding: '46px 0 34px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <Badge>Loan Application</Badge>
            <h1 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(26px,5vw,48px)', fontWeight: 700, color: '#fff', margin: '10px 0 6px' }}>Apply for a Loan</h1>
            <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: 14 }}>Step {step} of 7 — {STEPS[step - 1]}</p>
          </div>
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <div style={{ background: 'rgba(255,255,255,0.18)', borderRadius: 6, height: 5, marginBottom: 14 }}>
              <div style={{ height: '100%', borderRadius: 6, background: 'linear-gradient(90deg,#D4AF37,#e8c84a)', width: `${(step / 7) * 100}%`, transition: 'width 0.4s ease' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 7 }}>
              {STEPS.map((_, i) => (
                <div key={i} onClick={() => i + 1 < step && setStep(i + 1)}
                  style={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11.5, fontWeight: 700, transition: 'all 0.3s', cursor: i + 1 < step ? 'pointer' : 'default', background: i + 1 < step ? '#D4AF37' : i + 1 === step ? '#fff' : 'rgba(255,255,255,0.18)', color: i + 1 < step ? '#0B1F4D' : i + 1 === step ? '#0B1F4D' : 'rgba(255,255,255,0.42)', border: i + 1 === step ? '2px solid #D4AF37' : '2px solid transparent' }}>
                  {i + 1 < step ? <Check size={12} /> : i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <section style={{ padding: '60px 0', background: '#F7F9FC' }}>
        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 22px' }}>
          <div style={{ background: '#fff', borderRadius: 20, padding: '38px 34px', boxShadow: '0 4px 32px rgba(11,31,77,0.08)', border: '1px solid #E8ECF4' }}>

            {/* STEP 1 */}
            {step === 1 && (
              <div>
                <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 26, fontWeight: 700, color: '#0B1F4D', marginBottom: 5 }}>Section 1: Borrower Details</h2>
                <p style={{ fontSize: 13, color: '#64748b', marginBottom: 26 }}>Please provide your personal information accurately as per your national ID.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  {[['fullName','Full Legal Name','text','John Kamau Doe'],['natId','National ID / Passport','text','12345678'],['phone','Phone Number','tel','0712 345 678'],['email','Email Address','email','you@example.com'],['occ','Occupation / Business','text','Job title or business name']].map(([k, l, t, ph]) => (
                    <div key={k}>
                      <FieldLabel required={['fullName','natId','phone','email'].includes(k)}>{l}</FieldLabel>
                      <input type={t} className={`input-field${errs[k] ? ' error' : ''}`} placeholder={ph} value={form[k]} onChange={e => set(k, e.target.value)} />
                      {errs[k] && <span style={{ fontSize: 11.5, color: '#DC2626', display: 'block', marginTop: 3 }}>{errs[k]}</span>}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 18 }}>
                  <FieldLabel>Residential Address</FieldLabel>
                  <input type="text" className="input-field" placeholder="Plot/House Number, Street, Area, City" value={form.addr} onChange={e => set('addr', e.target.value)} />
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div>
                <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 26, fontWeight: 700, color: '#0B1F4D', marginBottom: 5 }}>Section 2: Credit Facility Details</h2>
                <div style={{ background: '#DC262608', border: '1px solid #DC262628', borderRadius: 10, padding: '11px 15px', margin: '14px 0 22px', display: 'flex', gap: 9, alignItems: 'center' }}>
                  <AlertTriangle size={15} color="#DC2626" />
                  <span style={{ fontSize: 12.5, color: '#7f1d1d' }}>Fixed Rate: <strong>30% per month</strong> on outstanding balance.</span>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <FieldLabel required>Credit Amount (KES)</FieldLabel>
                  <input type="number" className={`input-field${errs.amount ? ' error' : ''}`} placeholder="e.g. 50000" value={form.amount} onChange={e => set('amount', e.target.value)} min={1000} />
                  {errs.amount && <span style={{ fontSize: 11.5, color: '#DC2626', display: 'block', marginTop: 3 }}>{errs.amount}</span>}
                </div>
                <div style={{ marginBottom: 18 }}>
                  <FieldLabel>Currency</FieldLabel>
                  <select className="input-field" value={form.currency} onChange={e => set('currency', e.target.value)}>
                    <option>KES</option><option>USD</option>
                  </select>
                </div>
                <div>
                  <FieldLabel required>Purpose of Credit</FieldLabel>
                  <textarea className={`input-field${errs.purpose ? ' error' : ''}`} placeholder="Describe how you plan to use the funds..." rows={3} value={form.purpose} onChange={e => set('purpose', e.target.value)} style={{ resize: 'vertical' }} />
                  {errs.purpose && <span style={{ fontSize: 11.5, color: '#DC2626', display: 'block', marginTop: 3 }}>{errs.purpose}</span>}
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div>
                <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 26, fontWeight: 700, color: '#0B1F4D', marginBottom: 5 }}>Section 3: Repayment Terms</h2>
                <p style={{ fontSize: 13, color: '#64748b', marginBottom: 22 }}>Set your preferred repayment schedule and payment method.</p>
                <div style={{ marginBottom: 20 }}>
                  <FieldLabel>Repayment Due Date</FieldLabel>
                  <input type="date" className="input-field" value={form.repDate} onChange={e => set('repDate', e.target.value)} />
                </div>
                <FieldLabel>Payment Method</FieldLabel>
                {['M-Pesa', 'Bank Transfer', 'Cash at Office'].map(m => (
                  <label key={m} style={{ display: 'flex', alignItems: 'center', gap: 11, cursor: 'pointer', padding: '12px 15px', marginBottom: 9, borderRadius: 9, border: `2px solid ${form.payMethod === m ? '#0B1F4D' : '#E2E8F4'}`, background: form.payMethod === m ? '#0B1F4D08' : '#fff', transition: 'all 0.22s' }}>
                    <input type="radio" name="pm" checked={form.payMethod === m} onChange={() => set('payMethod', m)} />
                    <span style={{ fontWeight: 600, fontSize: 14, color: '#0B1F4D' }}>{m}</span>
                  </label>
                ))}
                {form.payMethod === 'M-Pesa' && (
                  <div style={{ background: '#05966912', border: '1px solid #0596692e', borderRadius: 10, padding: '16px 20px', marginTop: 4 }}>
                    <div style={{ fontSize: 12.5, color: '#064e3b', fontWeight: 700, marginBottom: 4 }}>📱 M-Pesa Payment Details</div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: '#059669' }}>0729 983 747</div>
                    <div style={{ fontSize: 12, color: '#065f46', marginTop: 3 }}>ASCEND FINANCE LTD</div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div>
                <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 26, fontWeight: 700, color: '#0B1F4D', marginBottom: 5 }}>Section 4: Late Payment Policy</h2>
                <div style={{ background: '#DC26260d', border: '2px solid #DC262628', borderRadius: 14, padding: '26px', marginTop: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: '#DC262618', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><AlertTriangle size={22} color="#DC2626" /></div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: '#DC2626' }}>⚠️ Late Payment Penalty Warning</div>
                  </div>
                  {[['5% Penalty Charge', 'A 5% penalty fee is automatically charged on any overdue balance amount.'],['Added to Balance', 'The penalty is added directly and immediately to your outstanding loan balance.'],['Immediate Payment', 'The penalty amount must be paid immediately upon receipt of overdue notification.'],['Accumulation Risk', 'Continued non-payment causes penalties to compound, increasing your total debt.']].map(([t, d], i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontSize: 11, color: '#fff', fontWeight: 700 }}>{i + 1}</span>
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 13, color: '#DC2626', marginBottom: 2 }}>{t}</div>
                        <div style={{ fontSize: 13, color: '#7f1d1d', lineHeight: 1.65 }}>{d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <div>
                <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 26, fontWeight: 700, color: '#0B1F4D', marginBottom: 5 }}>Section 5: Default Terms & Conditions</h2>
                <p style={{ fontSize: 13, color: '#64748b', marginBottom: 20 }}>In the event of loan default, the following actions may be taken:</p>
                {[['💳','Credit Suspension','Immediate suspension of all further credit facilities.','#7C3AED'],['📋','Recovery Action','Formal loan recovery action will be initiated by our collections department.','#D97706'],['⚖️','Legal Proceedings','Legal proceedings may be commenced to recover outstanding funds.','#DC2626'],['💰','Recovery Costs','The borrower is fully responsible for all legal and recovery costs incurred.','#0B1F4D'],['📊','Credit Bureau','A negative credit bureau report will be filed, affecting future credit eligibility.','#0284C7']].map(([ico, t, d, col], i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '15px 18px', marginBottom: 10, borderRadius: 12, background: '#F7F9FC', border: '1px solid #E8ECF4' }}>
                    <div style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{ico}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13.5, color: col, marginBottom: 3 }}>{t}</div>
                      <div style={{ fontSize: 12.5, color: '#64748b', lineHeight: 1.62 }}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* STEP 6 */}
            {step === 6 && (
              <div>
                <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 26, fontWeight: 700, color: '#0B1F4D', marginBottom: 5 }}>Section 6: Agreement & Acknowledgement</h2>
                <p style={{ fontSize: 13, color: '#64748b', marginBottom: 22 }}>Please carefully read and tick all boxes to confirm your understanding and agreement.</p>
                {[['a1', 'I have read, understood, and fully agree to all terms and conditions set out in this loan agreement.'],['a2', 'I accept and acknowledge the 30% monthly interest rate charge on my outstanding loan balance.'],['a3', 'I accept the 5% late payment penalty on any overdue amounts, payable immediately when charged.'],['a4', 'I commit to repaying the full outstanding amount in accordance with the agreed repayment schedule.']].map(([k, txt]) => (
                  <label key={k} style={{ display: 'flex', gap: 13, alignItems: 'flex-start', cursor: 'pointer', padding: '15px 18px', marginBottom: 11, borderRadius: 12, border: `2px solid ${form[k] ? '#059669' : '#E2E8F4'}`, background: form[k] ? '#05966907' : '#fff', transition: 'all 0.22s' }}>
                    <input type="checkbox" checked={form[k]} onChange={e => set(k, e.target.checked)} style={{ width: 17, height: 17, marginTop: 1.5, flexShrink: 0 }} />
                    <span style={{ fontSize: 13.5, color: '#0B1F4D', lineHeight: 1.68 }}>{txt}</span>
                  </label>
                ))}
                {(errs.a1 || errs.a2 || errs.a3 || errs.a4) && (
                  <p style={{ color: '#DC2626', fontSize: 12.5, marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <AlertTriangle size={13} color="#DC2626" /> Please accept all four terms above to continue.
                  </p>
                )}
              </div>
            )}

            {/* STEP 7 */}
            {step === 7 && (
              <div>
                <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 26, fontWeight: 700, color: '#0B1F4D', marginBottom: 22 }}>Section 7: Signatures & Documents</h2>
                <div style={{ background: '#F7F9FC', borderRadius: 14, padding: '22px', marginBottom: 20, borderLeft: '4px solid #D4AF37' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0B1F4D', marginBottom: 16 }}>Borrower Signature</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    {[['bName','Full Name','text'],['bSig','Signature (type name)','text'],['bDate','Date','date']].map(([k, l, t]) => (
                      <div key={k}><FieldLabel>{l}</FieldLabel><input type={t} className="input-field" value={form[k]} onChange={e => set(k, e.target.value)} /></div>
                    ))}
                  </div>
                </div>
                <div style={{ background: '#F7F9FC', borderRadius: 14, padding: '22px', marginBottom: 22, borderLeft: '4px solid #1a3a7c' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0B1F4D', marginBottom: 16 }}>Guarantor Details</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    {[['gName','Full Name','text'],['gPhone','Phone','tel'],['gId','National ID','text'],['gSig','Signature','text'],['gDate','Date','date']].map(([k, l, t]) => (
                      <div key={k}><FieldLabel>{l}</FieldLabel><input type={t} className="input-field" value={form[k]} onChange={e => set(k, e.target.value)} /></div>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[['📎 National ID / Passport', 'Clear photo or scan of your valid ID'],['📄 Supporting Documents', 'Payslips, business registration, or bank statements']].map(([title, hint]) => (
                    <label key={title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '28px 16px', borderRadius: 12, cursor: 'pointer', border: '2px dashed #D4AF37', background: '#D4AF3709', gap: 9, transition: 'background 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#D4AF3716'}
                      onMouseLeave={e => e.currentTarget.style.background = '#D4AF3709'}>
                      <Upload size={28} color="#D4AF37" />
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#0B1F4D', textAlign: 'center' }}>{title}</span>
                      <span style={{ fontSize: 11, color: '#64748b', textAlign: 'center' }}>{hint}</span>
                      <span style={{ fontSize: 10, color: '#64748b' }}>PDF, JPG, PNG — max 5MB</span>
                      <input type="file" accept=".pdf,.jpg,.jpeg,.png" style={{ display: 'none' }} />
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 34, borderTop: '1px solid #E8ECF4', paddingTop: 22 }}>
              <button onClick={prev} disabled={step === 1} className="btn-outline"
                style={{ padding: '11px 24px', borderRadius: 10, fontSize: 13.5, opacity: step === 1 ? 0.38 : 1, display: 'flex', alignItems: 'center', gap: 7 }}>
                <ChevronLeft size={14} /> Previous
              </button>
              <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={() => setSaved(true)}
                  style={{ padding: '11px 18px', borderRadius: 10, fontSize: 13, background: 'none', border: '2px solid #E2E8F4', cursor: 'pointer', color: '#64748b', fontWeight: 600, transition: 'border-color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#0B1F4D'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F4'}>
                  {saved ? '✓ Saved' : 'Save Draft'}
                </button>
                {step < 7
                  ? <button className="btn-gold" onClick={next} style={{ padding: '11px 24px', borderRadius: 10, fontSize: 13.5, display: 'flex', alignItems: 'center', gap: 7 }}>Next <ChevronRight size={14} /></button>
                  : <button className="btn-primary" onClick={submit} disabled={loading} style={{ padding: '11px 26px', borderRadius: 10, fontSize: 13.5, display: 'flex', alignItems: 'center', gap: 7, opacity: loading ? 0.7 : 1 }}>
                      <Send size={14} color="#fff" /> {loading ? 'Submitting...' : 'Submit Application'}
                    </button>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
