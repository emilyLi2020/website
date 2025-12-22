# Data Structure Documentation

This document describes the data structures used throughout the website, including TypeScript interfaces and the profile data configuration.

## Table of Contents

- [Overview](#overview)
- [TypeScript Interfaces](#typescript-interfaces)
- [Profile Data](#profile-data)
- [How to Update Data](#how-to-update-data)

---

## Overview

The website uses a centralized data approach:

- **`data/profile.ts`**: Single source of truth for all profile information
- **`types/index.ts`**: TypeScript interfaces defining data shapes

All components import from these files, making content updates simple and consistent.

---

## TypeScript Interfaces

**File**: `types/index.ts`

### Experience Interface

Represents a professional work experience entry.

```typescript
export interface Experience {
  id: string;           // Unique identifier (e.g., "kaiser-trainee")
  title: string;        // Job title
  organization: string; // Company/organization name
  location: string;     // City, State · Work type (Hybrid/On-site)
  period: string;       // Date range (e.g., "Sep 2025 - Present")
  type: string;         // Employment type (Internship, Full-time, etc.)
  description: string[];// Array of bullet points describing responsibilities
  skills: string[];     // Array of skill tags
}
```

**Example**:
```typescript
{
  id: "kaiser-trainee",
  title: "Mental Health Trainee",
  organization: "Kaiser Permanente Adult Psychiatry",
  location: "Daly City, California · Hybrid",
  period: "Sep 2025 - Present",
  type: "Internship",
  description: [
    "Provide individual therapy 3 days/week...",
    "Conduct assessments, diagnosis (DSM-5-TR)..."
  ],
  skills: ["Cross-team Collaboration", "Bilingual therapy: Mandarin"]
}
```

---

### Education Interface

Represents an educational credential.

```typescript
export interface Education {
  id: string;           // Unique identifier (e.g., "ucb-msw")
  degree: string;       // Degree type (e.g., "Master of Social Work")
  field: string;        // Field of study (e.g., "Social Work")
  institution: string;  // School name
  location: string;     // City, State/Country
  period: string;       // Date range
  gpa?: string;         // Optional GPA (e.g., "4.0/4.0")
  honors?: string[];    // Optional array of honors/awards
  activities?: string;  // Optional activities description
  courses?: string;     // Optional core courses list
}
```

**Example**:
```typescript
{
  id: "ucb-msw",
  degree: "Master of Social Work",
  field: "Social Work",
  institution: "University of California, Berkeley",
  location: "Berkeley, California",
  period: "Aug 2024 - May 2026",
  gpa: "4.0/4.0",
  activities: "Founder & Group Facilitator of Mental Health Wellness Group",
  courses: "Psychosocial Problems and Psychopathology, Cognitive Behavioral Methods..."
}
```

---

### Publication Interface

Represents a research publication or ongoing research project.

```typescript
export interface Publication {
  id: string;              // Unique identifier
  title: string;           // Full publication title
  authors: string;         // Author list (use * for co-first authors)
  journal: string;         // Journal name and details
  year: number;            // Publication year
  presented?: string;      // Optional conference presentation info
  type: 'published' | 'ongoing';  // Publication status
}
```

**Example**:
```typescript
{
  id: "pallidum-ocd",
  title: "Pallidum volume as a predictor for the effectiveness of...",
  authors: "Chen Zhang*, Xiaochen Zhang*, Wenqing Li*, Tianran Zhang...",
  journal: "Comprehensive Psychiatry, 131, 152462",
  year: 2024,
  presented: "21st National Psychiatry Conference...",
  type: "published"
}
```

---

### Service Interface

Represents a professional service offered.

```typescript
export interface Service {
  id: string;           // Unique identifier (e.g., "individual-therapy")
  title: string;        // Service name
  description: string;  // Service description
  icon: string;         // Icon key for iconMap in Services component
  modalities?: string[];// Optional array of therapy modalities used
}
```

**Available Icon Keys**:
- `person` - Individual/single person icon
- `people` - Group/multiple people icon
- `language` - Translation/language icon
- `heart` - Heart/care icon
- `clipboard` - Clipboard/assessment icon
- `alert` - Alert/crisis icon

**Example**:
```typescript
{
  id: "individual-therapy",
  title: "Individual Therapy",
  description: "Trauma-informed, gender-inclusive individual therapy...",
  icon: "person",
  modalities: ["Motivational Interviewing", "CBT", "DBT", "IFS", "Mindfulness"]
}
```

---

### Profile Interface

The main interface containing all profile data.

```typescript
export interface Profile {
  name: string;           // Full name with nickname
  credentials: string;    // Professional credentials
  tagline: string;        // Brief professional description
  location: string;       // Geographic location
  email?: string;         // Optional email address
  linkedin: string;       // LinkedIn profile URL
  
  about: {
    intro: string;           // Introduction paragraph
    philosophy: string;      // Therapeutic philosophy paragraph
    specializations: string[];// Array of specialization areas
    languages: string[];     // Spoken languages
  };
  
  experiences: Experience[];    // Work experience array
  education: Education[];       // Education array
  publications: Publication[];  // Publications array
  services: Service[];          // Services offered array
  
  skills: {
    category: string;     // Skill category name
    items: string[];      // Skills in this category
  }[];
}
```

---

## Profile Data

**File**: `data/profile.ts`

This file exports the `profileData` constant containing all website content.

### Basic Information

```typescript
export const profileData: Profile = {
  name: "Wenqing(Emily) Li",
  credentials: "MSW, ASW-Eligible",
  tagline: "Mental Health Therapist | Bilingual (English & Mandarin)",
  location: "California, United States",
  linkedin: "https://www.linkedin.com/in/emily-l-54b1b2259",
  // ...
};
```

### About Section

```typescript
about: {
  intro: "I am a dedicated mental health professional...",
  philosophy: "My approach integrates evidence-based practices...",
  specializations: [
    "Trauma-Informed Care",
    "Gender-Inclusive Therapy",
    "Bilingual Counseling (English & Mandarin)",
    "Crisis Intervention",
    "Depressive & Anxiety Disorders",
    "Obsessive-Compulsive & Related Disorders",
    "Trauma- & Stressor-Related Disorders",
    "Insomnia Disorder"
  ],
  languages: ["English", "Mandarin"]
}
```

### Experiences Array

Contains 6 professional experiences in reverse chronological order:

1. Kaiser Permanente - Mental Health Trainee
2. UC Berkeley Blue Camp - Group Counselor
3. Mental Health Wellness Group - Founder
4. Center for Empowering Refugees and Immigrants - MSW Intern
5. Shanghai Mental Health Center - Mental Health Intern
6. Fuwafuwa Family Psychoeducation Project - Founder

### Education Array

Contains 2 education entries:

1. UC Berkeley - Master of Social Work (2024-2026)
2. East China Normal University - Bachelor of Science (2020-2024)

### Publications Array

Contains 2 publications:

1. Published paper on pallidum volume in OCD (2024)
2. Ongoing research on resting-state fMRI (2024)

### Services Array

Contains 6 services:

1. Individual Therapy
2. Group Therapy
3. Bilingual Counseling
4. Trauma-Informed Care
5. Case Management
6. Crisis Intervention

### Skills Array

Contains 4 skill categories:

1. **Therapeutic Modalities**: MI, CBT, DBT, IFS, Mindfulness, Art Therapy, etc.
2. **Clinical Skills**: DSM-5-TR Diagnosis, Assessment, Safety Planning, etc.
3. **Specialized Populations**: Refugees, Immigrants, International Students, etc.
4. **Research & Technical**: Neuroimaging, SPSS, R, MATLAB, etc.

---

## How to Update Data

### Updating Basic Information

Edit the top-level fields in `data/profile.ts`:

```typescript
export const profileData: Profile = {
  name: "Your Name",
  credentials: "Your Credentials",
  tagline: "Your Professional Tagline",
  location: "Your Location",
  linkedin: "https://linkedin.com/in/your-profile",
  // ...
};
```

### Adding a New Experience

Add a new object to the `experiences` array:

```typescript
experiences: [
  {
    id: "unique-id",           // Use kebab-case
    title: "Job Title",
    organization: "Company Name",
    location: "City, State · Work Type",
    period: "Start Date - End Date",
    type: "Internship",        // or "Full-time", "Part-time", etc.
    description: [
      "First responsibility...",
      "Second responsibility..."
    ],
    skills: ["Skill 1", "Skill 2"]
  },
  // ... existing experiences
]
```

### Adding a New Publication

Add a new object to the `publications` array:

```typescript
publications: [
  {
    id: "paper-id",
    title: "Full Paper Title",
    authors: "Author 1, Author 2, Author 3",
    journal: "Journal Name, Volume, Pages",
    year: 2024,
    presented: "Conference Name (optional)",
    type: "published"          // or "ongoing"
  },
  // ... existing publications
]
```

### Adding a New Service

Add a new object to the `services` array:

```typescript
services: [
  {
    id: "service-id",
    title: "Service Name",
    description: "Description of the service...",
    icon: "person",            // Must match iconMap key
    modalities: ["Modality 1", "Modality 2"]
  },
  // ... existing services
]
```

### Updating Skills

Modify the `skills` array. To add a new skill to an existing category:

```typescript
skills: [
  {
    category: "Therapeutic Modalities",
    items: [
      "Existing Skill 1",
      "New Skill"              // Add here
    ]
  },
  // ... other categories
]
```

To add a new category:

```typescript
skills: [
  // ... existing categories
  {
    category: "New Category Name",
    items: ["Skill 1", "Skill 2"]
  }
]
```

---

## Data Validation

TypeScript provides compile-time validation. The `Profile` type ensures:

- All required fields are present
- Arrays contain correctly typed objects
- Optional fields are properly marked

If you add invalid data, TypeScript will show errors in your IDE.

---

## Best Practices

1. **Keep IDs unique**: Use descriptive kebab-case IDs
2. **Order by date**: Keep experiences in reverse chronological order
3. **Consistent formatting**: Match existing date formats (e.g., "Sep 2024 - Present")
4. **Valid icon keys**: Only use icons defined in the Services component
5. **Markdown-free**: These are plain strings, not markdown

