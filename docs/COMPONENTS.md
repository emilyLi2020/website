# Components Documentation

This document provides detailed reference for all React components in the website, now built with shadcn/ui components.

## Table of Contents

- [shadcn/ui Components](#shadcnui-components)
- [Shared Components](#shared-components)
  - [Navigation](#navigation)
  - [Footer](#footer)
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

## shadcn/ui Components

The website uses the following shadcn/ui components located in `components/ui/`:

| Component | File | Usage |
|-----------|------|-------|
| Alert | `alert.tsx` | Success/error messages in Contact form |
| Avatar | `avatar.tsx` | Profile image in Hero section |
| Badge | `badge.tsx` | Tags, labels, and status indicators |
| Button | `button.tsx` | CTA buttons, form submissions, interactive triggers |
| Card | `card.tsx` | Content containers across all sections |
| Collapsible | `collapsible.tsx` | Expandable experience details |
| Input | `input.tsx` | Form text inputs |
| Label | `label.tsx` | Form field labels |
| Separator | `separator.tsx` | Visual dividers (Footer) |
| Sheet | `sheet.tsx` | Mobile navigation drawer |
| Textarea | `textarea.tsx` | Multi-line message input |

### Theming

All shadcn components inherit from the CSS variables defined in `app/globals.css`. The therapeutic color palette is preserved through custom className overrides using Tailwind's arbitrary value syntax (e.g., `bg-[var(--soft-teal-400)]`).

---

## Shared Components

### DarkModeToggle

**File**: `components/DarkModeToggle.tsx`

Toggle button for switching between light and dark modes.

#### shadcn Components Used

- `Button` - Ghost variant toggle button

#### Features

- Sun/Moon icons from Lucide for visual indication
- Persists user preference to `localStorage`
- Respects system preference on first visit
- SSR-safe with hydration mismatch prevention
- Applies `dark` class to `<html>` element

#### State

```typescript
const [isDark, setIsDark] = useState(false);    // Current theme state
const [mounted, setMounted] = useState(false);  // Hydration guard
```

#### Usage

```tsx
import DarkModeToggle from '@/components/DarkModeToggle';

<DarkModeToggle />
```

---

### Navigation

**File**: `components/Navigation.tsx`

Fixed navigation bar with responsive design, scroll detection, and mobile sheet drawer.

#### shadcn Components Used

- `Sheet`, `SheetContent`, `SheetHeader`, `SheetTitle`, `SheetTrigger` - Mobile menu
- `Button` - Hamburger menu trigger
- `DarkModeToggle` - Theme toggle (desktop and mobile)

#### Features

- Fixed positioning with backdrop blur on scroll
- Desktop horizontal navigation
- Mobile slide-out sheet drawer (from right)
- Smooth scroll for hash links
- Active scroll state detection
- Dark mode toggle integrated in both desktop and mobile views

#### State

```typescript
const [isScrolled, setIsScrolled] = useState(false);      // Scroll detection
const [isOpen, setIsOpen] = useState(false);              // Sheet open state
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

<Navigation />
```

---

### Footer

**File**: `components/Footer.tsx`

Site footer with profile info, quick links, and social connections.

#### shadcn Components Used

- `Separator` - Horizontal divider before copyright

#### Features

- Three-column grid layout
- Dynamic copyright year
- LinkedIn integration with Lucide icon
- Quick navigation links

#### Usage

```tsx
import Footer from '@/components/Footer';

<Footer />
```

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

---

## Home Page Components

### Hero

**File**: `components/Hero.tsx`

Landing section with professional introduction and call-to-action.

#### shadcn Components Used

- `Avatar`, `AvatarFallback` - Profile image placeholder
- `Button` - CTA buttons (View Services, Contact Me)
- `Badge` - Key highlights (Kaiser, Berkeley, Researcher)

#### Features

- Profile avatar with gradient background
- Animated gradient background (preserved)
- Key highlights as badges
- CTA buttons with smooth scroll
- Bounce animation on scroll indicator (Lucide ArrowDown icon)

#### Usage

```tsx
import Hero from '@/components/Hero';

<Hero />
```

---

### About

**File**: `components/About.tsx`

Personal introduction and professional philosophy section.

#### shadcn Components Used

- `Card`, `CardContent` - Specialization items and blockquote container
- `Badge` - Language tags

#### Features

- Two-column layout (intro/specializations)
- Language badges
- Specialization cards with checkmark icons (Lucide)
- Blockquote with gradient background

#### Usage

```tsx
import About from '@/components/About';

<About />
```

---

### Services

**File**: `components/Services.tsx`

Services offered and therapeutic modalities section.

#### shadcn Components Used

- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent` - Service cards
- `Badge` - Modality tags

#### Features

- 2-column service cards grid
- Lucide icons for service types (User, Users, Languages, Heart, etc.)
- Modality badges on each card
- Separate therapeutic modalities section with checkmark items

#### Icon Mapping

```typescript
const iconMap: { [key: string]: JSX.Element } = {
  person: <User className="w-8 h-8" />,
  people: <Users className="w-8 h-8" />,
  language: <Languages className="w-8 h-8" />,
  heart: <Heart className="w-8 h-8" />,
  clipboard: <ClipboardList className="w-8 h-8" />,
  alert: <AlertTriangle className="w-8 h-8" />,
};
```

#### Usage

```tsx
import Services from '@/components/Services';

<Services />
```

---

### Contact

**File**: `components/Contact.tsx`

Contact form and information section.

#### shadcn Components Used

- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent` - Info and form containers
- `Input` - Name, email, subject fields
- `Textarea` - Message field
- `Label` - Form field labels
- `Button` - Submit button
- `Alert`, `AlertDescription` - Success/error messages

#### Features

- Two-column layout (info + form)
- Form validation with error messages
- API integration with loading states
- Success/error feedback with Alert component
- Lucide icons (MapPin, Linkedin, Calendar, CheckCircle, AlertCircle)

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

#### Usage

```tsx
import Contact from '@/components/Contact';

<Contact />
```

---

## Experience Page Components

### Experience

**File**: `components/Experience.tsx`

Interactive timeline of professional experience.

#### shadcn Components Used

- `Card`, `CardContent` - Experience item containers
- `Badge` - Period, type, and skill tags
- `Button` - Show details trigger
- `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent` - Expandable descriptions

#### Features

- Alternating timeline layout
- Expandable description with Collapsible
- Visual timeline with dots and line
- Skill badges for each position
- Lucide ChevronDown icon for expand indicator

#### State

```typescript
const [expandedId, setExpandedId] = useState<string | null>(null);
```

#### Usage

```tsx
import Experience from '@/components/Experience';

<Experience />
```

---

### Education

**File**: `components/Education.tsx`

Education credentials and academic achievements.

#### shadcn Components Used

- `Card`, `CardHeader`, `CardContent` - Education card containers
- `Badge` - Period badge

#### Features

- 2-column card layout
- Gradient header with degree info (preserved)
- Honors and awards section with Lucide Star icon
- Activities and courses
- Lucide GraduationCap icon

#### Usage

```tsx
import Education from '@/components/Education';

<Education />
```

---

## Research Page Components

### Publications

**File**: `components/Publications.tsx`

Research publications and focus areas.

#### shadcn Components Used

- `Card`, `CardHeader`, `CardTitle`, `CardContent` - Publication and focus area cards
- `Badge` - Publication type badges (Published/Ongoing)

#### Features

- Publication cards with type badges
- Published vs. Ongoing visual distinction
- Research focus areas grid
- Lucide icons (FileText, FlaskConical, Lightbulb, Users, UserCircle)

#### Usage

```tsx
import Publications from '@/components/Publications';

<Publications />
```

---

## Component Import Aliases

All components use the `@/` path alias for imports:

```typescript
import Component from '@/components/Component';
import { profileData } from '@/data/profile';
import type { TypeName } from '@/types';

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// ... etc.
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
| DarkModeToggle | Client | localStorage, DOM manipulation |
| Navigation | Client | Scroll detection, sheet state |
| Hero | Client | Scroll function |
| About | Client | Uses profileData dynamically |
| Services | Client | Uses profileData dynamically |
| Contact | Client | Form state, API calls |
| Experience | Client | Collapsible state |
| Education | Client | Uses profileData dynamically |
| Publications | Client | Uses profileData dynamically |
| Footer | Client | Uses profileData dynamically |
| AnimatedSection | Client | Intersection Observer |

All components are marked with `'use client'` directive.

---

## Icon Library

The website uses **Lucide React** for all icons (configured in `components.json` as the shadcn icon library). Common icons used:

- `Menu` - Hamburger menu
- `Sun`, `Moon` - Dark mode toggle icons
- `ArrowDown` - Scroll indicator
- `CheckCircle` - Checkmarks, success states
- `AlertCircle` - Error states
- `ChevronDown` - Expand/collapse indicator
- `MapPin`, `Linkedin`, `Calendar` - Contact info
- `User`, `Users`, `Heart`, `Languages`, `ClipboardList`, `AlertTriangle` - Service icons
- `GraduationCap`, `Star` - Education icons
- `FileText`, `FlaskConical`, `Lightbulb`, `UserCircle` - Publication icons
