// ─────────────────────────────────────────────
// ASCEND FINANCE — Central data store
// ─────────────────────────────────────────────

export const HERO_SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1500&q=75&auto=format&fit=crop',
    headline: 'Fast & Flexible Loans',
    sub: 'Get the funds you need, when you need them. Quick approvals and flexible repayment terms tailored for you.',
    cta: 'Borrow Now',
  },
  {
    img: 'https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?w=1500&q=75&auto=format&fit=crop',
    headline: 'Grow Your Business with ASCEND FINANCE',
    sub: 'Empowering entrepreneurs and small businesses with the capital they need to reach new heights of success.',
    cta: 'Apply Today',
  },
  {
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1500&q=75&auto=format&fit=crop',
    headline: 'Emergency Loans Within Minutes',
    sub: "Life doesn't wait — neither do we. Access emergency funds instantly through our streamlined digital process.",
    cta: 'Get Started',
  },
  {
    img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1500&q=75&auto=format&fit=crop',
    headline: 'Trusted Financial Solutions',
    sub: 'Years of experience helping individuals and businesses achieve their financial goals with full transparency.',
    cta: 'Learn More',
  },
  {
    img: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1500&q=75&auto=format&fit=crop',
    headline: 'Your Financial Growth Partner',
    sub: "We don't just lend money — we invest in your success. Join thousands of satisfied clients across Kenya.",
    cta: 'Join Us',
  },
]

// ─────────────────────────────────────────────
// LOAN PRODUCTS
// ─────────────────────────────────────────────

export const LOAN_PRODUCTS = [
  {
    emoji: '👤',
    title: 'Personal Loans',
    color: '#7C3AED',
    max: 'KES 500,000',
    rate: '30%/mo',
    term: '1–12 months',
    desc: 'Flexible personal loans for any need — medical emergencies, education, home improvements, and more.',
    requirements: ['National ID', '3 months payslips', 'Bank statements', 'Proof of residence'],
  },
  {
    emoji: '🏢',
    title: 'Business Loans',
    color: '#059669',
    max: 'KES 5,000,000',
    rate: '30%/mo',
    term: '3–24 months',
    desc: 'Capital to grow your business, stock inventory, expand operations, or bridge cash-flow gaps nationwide.',
    requirements: ['Business registration', '6 months statements', 'Business plan', "Director's ID"],
  },
  {
    emoji: '⚡',
    title: 'Emergency Loans',
    color: '#DC2626',
    max: 'KES 100,000',
    rate: '30%/mo',
    term: '1–3 months',
    desc: 'Instant funds for urgent situations. Approved and disbursed within hours.',
    requirements: ['National ID', 'Phone verification', 'Any proof of income'],
  },
]

// ─────────────────────────────────────────────
// FEATURES
// ─────────────────────────────────────────────

export const FEATURES = [
  { emoji: '⚡', title: 'Instant Approval', desc: 'AI-powered automated system processes applications within minutes.' },
  { emoji: '🔄', title: 'Flexible Repayment', desc: 'Choose repayment terms that fit your financial situation.' },
  { emoji: '📱', title: 'M-Pesa Payments', desc: 'Disbursement and repayment via M-Pesa anywhere in Kenya.' },
  { emoji: '🏢', title: 'Business Loans', desc: 'Specialized loans designed for business growth.' },
  { emoji: '🛡️', title: 'Emergency Loans', desc: '24/7 access to emergency funding.' },
  { emoji: '🤝', title: 'Trusted Support', desc: 'Dedicated support at every step.' },
]

// ─────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────

export const STATS = [
  { value: 15000, label: 'Loans Issued', suffix: '+' },
  { value: 12000, label: 'Happy Clients', suffix: '+' },
  { value: 8, label: 'Years Experience', suffix: '+' },
  { value: 98, label: 'Repayment Rate', suffix: '%' },
]

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    name: 'Grace Wambui',
    role: 'Retail Business Owner, Nairobi',
    avatar: 'GW',
    stars: 5,
    text: 'ASCEND FINANCE helped me expand my shop when banks turned me away. Fast and reliable!',
  },
]

// ─────────────────────────────────────────────
// TEAM
// ─────────────────────────────────────────────

export const TEAM = [
  { name: 'David Kamau', role: 'CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=75' },
]

// ─────────────────────────────────────────────
// FAQS
// ─────────────────────────────────────────────

export const FAQS = [
  ['How quickly are loans approved?', 'Within 2 hours during business days.'],
]

// ─────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────

export const CONTACT_INFO = {
  phone: '0729 983 747',
  email: 'info@ascendfinance.co.ke',
  address: 'Capital House, Nairobi CBD, Kenya',
  mpesa: '0729 983 747',
  hours: 'Mon – Sat: 8:00am – 6:00pm',
}

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

export const ksh = (n) => `KES ${Math.round(n).toLocaleString()}`

export const calcLoan = (principal, months, rate = 0.30) => {
  const interest = principal * rate * months
  const total = principal + interest
  const monthly = months > 0 ? total / months : 0

  return {
    interest,
    total,
    monthly,
    monthly_interest: months > 0 ? interest / months : 0
  }
}

export const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)

export const isValidPhone = (phone) =>
  /^(0|\+254)[17]\d{8}$/.test(phone.replace(/\s/g, ''))

export const genRef = () =>
  `AF-${Date.now().toString().slice(-8)}`

export const clamp = (val, min, max) =>
  Math.min(Math.max(val, min), max)

export const scrollTop = () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })

// ─────────────────────────────────────────────
// MOCK API (FIXED — SINGLE VERSION ONLY)
// ─────────────────────────────────────────────

export const mockApplyLoan = async (form) => {
  await new Promise((r) => setTimeout(r, 1200))

  return {
    success: true,
    reference: `AF-${Date.now().toString().slice(-8)}`,
    data: form,
  }
}

export const mockContactSubmit = async (data) => {
  await new Promise((r) => setTimeout(r, 800))

  return { success: true }
}
export const MILESTONES = [
  { year: '2016', event: 'Founded in Nairobi with a vision to democratize microfinance in Kenya.' },
  { year: '2018', event: 'Expanded to 5 major cities; surpassed 1,000 active clients milestone.' },
  { year: '2020', event: 'Launched M-Pesa integration, enabling instant mobile disbursements 24/7.' },
  { year: '2022', event: 'Received CBK full microfinance license; portfolio exceeded KES 200 million.' },
  { year: '2024', event: 'Serving 12,000+ clients nationwide with a 98% repayment success rate.' },
]
export const CHART_DATA = [
  { month: 'Jan', value: 12000 },
  { month: 'Feb', value: 15000 },
  { month: 'Mar', value: 18000 },
  { month: 'Apr', value: 14000 },
  { month: 'May', value: 22000 },
]
export const DASHBOARD_LOANS = LOAN_PRODUCTS