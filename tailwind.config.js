/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:   '#0B1F4D',
        primaryL:  '#1a3a7c',
        primaryD:  '#060f26',
        gold:      '#D4AF37',
        goldL:     '#e8c84a',
        goldD:     '#b8952a',
        offwhite:  '#F7F9FC',
        muted:     '#64748b',
        success:   '#059669',
        danger:    '#DC2626',
        warning:   '#D97706',
      },
      fontFamily: {
        sans:      ['"Plus Jakarta Sans"', 'sans-serif'],
        serif:     ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up':  'fadeUp 0.6s ease both',
        'slide-l':  'slideL 0.55s ease both',
        'slide-r':  'slideR 0.55s ease both',
        'scale-in': 'scaleIn 0.48s ease both',
        'float':    'floatY 3s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeUp:    { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideL:    { from: { opacity: '0', transform: 'translateX(-32px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        slideR:    { from: { opacity: '0', transform: 'translateX(32px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        scaleIn:   { from: { opacity: '0', transform: 'scale(0.88)' }, to: { opacity: '1', transform: 'scale(1)' } },
        floatY:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-9px)' } },
        pulseRing: { '0%,100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0.4)' }, '50%': { boxShadow: '0 0 0 14px rgba(212,175,55,0)' } },
      },
      boxShadow: {
        'gold':    '0 10px 30px rgba(212,175,55,0.4)',
        'navy':    '0 10px 30px rgba(11,31,77,0.35)',
        'card':    '0 4px 32px rgba(11,31,77,0.08)',
        'xl-navy': '0 22px 48px rgba(11,31,77,0.14)',
      },
    },
  },
  plugins: [],
}
