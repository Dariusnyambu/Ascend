import { useState } from 'react'
import { AlertTriangle, Calculator as CalcIcon, TrendingUp } from 'lucide-react'
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Badge from '../components/ui/Badge'
import FieldLabel from '../components/ui/FieldLabel'
import { calcLoan, ksh } from '../utils'

const RATE = 0.30

export default function Calculator() {
  const [amount, setAmount] = useState(50000)
  const [months, setMonths] = useState(3)

  const { interest, total, monthly, monthly_interest } = calcLoan(amount, months, RATE)

  const pieData = [
    { name: 'Principal',      value: amount },
    { name: 'Total Interest', value: Math.round(interest) },
  ]

  const barData = Array.from({ length: Math.min(months, 12) }, (_, i) => ({
    month: `M${i + 1}`,
    Principal: Math.round(amount / months),
    Interest:  Math.round(interest / months),
  }))

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,#060f26,#0B1F4D)', padding: '68px 0 50px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          <Badge>Loan Calculator</Badge>
          <h1 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(28px,6vw,58px)', fontWeight: 700, color: '#fff', margin: '12px 0 10px' }}>
            Calculate Your Repayment
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', maxWidth: 500, margin: '0 auto' }}>
            See exactly how much you'll repay before you commit. Full transparency guaranteed.
          </p>
        </div>
      </div>

      <section className="dots-bg" style={{ padding: '76px 0', background: '#F7F9FC' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>

            {/* Input card */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '34px 30px', boxShadow: '0 4px 32px rgba(11,31,77,0.08)', border: '1px solid #E8ECF4' }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0B1F4D', marginBottom: 26, display: 'flex', alignItems: 'center', gap: 9 }}>
                <CalcIcon size={21} color="#D4AF37" /> Loan Details
              </h2>

              {/* Amount */}
              <div style={{ marginBottom: 24 }}>
                <FieldLabel>Loan Amount (KES)</FieldLabel>
                <input type="number" className="input-field" value={amount}
                  onChange={e => setAmount(Math.max(0, +e.target.value || 0))}
                  min={1000} max={5000000} step={1000} style={{ marginBottom: 8 }} />
                <input type="range" min={1000} max={500000} step={1000}
                  value={Math.min(amount, 500000)}
                  onChange={e => setAmount(+e.target.value)}
                  style={{ width: '100%' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#64748b', marginTop: 4 }}>
                  <span>KES 1,000</span><span>KES 500,000</span>
                </div>
              </div>

              {/* Duration */}
              <div style={{ marginBottom: 26 }}>
                <FieldLabel>Loan Duration (months)</FieldLabel>
                <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                  {[1, 2, 3, 6, 9, 12].map(m => (
                    <button key={m} onClick={() => setMonths(m)}
                      style={{ flex: '1 1 40px', padding: '10px 4px', borderRadius: 9, fontSize: 14, fontWeight: 700, border: `2px solid ${months === m ? '#0B1F4D' : '#E2E8F4'}`, background: months === m ? '#0B1F4D' : '#fff', color: months === m ? '#fff' : '#64748b', cursor: 'pointer', transition: 'all 0.2s' }}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rate display */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', background: '#0B1F4D' + '09', borderRadius: 10, marginBottom: 18 }}>
                <span style={{ fontSize: 13, color: '#0B1F4D', fontWeight: 600 }}>Monthly Interest Rate</span>
                <span style={{ fontSize: 18, fontWeight: 700, color: '#0B1F4D' }}>30%</span>
              </div>

              {/* Warning */}
              <div style={{ background: '#D97706' + '15', border: '1px solid #D9770638', borderRadius: 10, padding: '13px 16px', display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                <AlertTriangle size={16} color="#D97706" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ margin: 0, fontSize: 12.5, color: '#92400e', lineHeight: 1.65 }}>
                  <strong>30% monthly interest</strong> applies until full repayment on the outstanding balance.
                </p>
              </div>
            </div>

            {/* Results card */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '34px 30px', boxShadow: '0 4px 32px rgba(11,31,77,0.08)', border: '1px solid #E8ECF4' }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0B1F4D', marginBottom: 26, display: 'flex', alignItems: 'center', gap: 9 }}>
                <TrendingUp size={21} color="#D4AF37" /> Repayment Summary
              </h2>
              {[
                ['💰 Principal Amount',    ksh(amount),          '#0B1F4D'],
                ['📊 Monthly Interest',    ksh(monthly_interest), '#D97706'],
                ['📈 Total Interest',      ksh(interest),         '#DC2626'],
                ['✅ Total Repayment',     ksh(total),            '#059669'],
                ['📅 Monthly Installment', ksh(monthly),          '#D4AF37'],
              ].map(([label, val, col]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid #E8ECF4' }}>
                  <span style={{ fontSize: 13.5, color: '#64748b' }}>{label}</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: col }}>{val}</span>
                </div>
              ))}
              <div style={{ marginTop: 22, height: 195 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={78} dataKey="value" paddingAngle={4}>
                      <Cell fill="#0B1F4D" />
                      <Cell fill="#D4AF37" />
                    </Pie>
                    <Tooltip formatter={v => `KES ${v.toLocaleString()}`} />
                    <Legend iconSize={10} wrapperStyle={{ fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Bar breakdown */}
          {months > 1 && (
            <div style={{ background: '#fff', borderRadius: 20, padding: '30px', marginTop: 24, boxShadow: '0 4px 32px rgba(11,31,77,0.08)', border: '1px solid #E8ECF4' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0B1F4D', marginBottom: 20 }}>Monthly Repayment Breakdown</h3>
              <div style={{ height: 236 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} barSize={22}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8ECF4" vertical={false} />
                    <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={v => `${(v / 1000).toFixed(0)}K`} />
                    <Tooltip formatter={v => `KES ${v.toLocaleString()}`} contentStyle={{ borderRadius: 10, border: '1px solid #E8ECF4', fontSize: 12 }} />
                    <Legend iconSize={10} wrapperStyle={{ fontSize: 12 }} />
                    <Bar dataKey="Principal" fill="#0B1F4D" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Interest"  fill="#D4AF37" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Summary ribbon */}
          <div style={{ background: 'linear-gradient(135deg,#0B1F4D,#1a3a7c)', borderRadius: 20, padding: '28px', marginTop: 24 }}>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 18 }}>📋 Loan Summary</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 16 }}>
              {[['Principal', ksh(amount)], [`${months}M Interest`, ksh(interest)], ['You Repay', ksh(total)], ['Per Month', ksh(monthly)]].map(([l, v]) => (
                <div key={l} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 12, padding: '16px 18px', textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>{l}</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: '#D4AF37' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
