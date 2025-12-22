# Pages Documentation

This document provides detailed information about each page/route in the website.

## Table of Contents

- [Home Page (/)](#home-page-)
- [Experience & Education (/experience)](#experience--education-experience)
- [Research & Publications (/research)](#research--publications-research)
- [Blog (/blog)](#blog-blog)

---

## Home Page (`/`)

**File**: `app/page.tsx`

The home page serves as the main landing page and contains all primary sections for introducing the professional profile.

### Structure

```tsx
<div className="min-h-screen">
  <Navigation />
  <main>
    <Hero />
    <About />
    <Services />
    <Contact />
  </main>
  <Footer />
</div>
```

### Sections

#### 1. Hero Section

- **Component**: `Hero.tsx`
- **ID**: `#hero`
- **Content**:
  - Profile image placeholder (initials "WL")
  - Name and credentials
  - Professional tagline
  - Key highlights (Kaiser Permanente, UC Berkeley MSW, Published Researcher)
  - CTA buttons ("View Services", "Contact Me")
  - Scroll indicator animation
  - Dark mode toggle (fixed position)

#### 2. About Section

- **Component**: `About.tsx`
- **ID**: `#about`
- **Content**:
  - Personal introduction
  - Therapeutic philosophy
  - Languages (English, Mandarin)
  - Areas of specialization (8 items)
  - Professional quote/statement

#### 3. Services Section

- **Component**: `Services.tsx`
- **ID**: `#services`
- **Content**:
  - 6 service cards with icons:
    - Individual Therapy
    - Group Therapy
    - Bilingual Counseling
    - Trauma-Informed Care
    - Case Management
    - Crisis Intervention
  - Therapeutic modalities grid (9 modalities)

#### 4. Contact Section

- **Component**: `Contact.tsx`
- **ID**: `#contact`
- **Content**:
  - Contact information card (location, LinkedIn, availability)
  - Services offered summary
  - Contact form with fields:
    - Name (required)
    - Email (required, validated)
    - Subject (required)
    - Message (required, min 10 chars)
  - Form validation and submission handling

### Navigation Behavior

- Smooth scrolling to sections via hash links
- Fixed navigation bar with scroll detection
- Mobile-responsive hamburger menu

---

## Experience & Education (`/experience`)

**File**: `app/experience/page.tsx`

Dedicated page for professional experience timeline and educational background.

### Structure

```tsx
<div className="min-h-screen bg-white dark:bg-[#0f1419]">
  <Navigation />
  
  <header>
    <!-- Page header with title and description -->
  </header>

  <main>
    <!-- Licenses & Certifications Section -->
    <Experience />
    <Education />
  </main>
  
  <Footer />
</div>
```

### Sections

#### 1. Page Header

- Back to Home link
- Page title: "Experience & Education"
- Subtitle describing professional journey

#### 2. Licenses & Certifications

- **Location**: Inline in page.tsx
- **Content**:
  - Bilingual Staff Certificate (Kaiser Permanente - Mandarin)
  - CPR/AED & First Aid (Adult and Pediatric)

#### 3. Professional Experience

- **Component**: `Experience.tsx`
- **ID**: `#experience`
- **Layout**: Alternating timeline with expandable details
- **Content** (6 positions):
  1. Mental Health Trainee - Kaiser Permanente (Sep 2025 - Present)
  2. Group Counselor & Instructor - UC Berkeley Blue Camp (Jun 2025 - Aug 2025)
  3. Founder & Group Facilitator - Mental Health Wellness Group (Mar 2025 - Jul 2025)
  4. MSW Intern - Center for Empowering Refugees and Immigrants (Sep 2024 - Apr 2025)
  5. Mental Health Intern - Shanghai Mental Health Center (May 2023 - Apr 2024)
  6. Founder & Project Lead - Fuwafuwa Family Psychoeducation Project (Sep 2021 - Apr 2024)

Each experience item includes:
- Title and organization
- Location and period
- Employment type badge
- Expandable description (bullet points)
- Skills tags

#### 4. Education

- **Component**: `Education.tsx`
- **ID**: `#education`
- **Content** (2 degrees):
  1. **Master of Social Work** - UC Berkeley (Aug 2024 - May 2026)
     - GPA: 4.0/4.0
     - Activities: Founder & Group Facilitator of Mental Health Wellness Group
     - Core courses listed
  
  2. **Bachelor of Science in Applied Psychology** - East China Normal University (Sep 2020 - Jun 2024)
     - GPA: 3.8/4.0 (Top 10%)
     - Honors: Outstanding Graduates, Supreme Scholarship, Excellent Student Awards
     - Activities and courses listed

---

## Research & Publications (`/research`)

**File**: `app/research/page.tsx`

Dedicated page for research work and academic publications.

### Structure

```tsx
<div className="min-h-screen bg-white dark:bg-[#0f1419]">
  <Navigation />
  
  <header>
    <!-- Page header with title and description -->
  </header>

  <main>
    <Publications />
  </main>
  
  <Footer />
</div>
```

### Sections

#### 1. Page Header

- Back to Home link
- Page title: "Research & Publications"
- Subtitle about neuroimaging research and evidence-based practice

#### 2. Publications

- **Component**: `Publications.tsx`
- **ID**: `#publications`
- **Content**:

**Published Research:**
- "Pallidum volume as a predictor for the effectiveness of mindfulness-based cognitive therapy and psycho-education in unmedicated patients with obsessive-compulsive disorder"
  - Journal: Comprehensive Psychiatry, 131, 152462 (2024)
  - Presented at: 21st National Psychiatry Conference, Suzhou, China

**Ongoing Research:**
- "Resting-state functional connectivity predicts response to medication and psychotherapy in obsessive–compulsive disorder"

#### 3. Research Focus Areas

Four key research areas displayed in cards:
1. **Neuroimaging & Biomarkers**: MRI/fMRI for OCD treatment prediction
2. **Precision Medicine**: Treatment-specific biomarker identification
3. **Cultural Adaptation & Accessibility**: Culturally responsive interventions
4. **Patient-Centered Approach**: Quality of life and functional improvement focus

---

## Blog (`/blog`)

**File**: `app/blog/page.tsx`

Placeholder page for future blog content.

### Structure

```tsx
<div className="min-h-screen bg-white dark:bg-[#0f1419]">
  <header>
    <!-- Page header -->
  </header>

  <main>
    <!-- Coming Soon content -->
  </main>
</div>
```

### Current State

- "Coming Soon" placeholder with icon
- List of upcoming topics:
  - Trauma-Informed Care in Practice
  - Cultural Considerations in Therapy
  - Neuroscience of Psychotherapy
  - Supporting Immigrant Mental Health
  - Understanding OCD Treatment

### Future Implementation

To add blog functionality:
1. Create a blog post data structure in `data/`
2. Update `app/blog/page.tsx` with post listings
3. Create `app/blog/[slug]/page.tsx` for individual posts
4. Consider using MDX for rich content

---

## URL Structure Summary

| Path | File | Description |
|------|------|-------------|
| `/` | `app/page.tsx` | Home page with Hero, About, Services, Contact |
| `/experience` | `app/experience/page.tsx` | Experience timeline and Education |
| `/research` | `app/research/page.tsx` | Publications and Research focus areas |
| `/blog` | `app/blog/page.tsx` | Blog (coming soon placeholder) |
| `/api/contact` | `app/api/contact/route.ts` | Contact form API endpoint |

## Navigation Links

The Navigation component includes these links:

| Label | Path | Type |
|-------|------|------|
| About | `/#about` | Hash link (smooth scroll) |
| Services | `/#services` | Hash link (smooth scroll) |
| Experience & Education | `/experience` | Page navigation |
| Research | `/research` | Page navigation |
| Contact | `/#contact` | Hash link (smooth scroll) |

## SEO & Metadata

Defined in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Wenqing(Emily) Li, MSW | Mental Health Therapist | Bilingual Counseling",
  description: "Wenqing(Emily) Li is a mental health therapist...",
  keywords: ["mental health therapist", "bilingual counseling", ...],
  authors: [{ name: "Wenqing(Emily) Li" }],
  openGraph: {
    title: "Wenqing(Emily) Li, MSW | Mental Health Therapist",
    description: "Trauma-informed, gender-inclusive therapy...",
    type: "website",
    locale: "en_US",
  },
};
```

