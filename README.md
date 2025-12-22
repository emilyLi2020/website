# Wenqing(Emily) Li - Professional Portfolio & Therapy Practice Website

A modern, responsive personal website built with Next.js 16, React 19, and Tailwind CSS 4, showcasing Wenqing(Emily) Li's professional experience as a mental health therapist, researcher, and UC Berkeley MSW candidate.

## Features

### 🎨 Design
- **Calm, Therapeutic Aesthetic**: Soft blues, greens, and warm neutrals for a welcoming feel
- **Dark Mode**: Fully functional dark mode with therapeutic color palette
- **Responsive Design**: Mobile-first approach, optimized for all devices
- **Smooth Animations**: Intersection Observer-based scroll animations
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML

### 📄 Sections
1. **Hero Section**: Professional introduction with CTA buttons
2. **About**: Personal philosophy, specializations, and languages
3. **Services**: Therapeutic modalities and specialized populations
4. **Experience**: Interactive timeline with expandable details
5. **Education**: Academic credentials and certifications
6. **Publications**: Research work and focus areas
7. **Contact**: Form with validation and contact information
8. **Blog**: Prepared structure for future content

### 🛠️ Technical Stack
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites
- Node.js 20+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Run development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Project Structure

```
mywebsite/
├── app/
│   ├── blog/
│   │   └── page.tsx          # Blog listing page
│   ├── globals.css            # Global styles & CSS variables
│   ├── layout.tsx             # Root layout with metadata
│   └── page.tsx               # Home page
├── components/
│   ├── About.tsx              # About section
│   ├── AnimatedSection.tsx    # Scroll animation wrapper
│   ├── Contact.tsx            # Contact form & info
│   ├── DarkModeToggle.tsx     # Theme switcher
│   ├── Education.tsx          # Education & credentials
│   ├── Experience.tsx         # Work experience timeline
│   ├── Footer.tsx             # Site footer
│   ├── Hero.tsx               # Hero section
│   ├── Navigation.tsx         # Main navigation
│   ├── Publications.tsx       # Research & publications
│   └── Services.tsx           # Services & modalities
├── data/
│   └── profile.ts             # All profile data
├── types/
│   └── index.ts               # TypeScript type definitions
└── public/                    # Static assets
```

## Customization

### Updating Profile Information
Edit `data/profile.ts` to update:
- Personal information
- Work experience
- Education
- Publications
- Services
- Skills

### Modifying Colors
Update CSS variables in `app/globals.css`:
- Light mode colors in `:root`
- Dark mode colors in `@media (prefers-color-scheme: dark)`

### Adding Blog Posts
The blog structure is ready. To add posts:
1. Create a blog post data structure
2. Add posts to `app/blog/page.tsx`
3. Optionally create individual post pages in `app/blog/[slug]/page.tsx`

## Key Features Explained

### Dark Mode
- Persists user preference in localStorage
- Smooth transitions between themes
- Therapeutic color palette for both modes

### Contact Form
- Client-side validation
- Ready for backend integration
- Success/error state handling

### Smooth Scrolling
- Automatic smooth scroll to sections
- Mobile-friendly navigation
- Sticky header with scroll detection

### SEO Optimization
- Comprehensive metadata
- OpenGraph tags
- Semantic HTML structure
- Descriptive alt texts

## Future Enhancements

- [ ] Blog post functionality with MDX
- [ ] Contact form backend (API route)
- [ ] Testimonials section
- [ ] Photo gallery
- [ ] Newsletter subscription
- [ ] Analytics integration

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## License

© 2024 Wenqing(Emily) Li. All rights reserved.

## Support

For questions or issues, please contact through the website's contact form.
