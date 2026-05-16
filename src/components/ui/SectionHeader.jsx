import Badge from './Badge'

export default function SectionHeader({ badge, title, subtitle, light = false, align = 'center' }) {
  return (
    <div className="animate-fade-up" style={{ textAlign: align, marginBottom: 52 }}>
      {badge && <div style={{ marginBottom: 14 }}><Badge>{badge}</Badge></div>}
      <h2
        className="font-serif font-bold"
        style={{
          fontSize: 'clamp(30px, 4.8vw, 50px)',
          color: light ? '#fff' : '#0B1F4D',
          lineHeight: 1.14,
          marginBottom: 14,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: 16,
          color: light ? 'rgba(255,255,255,0.74)' : '#64748b',
          maxWidth: align === 'center' ? 580 : '100%',
          margin: align === 'center' ? '0 auto' : '0',
          lineHeight: 1.78,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
