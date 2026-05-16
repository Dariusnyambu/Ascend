import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HERO_SLIDES } from '../../data'
import Badge from '../ui/Badge'

export default function HeroSlider() {
  const [cur, setCur] = useState(0)
  const timer = useRef(null)
  const navigate = useNavigate()

  const go = useCallback(i => setCur((i + HERO_SLIDES.length) % HERO_SLIDES.length), [])

  useEffect(() => {
    timer.current = setInterval(() => setCur(c => (c + 1) % HERO_SLIDES.length), 5200)
    return () => clearInterval(timer.current)
  }, [])

  const slide = HERO_SLIDES[cur]

  return (
    <div style={{ position: 'relative', height: '100vh', minHeight: 580, overflow: 'hidden', background: '#060f26' }}>

      {/* Slide backgrounds */}
      {HERO_SLIDES.map((s, i) => (
        <div key={i} style={{ position: 'absolute', inset: 0, opacity: i === cur ? 1 : 0, transition: 'opacity 1.2s ease', zIndex: i === cur ? 1 : 0 }}>
          <img src={s.img} alt={s.headline}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading={i === 0 ? 'eager' : 'lazy'} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(125deg,rgba(6,15,38,0.86) 0%,rgba(11,31,77,0.62) 55%,rgba(0,0,0,0.28) 100%)' }} />
        </div>
      ))}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center', paddingTop: 70 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 22px', width: '100%' }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ marginBottom: 16 }}>
              <Badge>Kenya's #1 Microfinance Partner</Badge>
            </div>
            <h1 key={`h-${cur}`}
              style={{ fontFamily: '"Cormorant Garamond",Georgia,serif', fontSize: 'clamp(38px,6.5vw,74px)', fontWeight: 700, color: '#fff', lineHeight: 1.09, marginBottom: 20, animation: 'fadeUp 0.6s ease both' }}>
              {slide.headline}
            </h1>
            <p key={`s-${cur}`}
              style={{ fontSize: 'clamp(15px,2vw,19px)', color: 'rgba(255,255,255,0.82)', lineHeight: 1.78, marginBottom: 36, maxWidth: 560, animation: 'fadeUp 0.6s 0.15s ease both', opacity: 0, animationFillMode: 'forwards' }}>
              {slide.sub}
            </p>
            <div style={{ display: 'flex', gap: 13, flexWrap: 'wrap', animation: 'fadeUp 0.6s 0.28s ease both', opacity: 0, animationFillMode: 'forwards' }}>
              <button className="btn-gold" onClick={() => navigate('/apply')}
                style={{ padding: '15px 36px', borderRadius: 50, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
                {slide.cta} →
              </button>
              <button className="btn-ghost" onClick={() => navigate('/calculator')}
                style={{ padding: '15px 30px', borderRadius: 50, fontSize: 15, border: '1.5px solid rgba(255,255,255,0.32)' }}>
                Loan Calculator
              </button>
            </div>

            {/* Quick stats */}
            <div style={{ display: 'flex', gap: 32, marginTop: 50, flexWrap: 'wrap', animation: 'fadeUp 0.6s 0.4s ease both', opacity: 0, animationFillMode: 'forwards' }}>
              {[['15K+', 'Loans Issued'], ['98%', 'Success Rate'], ['24/7', 'Support']].map(([v, l]) => (
                <div key={l} style={{ borderRight: '1px solid rgba(255,255,255,0.15)', paddingRight: 28 }}>
                  <div style={{ fontFamily: '"Cormorant Garamond",Georgia,serif', fontSize: 30, fontWeight: 700, color: '#D4AF37', lineHeight: 1 }}>{v}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 500, marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      {[{ dir: -1, side: 'left', Icon: ChevronLeft }, { dir: 1, side: 'right', Icon: ChevronRight }].map(({ dir, side, Icon }) => (
        <button key={side} onClick={() => go(cur + dir)} style={{ position: 'absolute', [side]: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 3, background: 'rgba(255,255,255,0.13)', border: '1px solid rgba(255,255,255,0.22)', color: '#fff', width: 46, height: 46, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.4)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.13)'}>
          <Icon size={18} />
        </button>
      ))}

      {/* Pagination dots */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', gap: 9 }}>
        {HERO_SLIDES.map((_, i) => (
          <button key={i} onClick={() => go(i)} style={{ width: i === cur ? 28 : 9, height: 9, borderRadius: 5, background: i === cur ? '#D4AF37' : 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer', transition: 'all 0.4s ease', padding: 0 }} />
        ))}
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  )
}
