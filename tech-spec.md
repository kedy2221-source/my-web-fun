# ParkShare — Technical Specification

---

## 1. Tech Stack Overview

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Google Fonts (Nunito + Inter) |

---

## 2. Tailwind Configuration Guide

### Color Extensions

```javascript
// tailwind.config.ts
colors: {
  background: {
    primary: '#F6F8FC',
    secondary: '#EEF2F7',
  },
  accent: '#2F8E92',
  text: {
    primary: '#0E1A1A',
    secondary: '#6B7A7A',
  },
  status: {
    success: '#27C078',
    warning: '#F2B33D',
    danger: '#E74C4C',
  },
  surface: '#FFFFFF',
}
```

### Font Extensions

```javascript
fontFamily: {
  display: ['Nunito', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
}
```

### Border Radius Extensions

```javascript
borderRadius: {
  'card': '28px',
  'pill': '50px',
  'chip': '18px',
}
```

### Shadow Extensions

```javascript
boxShadow: {
  'card': '0 18px 40px rgba(14, 26, 26, 0.10)',
  'float': '0 14px 30px rgba(14, 26, 26, 0.16)',
  'input-focus': '0 0 0 3px rgba(47, 142, 146, 0.15)',
}
```

---

## 3. Component Inventory

### Shadcn/UI Components (Install via CLI)

- `button` — CTAs, actions
- `input` — form fields
- `card` — content containers
- `switch` — toggle between renter/host mode
- `badge` — status indicators
- `separator` — visual dividers

### Custom Components

#### Layout Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Section` | `className?: string, children, id?: string` | Wrapper with consistent padding |
| `Container` | `className?: string, children` | Max-width container |

#### Hero Components

| Component | Props | Description |
|-----------|-------|-------------|
| `SearchCard` | `mode: 'renter' \| 'host', onModeChange: fn` | Floating search panel |
| `MapBackground` | `pins: Pin[]` | Animated map with bubble pins |
| `BubblePin` | `status: 'green' \| 'yellow' \| 'red', position: {x, y}` | Animated map marker |

#### Feature Components

| Component | Props | Description |
|-----------|-------|-------------|
| `StepCard` | `step: number, title: string, description: string, icon: ReactNode` | How it works card |
| `FeatureItem` | `icon: ReactNode, title: string` | Trust section feature |
| `ReviewCard` | `quote: string, rating: number` | Testimonial card |
| `EarningsPreview` | `amount: string, period: string` | Host earnings snippet |

#### Interactive Components

| Component | Props | Description |
|-----------|-------|-------------|
| `FloatingActionButton` | `onClick: fn, children` | "List your spot" FAB |
| `AvailabilityLegend` | — | Color-coded legend |
| `PricingComparison` | `cityAvg: string, parkshareAvg: string` | Price comparison UI |

---

## 4. Animation Implementation Plan

### Global Animations

| Animation | Tech | Implementation |
|-----------|------|----------------|
| Smooth scroll | CSS | `scroll-behavior: smooth` on html |
| Section reveals | Framer Motion | `whileInView` with fade + translateY |
| Reduced motion | CSS + FM | `prefers-reduced-motion` media query |

### Section-Specific Animations

| Section | Animation | Tech | Implementation |
|---------|-----------|------|----------------|
| Hero | Map scale-in | Framer Motion | `initial={{ scale: 1.04 }}` → `animate={{ scale: 1 }}`, 900ms |
| Hero | Search card entrance | Framer Motion | `initial={{ opacity: 0, y: 28, scale: 0.98 }}` → `animate={{ opacity: 1, y: 0, scale: 1 }}`, 650ms, custom easing |
| Hero | Headline stagger | Framer Motion | `staggerChildren: 0.06`, each line `y: 18 → 0` |
| Hero | Pin breathing | CSS Keyframes | `@keyframes breathe { 0%, 100% { scale: 1 } 50% { scale: 1.06 } }`, 2.6s infinite |
| Hero | Pin entrance | Framer Motion | Staggered pop-in with delay based on index |
| Hero | FAB hover | CSS | `hover:translate-y-[-2px]`, transition 200ms |
| How It Works | Card stagger | Framer Motion | `whileInView`, `staggerChildren: 0.12`, `y: 22 → 0` |
| How It Works | Card hover | CSS | `hover:translate-y-[-4px]`, shadow increase |
| For Hosts | Text slide | Framer Motion | `x: -18 → 0`, opacity fade |
| For Hosts | Card slide | Framer Motion | `x: 18 → 0`, opacity fade |
| Trust | Feature stagger | Framer Motion | `staggerChildren: 0.08` |
| Trust | Review cards | Framer Motion | `staggerChildren: 0.14`, `y: 20 → 0` |
| Pricing | Legend pop-in | Framer Motion | `scale: 0.6 → 1`, bouncy easing |
| CTA | Panel scale | Framer Motion | `scale: 0.98 → 1`, fade |

### Easing Functions

```javascript
// Custom easings for Framer Motion
const smoothEase = [0.22, 0.61, 0.36, 1];      // Primary
const bouncyEase = [0.34, 1.56, 0.64, 1];      // Micro pop-ins
```

---

## 5. Project File Structure

```
app/
├── sections/
│   ├── HeroSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── ForHostsSection.tsx
│   ├── TrustSection.tsx
│   ├── PricingSection.tsx
│   └── CTASection.tsx
├── components/
│   ├── layout/
│   │   ├── Section.tsx
│   │   ├── Container.tsx
│   │   └── Footer.tsx
│   ├── hero/
│   │   ├── SearchCard.tsx
│   │   ├── MapBackground.tsx
│   │   ├── BubblePin.tsx
│   │   └── FloatingActionButton.tsx
│   ├── features/
│   │   ├── StepCard.tsx
│   │   ├── FeatureItem.tsx
│   │   ├── ReviewCard.tsx
│   │   ├── EarningsPreview.tsx
│   │   ├── AvailabilityLegend.tsx
│   │   └── PricingComparison.tsx
│   └── ui/           # shadcn components
├── hooks/
│   └── useReducedMotion.ts
├── lib/
│   └── utils.ts
├── page.tsx
├── layout.tsx
└── globals.css
components/
└── ui/               # shadcn/ui components
public/
├── images/
│   ├── hero-map.jpg
│   ├── host-driveway.jpg
│   └── trust-lot.jpg
└── fonts/            # if self-hosting
```

---

## 6. Package Installation List

```bash
# Initialize project
npx shadcn@latest init --yes --template next --base-color slate

# Install shadcn components
npx shadcn add button input card switch badge separator

# Install animation library
npm install framer-motion

# Install icons
npm install lucide-react

# Install utilities
npm install clsx tailwind-merge
```

---

## 7. Key Implementation Notes

### Map Background
- Use a static image (not interactive map library)
- Overlay bubble pins as absolutely positioned elements
- Pins use percentage-based positioning for responsiveness

### Search Card
- Floating card with high z-index
- Toggle switch changes mode state
- Input field with focus states

### Performance
- All animations use transform/opacity only
- Add `will-change: transform` to animated elements
- Lazy load sections below fold

### Accessibility
- Respect `prefers-reduced-motion`
- Ensure color contrast meets WCAG 2.1 AA
- All interactive elements keyboard accessible
- Proper heading hierarchy

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---