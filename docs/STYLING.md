# Styling Documentation

This document covers the styling system used in the website, including CSS variables, theming, and Tailwind CSS configuration.

## Table of Contents

- [Overview](#overview)
- [CSS Variables](#css-variables)
- [Color Palette](#color-palette)
- [Dark Mode](#dark-mode)
- [Typography](#typography)
- [Common Patterns](#common-patterns)
- [Component Styling](#component-styling)
- [Customization Guide](#customization-guide)

---

## Overview

The website uses a combination of:

- **Tailwind CSS 4**: Utility-first CSS framework
- **CSS Custom Properties**: For theming and color management
- **Geist Fonts**: Sans-serif and monospace fonts from Vercel

**Key Files**:
- `app/globals.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration
- `postcss.config.mjs` - PostCSS configuration

---

## CSS Variables

**File**: `app/globals.css`

### Base Variables

```css
:root {
  /* Foreground and Background */
  --background: #ffffff;
  --foreground: #171717;
  
  /* Primary Colors */
  --primary: #4A90A4;           /* Soft teal - main accent */
  --primary-hover: #3A7A8E;     /* Darker teal for hover states */
  
  /* Neutral Colors */
  --muted: #f5f5f5;             /* Light gray for backgrounds */
  --border: #e5e5e5;            /* Border color */
}
```

### Therapeutic Color Palette

The color palette was designed to evoke calm, trust, and professionalism:

```css
:root {
  /* Soft Teal - Primary brand color */
  --soft-teal-50: #EFF8F8;
  --soft-teal-100: #D0ECEC;
  --soft-teal-200: #A8DCDC;
  --soft-teal-300: #7AC9C9;
  --soft-teal-400: #4A90A4;
  --soft-teal-500: #4A90A4;
  --soft-teal-600: #3A7A8E;
  --soft-teal-700: #2C5F6E;
  
  /* Calm Blue - Secondary accent */
  --calm-blue-50: #F0F7FA;
  --calm-blue-100: #D6EAF2;
  --calm-blue-200: #ADD5E5;
  --calm-blue-300: #84C0D8;
  --calm-blue-400: #5BABCB;
  --calm-blue-500: #4A90A4;
  --calm-blue-600: #3B7383;
  --calm-blue-700: #2C5662;
  
  /* Sage Green - Natural, grounding */
  --sage-green-50: #F4F8F4;
  --sage-green-100: #E2EDE2;
  --sage-green-200: #C5DBC5;
  --sage-green-300: #A8C9A8;
  --sage-green-400: #8BB78B;
  --sage-green-500: #6EA56E;
  --sage-green-600: #588458;
  --sage-green-700: #426342;
  
  /* Warm Neutral - Cozy, inviting */
  --warm-neutral-50: #FAF9F7;
  --warm-neutral-100: #F5F3F0;
  --warm-neutral-200: #E8E4DD;
  --warm-neutral-900: #2C2925;
  
  /* Accent Colors */
  --accent-rose: #E8A4A4;       /* Soft rose for warmth */
  --accent-amber: #E8C4A4;      /* Amber for energy */
}
```

---

## Color Palette

### Visual Reference

| Color | Variable | Hex | Usage |
|-------|----------|-----|-------|
| Soft Teal | `--soft-teal-400` | #4A90A4 | Primary accent, buttons, links |
| Calm Blue | `--calm-blue-400` | #5BABCB | Gradients, secondary accent |
| Sage Green | `--sage-green-400` | #8BB78B | Success states, nature elements |
| Warm Neutral | `--warm-neutral-100` | #F5F3F0 | Backgrounds, cards |
| Rose | `--accent-rose` | #E8A4A4 | Warm accents |
| Amber | `--accent-amber` | #E8C4A4 | Energy accents |

### Usage Guidelines

1. **Primary Actions**: Use `--primary` (#4A90A4)
2. **Backgrounds**: Use `--muted` or light variants (50, 100)
3. **Gradients**: Combine soft-teal with calm-blue
4. **Text**: Use `--foreground` with opacity modifiers
5. **Success**: Use sage-green variants
6. **Borders**: Use `--border` or neutral-200

---

## Dark Mode

Dark mode is implemented using the `dark` class on the HTML element.

### How It Works

1. **DarkModeToggle** component adds/removes `dark` class
2. CSS uses `.dark` selector for dark mode styles
3. Preference is stored in `localStorage`

### Dark Mode Variables

```css
.dark {
  --background: #0f1419;        /* Deep dark blue-gray */
  --foreground: #E8E4DD;        /* Warm light text */
  --muted: #1a1f26;             /* Slightly lighter background */
  --border: #2a3038;            /* Dark border */
}
```

### Dark Mode Classes

Tailwind provides dark mode utilities:

```html
<!-- Light: white background, Dark: dark background -->
<div class="bg-white dark:bg-[#0f1419]">

<!-- Light: dark text, Dark: light text -->
<p class="text-foreground dark:text-foreground">

<!-- Using CSS variables with dark variants -->
<div class="bg-[var(--muted)] dark:bg-[var(--warm-neutral-200)]">
```

### Components with Dark Mode

Most color variations maintain the therapeutic aesthetic:

```css
/* Light mode gradient */
.hero-gradient {
  background: linear-gradient(
    to bottom right,
    var(--soft-teal-50),
    var(--calm-blue-50),
    var(--sage-green-50)
  );
}

/* Dark mode - uses same teal tones with dark center */
.dark .hero-gradient {
  background: linear-gradient(
    to bottom right,
    var(--soft-teal-50),
    #0f1419,
    var(--sage-green-50)
  );
}
```

---

## Typography

### Fonts

**Font Family**: Geist (from Vercel)

```typescript
// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
```

### Text Sizes

Common text size patterns:

| Element | Classes |
|---------|---------|
| Page Title | `text-4xl md:text-5xl font-bold` |
| Section Title | `text-3xl font-bold` |
| Card Title | `text-2xl font-bold` |
| Body Text | `text-lg text-foreground/80` |
| Small Text | `text-sm text-foreground/70` |
| Tag/Badge | `text-xs font-medium` |

### Text Colors with Opacity

```html
<!-- Full opacity -->
<p class="text-foreground">Full visibility</p>

<!-- 80% opacity - body text -->
<p class="text-foreground/80">Slightly muted</p>

<!-- 70% opacity - secondary text -->
<p class="text-foreground/70">Secondary text</p>

<!-- 60% opacity - subtle text -->
<p class="text-foreground/60">Subtle text</p>
```

---

## Common Patterns

### Gradient Backgrounds

```html
<!-- Hero gradient -->
<section class="bg-gradient-to-br from-[var(--soft-teal-50)] via-[var(--calm-blue-50)] to-[var(--sage-green-50)]">

<!-- Teal to blue gradient (buttons, icons) -->
<div class="bg-gradient-to-br from-[var(--soft-teal-400)] to-[var(--calm-blue-400)]">

<!-- Education card header -->
<div class="bg-gradient-to-r from-[var(--soft-teal-500)] to-[var(--calm-blue-500)]">
```

### Cards

```html
<!-- Standard card -->
<div class="bg-white dark:bg-[#0f1419] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">

<!-- Muted background card -->
<div class="bg-[var(--muted)] dark:bg-[var(--warm-neutral-200)] p-6 rounded-2xl">
```

### Buttons

```html
<!-- Primary button -->
<button class="px-8 py-4 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">

<!-- Secondary button -->
<button class="px-8 py-4 bg-white dark:bg-[var(--warm-neutral-200)] hover:bg-[var(--muted)] text-foreground rounded-full font-semibold shadow-lg">
```

### Tags/Badges

```html
<!-- Teal tag -->
<span class="px-3 py-1 bg-[var(--soft-teal-100)] text-[var(--soft-teal-700)] rounded-full text-xs font-medium">

<!-- Blue tag -->
<span class="px-3 py-1 bg-[var(--calm-blue-100)] text-[var(--calm-blue-700)] rounded-full text-xs font-medium">

<!-- Green tag (published) -->
<span class="px-3 py-1 bg-[var(--sage-green-100)] text-[var(--sage-green-700)] rounded-full text-xs font-bold uppercase">
```

### Section Divider

```html
<div class="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
```

### Icon Containers

```html
<!-- Gradient icon container -->
<div class="w-16 h-16 bg-gradient-to-br from-[var(--soft-teal-400)] to-[var(--calm-blue-400)] rounded-xl flex items-center justify-center text-white">
  <svg class="w-8 h-8">...</svg>
</div>

<!-- Alternative gradient -->
<div class="w-12 h-12 bg-gradient-to-br from-[var(--accent-rose)] to-[var(--accent-amber)] rounded-lg flex items-center justify-center text-white">
```

---

## Component Styling

### Navigation

```css
/* Transparent at top */
nav { background: transparent; }

/* Scrolled state */
nav.scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Dark mode scrolled */
.dark nav.scrolled {
  background: rgba(15, 20, 25, 0.9);
}
```

### Form Inputs

```html
<input class="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white dark:bg-[var(--warm-neutral-200)] text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-colors" />
```

### Timeline (Experience)

```css
/* Timeline line */
.timeline-line {
  @apply absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[var(--border)];
}

/* Timeline dot */
.timeline-dot {
  @apply absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--primary)] rounded-full border-4 border-white dark:border-[#0f1419];
}
```

### Footer

```html
<footer class="bg-[var(--warm-neutral-900)] text-white py-12">
  <!-- Links with opacity -->
  <a class="text-white/70 hover:text-white transition-colors">
```

---

## Customization Guide

### Changing Primary Color

1. Open `app/globals.css`
2. Update the `--primary` and related variables:

```css
:root {
  --primary: #YOUR_COLOR;
  --primary-hover: #YOUR_DARKER_COLOR;
  
  /* Update teal palette to match */
  --soft-teal-400: #YOUR_COLOR;
  --soft-teal-500: #YOUR_COLOR;
  --soft-teal-600: #YOUR_DARKER_COLOR;
}
```

### Adding New Color Variables

```css
:root {
  /* Add your custom colors */
  --custom-color-light: #F0F0F0;
  --custom-color-main: #ABC123;
  --custom-color-dark: #789ABC;
}
```

Use in components:
```html
<div class="bg-[var(--custom-color-main)]">
```

### Adjusting Dark Mode Colors

```css
.dark {
  --background: #YOUR_DARK_BG;
  --foreground: #YOUR_LIGHT_TEXT;
  /* Add more overrides as needed */
}
```

### Modifying Shadows

Common shadow patterns:

```html
<!-- Standard shadow -->
<div class="shadow-lg">

<!-- Hover shadow -->
<div class="shadow-lg hover:shadow-xl transition-shadow">

<!-- Custom shadow -->
<div class="shadow-[0_4px_20px_rgba(74,144,164,0.2)]">
```

### Responsive Breakpoints

Tailwind default breakpoints:

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

Example:
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Animation Utilities

```html
<!-- Bounce animation -->
<div class="animate-bounce">

<!-- Transition all with duration -->
<div class="transition-all duration-300">

<!-- Transform on hover -->
<button class="transform hover:scale-105 transition-transform">
```

---

## Best Practices

1. **Use CSS Variables**: For colors that need dark mode support
2. **Opacity Modifiers**: Use `text-foreground/70` instead of hardcoded grays
3. **Consistent Spacing**: Use Tailwind's spacing scale (p-4, p-6, p-8)
4. **Rounded Corners**: Use `rounded-lg` (8px) or `rounded-2xl` (16px)
5. **Shadows**: Use `shadow-lg` for cards, `shadow-xl` for hover
6. **Transitions**: Always include `transition-*` for interactive elements
7. **Responsive**: Start mobile-first, add `md:` and `lg:` prefixes

---

## Files Reference

| File | Purpose |
|------|---------|
| `app/globals.css` | CSS variables, base styles |
| `tailwind.config.ts` | Tailwind configuration |
| `postcss.config.mjs` | PostCSS plugins |
| `app/layout.tsx` | Font configuration |

