import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  TrendingUp, Bell, Plus, Eye, LogOut,
  CreditCard, CheckCircle, Calendar, LayoutDashboard,
  Calculator, User, Settings, DollarSign
} from 'lucide-react'
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer
} from 'recharts'
import { CHART_DATA, DASHBOARD_LOANS } from '../data'
import { statusConfig } from '../utils'

const SIDEBAR_ITEMS = [
  { id: 'overview',  icon: LayoutDashboard, label: 'Overview'   },
  { id: 'loans',     icon: CreditCard,      label: 'My Loans'   },
  { id: 'newloan',   icon: Plus,            label: 'New Loan'   },
  { id: 'payments',  icon: DollarSign,      label: 'Payments'   },
  { id: 'calc',      icon: Calculator,      label: 'Calculator' },
  { id: 'profile',   icon: User,            label: 'Profile'    },
  { id: 'settings',  icon: Settings,        label: 'Settings'   },
]

const KPI_CARDS = [
  { label: 'Active Loan',   value: 'KES 50,000',   sub: '+KES 15K interest',  icon: CreditCard,    color: '#D4AF37' },
  { label: 'Total Repaid',  value: 'KES 30,000',   sub: '60% of loan done',   icon: CheckCircle,   color: '#059669' },
  { label: 'Next Payment',  value: 'Jul 15, 2024', sub: 'KES 6,500 due',      icon: Calendar,      color: '#4F46E5' },
  { label: 'Credit Score',  value: '724',          sub: 'Good Standing',       icon: TrendingUp,    color: '#0B1F4D' },
]

const ACTIVITY = [
  { emoji: '✅', title: 'Loan Approved',        detail: 'LN-2024-001 — KES 50,000',    time: '2 days ago',  color: '#059669' },
  { emoji: '💰', title: 'Payment Received',     detail: 'LN-2024-001 — KES 6,500',    time: '5 days ago',  color: '#D4AF37' },
  { emoji: '📄', title: 'Application Submitted',detail: 'LN-2024-034 — KES 100,000',  time: '1 week ago',  color: '#0B1F4D' },
  { emoji: '⚠️', title: 'Payment Due Soon',    detail: 'LN-2024-001 — Jul 15, 2024', time: 'Upcoming',    color: '#D97706' },
]

