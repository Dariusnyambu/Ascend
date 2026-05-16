import { useState, useEffect, useRef } from 'react'

export function useCounter(targets, threshold = 0.3) {
  const [counts, setCounts] = useState(targets.map(() => 0))
  const ref  = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true
        targets.forEach((target, i) => {
          let current = 0
          const step = Math.ceil(target / 60)
          const timer = setInterval(() => {
            current = Math.min(current + step, target)
            setCounts(prev => { const n = [...prev]; n[i] = current; return n })
            if (current >= target) clearInterval(timer)
          }, 24)
        })
      }
    }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return { counts, ref }
}
