# 🏦 ASCEND FINANCE
### Kenya's Trusted Microfinance Web Application

> A premium, production-ready React + Vite fintech frontend  
> Deep Royal Blue `#0B1F4D` × Gold `#D4AF37` design system

---

## 🚀 Quick Start (VS Code)

```bash
# 1. Open the folder in VS Code
cd ascend-finance

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## 📁 Project Structure

```
ascend-finance/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          ← Sticky nav with mobile menu
│   │   │   └── Footer.jsx          ← 4-column footer
│   │   ├── sections/
│   │   │   ├── HeroSlider.jsx      ← 5-slide auto-carousel
│   │   │   └── StatsSection.jsx    ← Animated counters
│   │   └── ui/
│   │       ├── Badge.jsx           ← Gold/color pill badge
│   │       ├── SectionHeader.jsx   ← Badge + title + subtitle
│   │       └── FieldLabel.jsx      ← Form field labels
│   ├── pages/
│   │   ├── Home.jsx                ← Full landing page
│   │   ├── About.jsx               ← Company story + team
│   │   ├── Loans.jsx               ← 5 loan products
│   │   ├── Calculator.jsx          ← Live loan calculator + charts
│   │   ├── Apply.jsx               ← 7-step application form
│   │   ├── Contact.jsx             ← Form + map + FAQ
│   │   └── Dashboard.jsx           ← Admin-style dashboard UI
│   ├── hooks/
│   │   ├── useScrolled.js          ← Navbar scroll detection
│   │   └── useCounter.js           ← IntersectionObserver counter
│   ├── data/
│   │   └── index.js                ← All static data + mock APIs
│   ├── utils/
│   │   └── index.js                ← ksh(), calcLoan(), genRef()…
│   ├── App.jsx                     ← Router + layout wrapper
│   ├── main.jsx                    ← React DOM entry point
│   └── index.css                   ← Tailwind + global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 📄 Pages

| Route          | Page           | Description                                      |
|----------------|----------------|--------------------------------------------------|
| `/`            | Home           | Hero slider, features, stats, products, CTA      |
| `/about`       | About          | Story, team, milestones, stats                   |
| `/loans`       | Loans          | All 5 loan products with requirements            |
| `/calculator`  | Calculator     | Live calc with pie + bar charts                  |
| `/apply`       | Apply          | 7-step form with validation + file uploads       |
| `/contact`     | Contact        | Form, map image, office info, FAQ                |
| `/dashboard`   | Dashboard      | Sidebar UI, charts, loan table, reminders        |

---

## 🎨 Design System

| Token          | Value      |
|----------------|------------|
| Primary        | `#0B1F4D`  |
| Primary Light  | `#1a3a7c`  |
| Primary Dark   | `#060f26`  |
| Gold           | `#D4AF37`  |
| Gold Light     | `#e8c84a`  |
| Success        | `#059669`  |
| Danger         | `#DC2626`  |
| Warning        | `#D97706`  |
| Off-white      | `#F7F9FC`  |

---

## ⚙️ Tech Stack

- **React 18** + **Vite 5**
- **React Router DOM v6** — client-side routing
- **Tailwind CSS v3** — utility styling
- **Recharts** — pie, bar, area charts
- **Lucide React** — icon system
- **Plus Jakarta Sans** + **Cormorant Garamond** — typography

---

## 🔌 Future Backend Integration

The app is structured for easy backend wiring:

```js
// src/data/index.js — swap mock functions for real API calls

// BEFORE (mock):
export const mockApplyLoan = async (formData) => {
  await new Promise(r => setTimeout(r, 1200))
  return { success: true, reference: `AF-${Date.now()}` }
}

// AFTER (real API):
export const applyLoan = async (formData) => {
  const res = await fetch('/api/loans/apply', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  return res.json()
}
```

Planned backend: **Node.js + Express + MongoDB + JWT Auth + M-Pesa Daraja API**

---

## 📦 Build for Production

```bash
npm run build
# Output: dist/
```

---

## 📞 Contact Info

- **Phone:** 0729 983 747  
- **Email:** info@ascendfinance.co.ke  
- **Address:** Capital House, 3rd Floor, Nairobi CBD, Kenya  
- **M-Pesa:** 0729 983 747 (ASCEND FINANCE LTD)

---

*© 2024 ASCEND FINANCE LIMITED — CBK Regulated Microfinance Institution*