export default function Dashboard() {
  const [active, setActive] = useState('overview')
  const navigate = useNavigate()

  const handleSidebar = (id) => {
    if (id === 'newloan') { navigate('/apply');      return }
    if (id === 'calc')    { navigate('/calculator'); return }
    setActive(id)
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F7F9FC' }}>

      {/* ════════════════════════════════
          SIDEBAR
      ════════════════════════════════ */}
      <aside style={{
        width: 224,
        background: 'linear-gradient(180deg,#060f26 0%,#0B1F4D 100%)',
        position: 'fixed', left: 0, top: 0, bottom: 0, zIndex: 100,
        display: 'flex', flexDirection: 'column', padding: '16px 10px',
        overflowY: 'auto',
      }}>
        {/* Logo */}
        <div onClick={() => navigate('/')} style={{
          display: 'flex', alignItems: 'center', gap: 9,
          padding: '10px 8px 20px', cursor: 'pointer',
          borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: 14,
        }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#D4AF37,#e8c84a)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TrendingUp size={17} color="#0B1F4D" strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ fontFamily: '"Cormorant Garamond",Georgia,serif', fontSize: 17, fontWeight: 700, color: '#fff', lineHeight: 1.05 }}>ASCEND</div>
            <div style={{ fontSize: 7.5, letterSpacing: 2.8, color: '#D4AF37', fontWeight: 700 }}>FINANCE</div>
          </div>
        </div>

        {/* Section label */}
        <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.35)', fontWeight: 700, letterSpacing: 1.8, textTransform: 'uppercase', padding: '0 8px', marginBottom: 6 }}>
          Navigation
        </div>

        {/* Nav items */}
        {SIDEBAR_ITEMS.map(item => (
          <div key={item.id}
            className={`sidebar-item${active === item.id ? ' active' : ''}`}
            onClick={() => handleSidebar(item.id)}>
            <item.icon size={16} />
            {item.label}
          </div>
        ))}

        {/* User footer */}
        <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#D4AF37,#e8c84a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#0B1F4D', fontSize: 13, flexShrink: 0 }}>JD</div>
            <div>
              <div style={{ color: '#fff', fontSize: 12.5, fontWeight: 600 }}>John Doe</div>
              <div style={{ color: 'rgba(255,255,255,0.42)', fontSize: 10.5 }}>Active Client</div>
            </div>
          </div>
          <div onClick={() => navigate('/')}
            style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px', cursor: 'pointer', borderRadius: 8, color: 'rgba(255,255,255,0.42)', fontSize: 12.5, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.42)'}>
            <LogOut size={13} /> Sign Out
          </div>
        </div>
      </aside>

      {/* ════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════ */}
      <div style={{ marginLeft: 224, flex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        {/* Top bar */}
        <div style={{
          background: '#fff', padding: '0 26px', height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid #E8ECF4', position: 'sticky', top: 0, zIndex: 50,
        }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#0B1F4D', lineHeight: 1 }}>
              {active === 'overview' ? 'Dashboard Overview'
               : active === 'loans'   ? 'My Loan Applications'
               : active === 'payments'? 'Payment History'
               : active === 'profile' ? 'My Profile'
               : 'Settings'}
            </div>
            <div style={{ fontSize: 11.5, color: '#64748b', marginTop: 2 }}>
              Welcome back, John Doe — Last login: Today 9:14 AM
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button style={{ background: 'none', border: '1.5px solid #E8ECF4', borderRadius: 8, padding: '7px 8px', cursor: 'pointer', position: 'relative' }}>
              <Bell size={17} color="#0B1F4D" />
              <div style={{ position: 'absolute', top: 5, right: 5, width: 8, height: 8, borderRadius: '50%', background: '#DC2626', border: '2px solid #fff' }} />
            </button>
            <button className="btn-gold" onClick={() => navigate('/apply')}
              style={{ padding: '8px 16px', borderRadius: 8, fontSize: 12.5, display: 'flex', alignItems: 'center', gap: 6 }}>
              <Plus size={13} color="#0B1F4D" /> New Loan
            </button>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#0B1F4D,#1a3a7c)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13.5, fontWeight: 700, cursor: 'pointer', flexShrink: 0 }}>JD</div>
          </div>
        </div>

        {/* Page body */}
        <div style={{ padding: '26px', flex: 1 }}>

          {/* KPI Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16, marginBottom: 22 }}>
            {KPI_CARDS.map((c, i) => (
              <div key={i} className="card-lift" style={{ background: '#fff', borderRadius: 14, padding: '20px 18px', border: '1px solid #E8ECF4', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${c.color}88,${c.color}18)` }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: 10.5, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 7 }}>{c.label}</div>
                    <div style={{ fontSize: 21, fontWeight: 700, color: '#0B1F4D', lineHeight: 1 }}>{c.value}</div>
                    <div style={{ fontSize: 11.5, color: c.color, marginTop: 5, fontWeight: 500 }}>{c.sub}</div>
                  </div>
                  <div style={{ width: 40, height: 40, borderRadius: 11, background: c.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <c.icon size={19} color={c.color} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.65fr 1fr', gap: 18, marginBottom: 20 }}>

            {/* Bar chart */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '22px', border: '1px solid #E8ECF4' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                <h3 style={{ fontSize: 14.5, fontWeight: 700, color: '#0B1F4D', margin: 0 }}>
                  Loan Activity — Last 6 Months
                </h3>
                <span style={{ fontSize: 11, color: '#64748b', background: '#F7F9FC', padding: '4px 10px', borderRadius: 20, fontWeight: 600 }}>
                  KES (Thousands)
                </span>
              </div>
              <div style={{ height: 210 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={CHART_DATA} barSize={17}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8ECF4" vertical={false} />
                    <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${v}K`} />
                    <Tooltip formatter={v => `KES ${v}K`} contentStyle={{ borderRadius: 10, border: '1px solid #E8ECF4', fontSize: 12 }} />
                    <Legend iconSize={9} wrapperStyle={{ fontSize: 11.5 }} />
                    <Bar dataKey="disbursed" name="Disbursed" fill="#0B1F4D" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="repaid"    name="Repaid"    fill="#D4AF37" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie chart */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '22px', border: '1px solid #E8ECF4' }}>
              <h3 style={{ fontSize: 14.5, fontWeight: 700, color: '#0B1F4D', marginBottom: 16, marginTop: 0 }}>
                Loan Breakdown
              </h3>
              <div style={{ height: 210 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Paid',      value: 30 },
                        { name: 'Remaining', value: 20 },
                        { name: 'Interest',  value: 15 },
                      ]}
                      cx="50%" cy="50%"
                      innerRadius={48} outerRadius={70}
                      dataKey="value" paddingAngle={3}
                    >
                      <Cell fill="#059669" />
                      <Cell fill="#0B1F4D" />
                      <Cell fill="#D4AF37" />
                    </Pie>
                    <Tooltip formatter={v => `KES ${v}K`} contentStyle={{ borderRadius: 10, fontSize: 12 }} />
                    <Legend iconSize={9} wrapperStyle={{ fontSize: 11.5 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Loans table */}
          <div style={{ background: '#fff', borderRadius: 14, padding: '22px', border: '1px solid #E8ECF4', marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <h3 style={{ fontSize: 14.5, fontWeight: 700, color: '#0B1F4D', margin: 0 }}>My Loan Applications</h3>
              <div style={{ display: 'flex', gap: 9 }}>
                <button style={{ padding: '6px 13px', borderRadius: 8, fontSize: 12, background: '#F7F9FC', border: '1px solid #E8ECF4', cursor: 'pointer', color: '#64748b', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 5 }}>
                  <Eye size={13} /> View All
                </button>
                <button className="btn-primary" onClick={() => navigate('/apply')}
                  style={{ padding: '7px 15px', borderRadius: 8, fontSize: 12, display: 'flex', alignItems: 'center', gap: 5 }}>
                  <Plus size={12} color="#fff" /> New Loan
                </button>
              </div>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #E8ECF4' }}>
                    {['Loan ID', 'Amount', 'Status', 'Disbursed', 'Due Date', 'Paid', 'Progress'].map(col => (
                      <th key={col} style={{ textAlign: 'left', padding: '9px 12px', fontSize: 10, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: 0.8, whiteSpace: 'nowrap' }}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DASHBOARD_LOANS.map((loan, i) => {
                    const sc = statusConfig[loan.status] || statusConfig.Pending
                    return (
                      <tr key={i} style={{ borderBottom: '1px solid #E8ECF4', transition: 'background 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.background = '#F7F9FC'}
                        onMouseLeave={e => e.currentTarget.style.background = ''}>
                        <td style={{ padding: '13px 12px', fontSize: 12.5, fontWeight: 700, color: '#0B1F4D' }}>{loan.id}</td>
                        <td style={{ padding: '13px 12px', fontSize: 13.5, fontWeight: 600 }}>{loan.amount}</td>
                        <td style={{ padding: '13px 12px' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700, background: sc.bg, color: sc.text }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', display: 'inline-block' }} />
                            {loan.status}
                          </span>
                        </td>
                        <td style={{ padding: '13px 12px', fontSize: 12, color: '#64748b' }}>{loan.disbursed}</td>
                        <td style={{ padding: '13px 12px', fontSize: 12, color: '#64748b' }}>{loan.due}</td>
                        <td style={{ padding: '13px 12px', fontSize: 13, fontWeight: 600, color: loan.status === 'Paid' ? '#059669' : 'inherit' }}>
                          KES {loan.paid}
                        </td>
                        <td style={{ padding: '13px 12px', minWidth: 110 }}>
                          <div style={{ background: '#E8ECF4', borderRadius: 20, height: 6, overflow: 'hidden' }}>
                            <div style={{
                              height: '100%', borderRadius: 20,
                              width: `${loan.progress}%`,
                              background: loan.progress === 100 ? '#059669'
                                        : loan.progress === 0   ? '#E8ECF4'
                                        : 'linear-gradient(90deg,#D4AF37,#0B1F4D)',
                              transition: 'width 0.4s',
                            }} />
                          </div>
                          <div style={{ fontSize: 10, color: '#64748b', marginTop: 3 }}>{loan.progress}%</div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom row: Activity + Payment reminder */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>

            {/* Recent activity */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '22px', border: '1px solid #E8ECF4' }}>
              <h3 style={{ fontSize: 14.5, fontWeight: 700, color: '#0B1F4D', marginBottom: 18, marginTop: 0 }}>⚡ Recent Activity</h3>
              {ACTIVITY.map((act, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '11px 0', borderBottom: i < ACTIVITY.length - 1 ? '1px solid #E8ECF4' : 'none' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: act.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 16 }}>
                    {act.emoji}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#0B1F4D', lineHeight: 1 }}>{act.title}</div>
                    <div style={{ fontSize: 11.5, color: '#64748b', marginTop: 2 }}>{act.detail}</div>
                  </div>
                  <div style={{ fontSize: 11, color: '#64748b', whiteSpace: 'nowrap' }}>{act.time}</div>
                </div>
              ))}
            </div>

            {/* Payment reminder */}
            <div style={{ background: 'linear-gradient(135deg,#0B1F4D,#1a3a7c)', borderRadius: 14, padding: '22px' }}>
              <h3 style={{ fontSize: 14.5, fontWeight: 700, color: '#fff', marginBottom: 18, marginTop: 0 }}>⏰ Payment Reminder</h3>
              <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 12, padding: '18px', marginBottom: 16 }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginBottom: 4 }}>Next payment due in</div>
                <div style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 36, fontWeight: 700, color: '#D4AF37', lineHeight: 1 }}>31 Days</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.58)', marginTop: 4 }}>July 15, 2024 — Loan LN-2024-001</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: '14px 16px', marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>Amount Due</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>KES 6,500</div>
                </div>
                <button className="btn-gold" style={{ padding: '9px 18px', borderRadius: 9, fontSize: 12.5, whiteSpace: 'nowrap' }}>
                  Pay via M-Pesa
                </button>
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.52)', textAlign: 'center' }}>
                M-Pesa: 0729 983 747 • ASCEND FINANCE LTD
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
