# Components Documentation

This document provides detailed reference for all React components in the website.

## Table of Contents

- [Shared Components](#shared-components)
  - [Navigation](#navigation)
  - [Footer](#footer)
  - [DarkModeToggle](#darkmodetoggle)
  - [AnimatedSection](#animatedsection)
- [Home Page Components](#home-page-components)
  - [Hero](#hero)
  - [About](#about)
  - [Services](#services)
  - [Contact](#contact)
- [Experience Page Components](#experience-page-components)
  - [Experience](#experience)
  - [Education](#education)
- [Research Page Components](#research-page-components)
  - [Publications](#publications)

---

## Shared Components

### Navigation

**File**: `components/Navigation.tsx`

Fixed navigation bar with responsive design and scroll detection.

#### Features

- Fixed positioning with backdrop blur on scroll
- Desktop horizontal navigation
- Mobile hamburger menu
- Smooth scroll for hash links
- Active scroll state detection

#### State

```typescript
const [isScrolled, setIsScrolled] = useState(false);      // Scroll detection
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);  // Mobile menu
```

#### Navigation Links

```typescript
const navLinks = [
  { href: '/#about', label: 'About', isHash: true },
  { href: '/#services', label: 'Services', isHash: true },
  { href: '/experience', label: 'Experience & Education', isHash: false },
  { href: '/research', label: 'Research', isHash: false },
  { href: '/#contact', label: 'Contact', isHash: true },
];
```

#### Usage

```tsx
import Navigation from '@/components/Navigation';

// In page component
<Navigation />
```

#### Styling

- Transparent when at top of page
- White/dark background with blur when scrolled
- Responsive breakpoint at `md` (768px)

---

### Footer

**File**: `components/Footer.tsx`

Site footer with profile info, quick links, and social connections.

#### Features

- Three-column grid layout
- Dynamic copyright year
- LinkedIn integration
- Quick navigation links

#### Data Dependencies

- `profileData.name`
- `profileData.location`
- `profileData.linkedin`

#### Usage

```tsx
import Footer from '@/components/Footer';

// In page component
<Footer />
```

#### Sections

1. **About Column**: Name and brief description
2. **Quick Links Column**: Navigation links
3. **Connect Column**: LinkedIn link and location

---

### DarkModeToggle

**File**: `components/DarkModeToggle.tsx`

Theme toggle button for switching between light and dark mode.

#### Features

- Persists preference in localStorage
- System preference detection
- Smooth transition between themes
- Sun/Moon icons

#### State

```typescript
const [isDark, setIsDark] = useState(false);
```

#### Usage

```tsx
import DarkModeToggle from './DarkModeToggle';

// Typically placed in Hero or Navigation
<DarkModeToggle />
```

#### Implementation Notes

- Adds/removes `dark` class on `document.documentElement`
- Stores preference as `'dark-mode'` in localStorage
- Checks `prefers-color-scheme` on initial load

---

### AnimatedSection

**File**: `components/AnimatedSection.tsx`

Wrapper component for scroll-triggered fade-in animations.

#### Features

- Intersection Observer-based detection
- Configurable animation delay
- Fade-in from bottom animation

#### Props

```typescript
interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;  // Animation delay in milliseconds
}
```

#### Usage

```tsx
import AnimatedSection from '@/components/AnimatedSection';

<AnimatedSection delay={200}>
  <div>Content that animates on scroll</div>
</AnimatedSection>
```

---

## Home Page Components

### Hero

**File**: `components/Hero.tsx`

Landing section with professional introduction and call-to-action.

#### Features

- Profile image placeholder (initials avatar)
- Animated gradient background
- Key highlights pills
- CTA buttons with smooth scroll
- Bounce animation on scroll indicator

#### Data Dependencies

- `profileData.name`
- `profileData.credentials`
- `profileData.tagline`

#### Child Components

- `DarkModeToggle` (fixed position)

#### Usage

```tsx
import Hero from '@/components/Hero';

<Hero />
```

#### Sections

1. Profile image (gradient circle with initials)
2. Name and credentials heading
3. Tagline paragraph
4. Highlight pills (Kaiser, Berkeley, Researcher)
5. CTA buttons (View Services, Contact Me)
6. Scroll indicator

---

### About

**File**: `components/About.tsx`

Personal introduction and professional philosophy section.

#### Features

- Two-column layout (intro/specializations)
- Language tags
- Specialization checklist
- Blockquote with professional statement

#### Data Dependencies

- `profileData.about.intro`
- `profileData.about.philosophy`
- `profileData.about.languages`
- `profileData.about.specializations`

#### Usage

```tsx
import About from '@/components/About';

<About />
```

#### Layout

| Left Column | Right Column |
|-------------|--------------|
| Introduction paragraph | Areas of Specialization |
| Philosophy paragraph | (8 specialization items) |
| Languages section | |

---

### Services

**File**: `components/Services.tsx`

Services offered and therapeutic modalities section.

#### Features

- 2-column service cards grid
- Icon mapping for service types
- Modality tags on each card
- Separate therapeutic modalities section

#### Data Dependencies

- `profileData.services` (6 services)
- `profileData.skills` (filtered for "Therapeutic Modalities")

#### Icon Mapping

```typescript
const iconMap: { [key: string]: JSX.Element } = {
  person: /* SVG */,
  people: /* SVG */,
  language: /* SVG */,
  heart: /* SVG */,
  clipboard: /* SVG */,
  alert: /* SVG */,
};
```

#### Usage

```tsx
import Services from '@/components/Services';

<Services />
```

#### Service Cards

Each card displays:
- Icon (gradient background)
- Title
- Description
- Modalities tags

---

### Contact

**File**: `components/Contact.tsx`

Contact form and information section.

#### Features

- Two-column layout (info + form)
- Form validation with error messages
- API integration with loading states
- Success/error feedback

#### State

```typescript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
});
const [errors, setErrors] = useState<{ [key: string]: string }>({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
```

#### Data Dependencies

- `profileData.location`
- `profileData.linkedin`

#### Validation Rules

| Field | Rules |
|-------|-------|
| name | Required, non-empty |
| email | Required, valid email format |
| subject | Required, non-empty |
| message | Required, minimum 10 characters |

#### Usage

```tsx
import Contact from '@/components/Contact';

<Contact />
```

#### Form Submission

1. Validates all fields
2. POSTs to `/api/contact`
3. Shows success/error message
4. Resets form on success

---

## Experience Page Components

### Experience

**File**: `components/Experience.tsx`

Interactive timeline of professional experience.

#### Features

- Alternating timeline layout
- Expandable description cards
- Visual timeline with dots and line
- Skill tags for each position

#### State

```typescript
const [expandedId, setExpandedId] = useState<string | null>(null);
```

#### Data Dependencies

- `profileData.experiences` (array of Experience objects)

#### Experience Item Structure

```typescript
interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}
```

#### Usage

```tsx
import Experience from '@/components/Experience';

<Experience />
```

#### Layout

- Desktop: Alternating left/right with center timeline
- Mobile: Single column with full-width cards

---

### Education

**File**: `components/Education.tsx`

Education credentials and academic achievements.

#### Features

- 2-column card layout
- Gradient header with degree info
- Honors and awards section
- Activities and courses

#### Data Dependencies

- `profileData.education` (array of Education objects)

#### Education Item Structure

```typescript
interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  honors?: string[];
  activities?: string;
  courses?: string;
}
```

#### Usage

```tsx
import Education from '@/components/Education';

<Education />
```

#### Card Sections

1. **Header** (gradient): Degree, field, institution, location
2. **Body**: Period, GPA, honors, activities, courses

---

## Research Page Components

### Publications

**File**: `components/Publications.tsx`

Research publications and focus areas.

#### Features

- Publication cards with type badges
- Published vs. Ongoing visual distinction
- Research focus areas grid

#### Data Dependencies

- `profileData.publications` (array of Publication objects)

#### Publication Item Structure

```typescript
interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  presented?: string;
  type: 'published' | 'ongoing';
}
```

#### Usage

```tsx
import Publications from '@/components/Publications';

<Publications />
```

#### Sections

1. **Publications List**: Cards for each publication
2. **Research Focus Areas**: 4 focus area cards
   - Neuroimaging & Biomarkers
   - Precision Medicine
   - Cultural Adaptation & Accessibility
   - Patient-Centered Approach

---

## Component Import Aliases

All components use the `@/` path alias for imports:

```typescript
import Component from '@/components/Component';
import { profileData } from '@/data/profile';
import type { TypeName } from '@/types';
```

This is configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## Client vs Server Components

| Component | Type | Reason |
|-----------|------|--------|
| Navigation | Client | Scroll detection, state |
| Hero | Client | Scroll function, DarkModeToggle |
| About | Client | Uses profileData dynamically |
| Services | Client | Uses profileData dynamically |
| Contact | Client | Form state, API calls |
| Experience | Client | Expandable state |
| Education | Client | Uses profileData dynamically |
| Publications | Client | Uses profileData dynamically |
| Footer | Client | Uses profileData dynamically |
| DarkModeToggle | Client | Theme state, localStorage |
| AnimatedSection | Client | Intersection Observer |

All components are marked with `'use client'` directive.

