import { useCounter } from '../../hooks/useCounter'
import { STATS } from '../../data'

export default function StatsSection() {
  const { counts, ref } = useCounter(STATS.map(s => s.value))

  return (
    <section style={{ padding: '76px 0', background: 'linear-gradient(135deg,#060f26 0%,#0B1F4D 55%,#1a3a7c 100%)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px' }}>
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 24, textAlign: 'center' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ padding: '10px 0' }}>
              <div style={{ fontFamily: '"Cormorant Garamond",Georgia,serif', fontSize: 'clamp(46px,7vw,70px)', fontWeight: 700, color: '#D4AF37', lineHeight: 1, marginBottom: 10 }}>
                {counts[i].toLocaleString()}{s.suffix}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
