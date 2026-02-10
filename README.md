# Urmi Financial Services Pvt Ltd - Website

A modern, production-ready multi-page React website for Urmi Financial Services Pvt Ltd, an AMFI Registered Mutual Fund Distributor.

## 🚀 Features

- **Modern Design**: Clean, professional UI with premium aesthetics
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **Smooth Animations**: Framer Motion for delightful user interactions
- **Comprehensive Services**: 12+ financial services with detailed pages
- **Financial Tools**: Calculators and resources for investors
- **Blog System**: Content management for financial insights
- **Contact Forms**: Easy communication with validation

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Framer Motion** - Animations

## 📁 Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── TopInfoBar.tsx
│   ├── HeroSection.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialSlider.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── ServiceDetail.tsx
│   ├── Tools.tsx
│   ├── Blog.tsx
│   ├── BlogDetail.tsx
│   └── Contact.tsx
├── data/            # Content and data
│   ├── services.ts
│   └── content.ts
├── App.tsx          # Main app with routing
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Deep navy blue (#1e3a8a) - From logo text
- **Accent Red**: Bright red (#ef4444) - From top petal
- **Accent Green**: Green (#10b981) - From right petal
- **Neutrals**: White, off-white, light grey backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Hierarchy**: Clear H1-H6 structure with consistent sizing

### Components
- **Buttons**: Rounded, with hover animations
- **Cards**: Soft shadows with hover lift effect
- **Forms**: Clean inputs with focus states

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📄 Pages

### Main Pages
- **Home** (`/`) - Hero, services, about, testimonials, blog preview
- **About Us** (`/about`) - Company info, mission, vision, approach
- **Services** (`/services/:serviceId`) - 12 detailed service pages
- **Tools** (`/tools/calculators`) - Financial calculators and tools
- **Blog** (`/blog`) - Blog listing
- **Blog Detail** (`/blog/:blogId`) - Individual blog posts
- **Contact** (`/contact`) - Contact form and office locations

### Services Covered
1. Mutual Funds
2. AIF / PMS
3. Model Portfolio
4. Equity (BSE, NSE)
5. Demat Account
6. Insurance
7. Fixed Deposit / Bonds
8. Will Making
9. National Pension Scheme (NPS)
10. P2P Lending
11. Loan Against Securities
12. Saving / Current Account

## 🔧 Customization

### Adding New Services
Edit `src/data/services.ts` and add your service object with:
- id, title, description
- benefits, whoShouldConsider
- FAQs

### Adding Blog Posts
Edit `src/data/content.ts` and add to the `blogPosts` array.

### Updating Contact Information
Edit contact details in:
- `src/components/TopInfoBar.tsx`
- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Lazy loading for images
- Code splitting with React Router
- Optimized bundle size with Vite
- Smooth animations with Framer Motion

## 🔒 Compliance

- AMFI registered mutual fund distributor disclaimers
- SEBI-compliant language
- Risk disclaimers on all investment-related content
- Commission disclosure statements

## 📞 Support

For any queries or support:
- Email: care@urmifinserve.com
- Phone: +91 93289 33841

## 📝 License

© 2024 Urmi Financial Services Pvt Ltd. All rights reserved.

---

**Disclaimer**: Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
