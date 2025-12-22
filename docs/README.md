# Wenqing(Emily) Li - Professional Portfolio Website

## Documentation Index

Welcome to the comprehensive documentation for Wenqing(Emily) Li's professional portfolio website. This documentation covers all aspects of the website including pages, components, data structures, API endpoints, and styling.

## Project Overview

This is a modern, responsive personal website built for a mental health therapist, showcasing professional experience, research, and services.

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16 | React framework with App Router |
| React | 19 | UI library |
| TypeScript | 5.x | Type-safe JavaScript |
| Tailwind CSS | 4 | Utility-first CSS framework |
| Resend | - | Email API for contact form |

### Key Features

- **Responsive Design**: Mobile-first approach, optimized for all devices
- **Dark Mode**: Full dark mode support with therapeutic color palette
- **Bilingual Ready**: Content structure supports English and Mandarin
- **SEO Optimized**: Comprehensive metadata and OpenGraph tags
- **Accessible**: ARIA labels, keyboard navigation, semantic HTML
- **Contact Form**: Functional email integration via Resend API

## Site Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        WEBSITE STRUCTURE                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                     LAYOUT (layout.tsx)                   │   │
│  │  - Geist fonts                                            │   │
│  │  - Global metadata                                        │   │
│  │  - HTML structure                                         │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                   │
│       ┌──────────────────────┼──────────────────────┐           │
│       │                      │                      │           │
│       ▼                      ▼                      ▼           │
│  ┌─────────┐          ┌─────────────┐        ┌──────────┐       │
│  │  HOME   │          │ EXPERIENCE  │        │ RESEARCH │       │
│  │   (/)   │          │(/experience)│        │(/research)│       │
│  └────┬────┘          └──────┬──────┘        └────┬─────┘       │
│       │                      │                    │              │
│       ▼                      ▼                    ▼              │
│  ┌─────────┐          ┌─────────────┐        ┌──────────┐       │
│  │ - Hero  │          │- Navigation │        │-Navigation│       │
│  │ - About │          │- Certs      │        │-Publications     │
│  │-Services│          │- Experience │        │- Footer  │       │
│  │-Contact │          │- Education  │        └──────────┘       │
│  │ - Footer│          │- Footer     │                           │
│  └─────────┘          └─────────────┘                           │
│                                                                  │
│  ┌──────────┐                                                   │
│  │   BLOG   │  (Coming Soon - placeholder page)                 │
│  │  (/blog) │                                                   │
│  └──────────┘                                                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Component Dependency Graph

```
┌─────────────────────────────────────────────────────────────────┐
│                      COMPONENT HIERARCHY                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Shared Components (used across pages):                         │
│  ├── Navigation ─────────── DarkModeToggle                      │
│  └── Footer                                                     │
│                                                                  │
│  Home Page Components:                                          │
│  ├── Hero ───────────────── DarkModeToggle                      │
│  ├── About                                                      │
│  ├── Services                                                   │
│  └── Contact                                                    │
│                                                                  │
│  Experience Page Components:                                    │
│  ├── Experience                                                 │
│  └── Education                                                  │
│                                                                  │
│  Research Page Components:                                      │
│  └── Publications                                               │
│                                                                  │
│  Utility Components:                                            │
│  └── AnimatedSection (scroll animation wrapper)                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         DATA FLOW                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────┐                                           │
│  │  data/profile.ts │ ◄── Single source of truth                │
│  │                  │     for all profile data                  │
│  └────────┬─────────┘                                           │
│           │                                                      │
│           │ Imported by:                                        │
│           ├──────────► Hero.tsx                                 │
│           ├──────────► About.tsx                                │
│           ├──────────► Services.tsx                             │
│           ├──────────► Experience.tsx                           │
│           ├──────────► Education.tsx                            │
│           ├──────────► Publications.tsx                         │
│           ├──────────► Contact.tsx                              │
│           └──────────► Footer.tsx                               │
│                                                                  │
│  ┌──────────────────┐                                           │
│  │  types/index.ts  │ ◄── TypeScript interfaces                 │
│  │                  │     defining data shapes                  │
│  └──────────────────┘                                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Project Structure

```
wenqing_website/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── blog/
│   │   └── page.tsx              # Blog page (coming soon)
│   ├── experience/
│   │   └── page.tsx              # Experience & Education page
│   ├── research/
│   │   └── page.tsx              # Research & Publications page
│   ├── globals.css               # Global styles & CSS variables
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Home page
├── components/                   # React components
│   ├── About.tsx
│   ├── AnimatedSection.tsx
│   ├── Contact.tsx
│   ├── DarkModeToggle.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Publications.tsx
│   └── Services.tsx
├── data/
│   └── profile.ts                # Profile data (single source of truth)
├── docs/                         # Documentation (you are here)
│   ├── README.md
│   ├── PAGES.md
│   ├── COMPONENTS.md
│   ├── DATA_STRUCTURE.md
│   ├── API.md
│   └── STYLING.md
├── public/                       # Static assets
├── types/
│   └── index.ts                  # TypeScript type definitions
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Documentation Files

| File | Description |
|------|-------------|
| [PAGES.md](./PAGES.md) | Detailed documentation of all 4 routes |
| [COMPONENTS.md](./COMPONENTS.md) | Reference guide for all 11 components |
| [DATA_STRUCTURE.md](./DATA_STRUCTURE.md) | Profile data and TypeScript types |
| [API.md](./API.md) | Contact form API endpoint documentation |
| [STYLING.md](./STYLING.md) | CSS variables, theming, and styling guide |

## Quick Start

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd wenqing_website

# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Common Tasks

### Update Profile Information

Edit `data/profile.ts` to update:
- Personal information (name, credentials, tagline)
- Work experience
- Education
- Publications
- Services offered
- Skills and modalities

See [DATA_STRUCTURE.md](./DATA_STRUCTURE.md) for detailed field descriptions.

### Modify Styling

- Update CSS variables in `app/globals.css` for colors
- Modify `tailwind.config.ts` for Tailwind customizations
- See [STYLING.md](./STYLING.md) for the complete styling guide

### Add New Pages

1. Create a new folder in `app/` with a `page.tsx` file
2. Use shared components (Navigation, Footer)
3. Update navigation links in `components/Navigation.tsx`

### Enable Contact Form

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add `RESEND_API_KEY` to `.env.local`
4. See [API.md](./API.md) for full setup instructions

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

For production deployment, set the following environment variables:

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes (for contact form) | Resend API key for email |

## License

© 2024 Wenqing(Emily) Li. All rights reserved.

