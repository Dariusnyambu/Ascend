// ── Format currency
export const ksh = (n) => `KES ${Math.round(n).toLocaleString()}`

// ── Loan calculation
export const calcLoan = (principal, months, rate = 0.30) => {
  const interest  = principal * rate * months
  const total     = principal + interest
  const monthly   = months > 0 ? total / months : 0
  return { interest, total, monthly, monthly_interest: interest / months }
}

// ── Email validation
export const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)

// ── Phone validation (Kenya)
export const isValidPhone = (phone) => /^(0|\+254)[17]\d{8}$/.test(phone.replace(/\s/g, ''))

// ── Generate reference number
export const genRef = () => `AF-${Date.now().toString().slice(-8)}`

// ── Clamp value
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

// ── Scroll to top
export const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

// ── Status badge config
export const statusConfig = {
  Active:  { bg: 'rgba(5,150,105,0.14)',  text: '#059669' },
  Paid:    { bg: 'rgba(11,31,77,0.12)',   text: '#0B1F4D' },
  Pending: { bg: 'rgba(217,119,6,0.14)', text: '#D97706' },
}
