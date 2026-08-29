# FitWash Laundry Bali — Landing Page

Landing page for FitWash Laundry Bali, a laundry pickup & delivery service operating in Denpasar and covering Kuta, Seminyak, Sanur, Kerobokan, and other areas across Bali.

## Tech Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Output is generated in `dist/`.

## Project Structure

- `src/components/` — page sections (Navbar, Hero, Pricing, WhyChooseUs, HowItWorks, LocationSection, Testimonials, Contact, Footer, WhatsAppButton)
- `src/lib/` — shared constants (contact info, address/map links)
- `public/` — static assets (logo, photos, favicons)

## Known Placeholders

A few things still need real data before going live on the production domain:

- `https://your-domain.com` in `index.html` (Open Graph tags & JSON-LD) — replace once the final domain is set
- Operating hours in the Contact section
- Instagram handle in Contact & Footer
- Testimonials — currently placeholder reviews, replace with real customer testimonials
