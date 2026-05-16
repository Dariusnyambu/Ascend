export default function Badge({ children, color = '#D4AF37' }) {
  return (
    <span style={{
      display: 'inline-block',
      background: color + '1f',
      color,
      border: `1px solid ${color}44`,
      padding: '4px 15px',
      borderRadius: 20,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 0.4,
    }}>
      {children}
    </span>
  )
}
