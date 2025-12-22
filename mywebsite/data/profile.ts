import { Profile } from '@/types';

export const profileData: Profile = {
  name: "Emily Li",
  credentials: "MSW, ASW-Eligible",
  tagline: "2nd Year UCB MSW Candidate | Mental Health Therapist | Bilingual (English & Mandarin)",
  location: "Berkeley, California, United States",
  linkedin: "https://www.linkedin.com/in/emily-l-54b1b2259",
  
  about: {
    intro: "I am a dedicated mental health professional currently completing my Master of Social Work at UC Berkeley with a 4.0 GPA. As a Mental Health Trainee at Kaiser Permanente, I provide trauma-informed, gender-inclusive therapy to diverse populations, managing a caseload of 8-10 clients weekly.",
    philosophy: "My approach integrates evidence-based practices with cultural sensitivity and lived experience. I believe in meeting clients where they are, building safety and trust, and empowering individuals to reclaim authorship over their narratives. With a background in neuroscience research and clinical practice, I bring both scientific rigor and deep compassion to my therapeutic work.",
    specializations: [
      "Trauma-Informed Care",
      "Gender-Inclusive Therapy",
      "Bilingual Counseling (English & Mandarin)",
      "Immigrant & Refugee Mental Health",
      "LGBTQ+ Affirming Care",
      "OCD & Anxiety Disorders",
      "Depression & Mood Disorders",
      "Cross-Cultural Mental Health"
    ],
    languages: ["English (Fluent)", "Mandarin (Native)"]
  },

  experiences: [
    {
      id: "kaiser-trainee",
      title: "Mental Health Trainee",
      organization: "Kaiser Permanente",
      location: "Daly City, California · Hybrid",
      period: "Sep 2025 - Present",
      type: "Internship",
      description: [
        "Provide individual therapy 3 days/week, managing a weekly caseload of 8–10 clients with MDD, GAD, PTSD, adjustment disorders, grief, work stress, domestic violence, and LGBTQ+ related concerns",
        "Conduct assessments, diagnosis (DSM-5-TR), goal setting, treatment planning, and bilingual (English & Mandarin) intervention using a trauma-informed and gender-inclusive approach",
        "Implement evidence-based interventions, including Motivational Interviewing (MI), CBT, mindfulness-based techniques, art therapy, solution-focused therapy, and psychoeducation",
        "Co-facilitate Intensive Outpatient Groups for higher-level care patients, including psychoeducation and processing sessions, and engage in curriculum development",
        "Manage crisis assessments for SI/HI risks and develop safety plans; filed APS reports as needed and made client-centered safety plans",
        "Track treatment outcomes using Lucet, and adapt intervention delivery based on client feedback"
      ],
      skills: ["Cross-team Collaboration", "Bilingual therapy: Mandarin", "Crisis Intervention", "DSM-5-TR Diagnosis"]
    },
    {
      id: "ucb-financial-coach",
      title: "Graduate Financial Wellness Coach",
      organization: "University of California, Berkeley",
      location: "Berkeley, California · Hybrid",
      period: "Aug 2025 - Present",
      type: "Part-time",
      description: [
        "Advocate for graduate students in access to financial resources on campus and education on financial literacies tailored to graduate students' needs",
        "Initiated and facilitated focus groups to understand the needs of graduate students, developed a thorough report to inform future program developing",
        "Provided internal trainings on Motivational Interview skills in Financial Wellness Coaching",
        "Facilitated transition class on budgeting, student loans, savings, and investment"
      ],
      skills: ["Financial wellness coach", "Motivational Interviewing", "Program Development"]
    },
    {
      id: "ucb-counselor",
      title: "Group Counselor & Instructor",
      organization: "University of California, Berkeley",
      location: "Berkeley, California · On-site",
      period: "Jun 2025 - Aug 2025",
      type: "Full-time",
      description: [
        "Instructed arts, dance, and drama activities for ~20 adolescents age 7–12 per session, integrating social–emotional learning (SEL) components to promote self-expression and teamwork",
        "Provided emotional and behavioral support for 5-10 adolescents with ADHD and/or ASD, adapting activity plans to encourage inclusion and positive peer interaction",
        "Supported program evaluation during the American Camp Association accreditation review in 2025"
      ],
      skills: ["Working with Adolescents", "Youth Development", "Social-Emotional Learning"]
    },
    {
      id: "wellness-group",
      title: "Founder & Group Facilitator",
      organization: "Mental Health Wellness Group, UC Berkeley",
      location: "Berkeley, California · On-site",
      period: "Mar 2025 - Jul 2025",
      type: "Founder",
      description: [
        "Initiated and facilitated weekly student-led wellness groups for international students and scholars in Mandarin, introducing various therapy approaches such as Mindfulness, CBT, IFS, and Expressive Arts",
        "Designed and led multi-theme, participant-centered groups of varying formats (single session to 8-week series) and sizes (4–10 participants)",
        "Integrated diverse therapeutic modalities (e.g., Art Therapy, Drama Therapy, Motivational Interviewing) to increase participants' openness toward mental health care and reduce stigma",
        "Achieved 100% participant satisfaction, with attendees reporting improved mood, enhanced coping skills, and greater confidence",
        "Built and managed a social media channel for outreach and community engagement, reaching over 1,300 views and 44 followers"
      ],
      skills: ["Mental Health Advocacy", "Psychoeducation", "Group Facilitation", "Community Building"]
    },
    {
      id: "ceri-intern",
      title: "MSW Intern, Mental Health Specialist",
      organization: "Center for Empowering Refugees and Immigrants",
      location: "Oakland, California · On-site",
      period: "Sep 2024 - Apr 2025",
      type: "Internship",
      description: [
        "Provided Psychosocial Evaluation and Intervention (PEI) to Southeast Asian refugees and immigrants under Alameda County's Unserved/Underserved Ethnic Language Populations (UELP) program",
        "Utilized foundational skills drawn from various modalities, including Motivational Interviewing, Internal Family Systems (IFS), and Eye Movement Desensitization and Reprocessing (EMDR) in individual therapy sessions (caseload: 4-5 weekly)",
        "Co-facilitated weekly group art therapy to foster collective healing for ~20 individuals with severe trauma",
        "Engaged in community advocacy for underserved populations and provided therapeutic case management to improve equal access to resources such as SSI/SSDI",
        "Received weekly individual and group clinical supervision, and trainings on trauma, crisis assessment and intervention, EMDR, and IFS"
      ],
      skills: ["Case Management", "Trauma Informed Care", "EMDR", "IFS", "Cultural Competency"]
    },
    {
      id: "smhc-research",
      title: "Research Assistant",
      organization: "Shanghai Mental Health Center",
      location: "Shanghai · Hybrid",
      period: "Jan 2023 - Aug 2024",
      type: "Part-time",
      description: [
        "Contributed to two projects applying neuroimaging methods to identify predictive biomarkers of treatment outcomes for OCD patients",
        "Applied structural MRI to predict the efficacy of MBCT and psychoeducation for OCD patients, and developed a prediction model based on identified biomarkers (published)",
        "Using resting-state fMRI to identify treatment-specific biomarkers that differentially predict response to group CBT versus medication among OCD patients (ongoing, co-led)",
        "Developed skills in data visualization using R, data analysis using SPSS, building statistic models using MATLAB/R/SPSS, and MRI data analysis",
        "Conducted comprehensive literature reviews on OCD, focusing on abnormalities in brain structure and function, and treatment-related changes"
      ],
      skills: ["Research Skills", "Neuroimaging", "Statistical Analysis", "Data Visualization"]
    },
    {
      id: "smhc-intern",
      title: "Mental Health Intern",
      organization: "Shanghai Mental Health Center",
      location: "Shanghai, China · On-site",
      period: "May 2023 - Apr 2024",
      type: "Internship",
      description: [
        "Co-facilitated group CBT/ERP with 6-8 patients and 2 therapists, providing emotional support and assessing patient's anxiety levels during practice",
        "Conducted psychosocial in-take for patients in an outpatient clinic, gaining insights into their medical history, symptoms, and healthcare needs",
        "Conducted Y-BOCS assessment for individuals with OCD before and after treatment, and made regular contact with them for follow-up assessments",
        "Provided psychoeducation on therapeutic approaches such as Mindfulness-based Cognitive Therapy and CBT",
        "Advocated for underrepresented populations by connecting them with resources and community networks for support beyond medical care"
      ],
      skills: ["Cross-functional Collaborations", "Group CBT", "Clinical Assessment"]
    }
  ],

  education: [
    {
      id: "ucb-msw",
      degree: "Master of Social Work",
      field: "Social Work",
      institution: "University of California, Berkeley",
      location: "Berkeley, California",
      period: "Aug 2024 - May 2026",
      gpa: "4.0/4.0",
      honors: ["Associate Clinical Social Worker (ASW) — Eligible & Anticipated registration before onboarding"],
      courses: "Individual and group therapy, Psychosocial assessment, Trauma-informed care, Clinical diagnosis"
    },
    {
      id: "ecnu-bs",
      degree: "Bachelor of Science",
      field: "Applied Psychology",
      institution: "East China Normal University",
      location: "Shanghai, China",
      period: "Sep 2020 - Jun 2024",
      gpa: "3.8/4.0, Ranking: Top 10%",
      honors: [
        "Outstanding Graduates",
        "Supreme Scholarship for 2022 & 2021",
        "Excellent Student Awards for 2022 & 2021"
      ],
      activities: "Head of New Beat Choir, Head of the Academic Development Center, ECNU Students' Union, Founder & Leader of Fuwafuwa Family Psychoeducation Project",
      courses: "Clinical Psychology, Developmental Psychology, Cognitive Neuroscience, Social Psychology, Undergraduate Research thesis"
    }
  ],

  publications: [
    {
      id: "pallidum-ocd",
      title: "Pallidum volume as a predictor for the effectiveness of mindfulness-based cognitive therapy and psycho-education in unmedicated patients with obsessive-compulsive disorder",
      authors: "Chen Zhang, Xiaochen Zhang, Wenqing Li, Tianran Zhang, Zongfeng Zhang, Lu Lu, Fabrizio Didonna, Qing Fan",
      journal: "Comprehensive Psychiatry, 131, 152462",
      year: 2024,
      presented: "21st National Psychiatry Conference of the Chinese Medical Association, 17th National Congress of Child and Adolescent Psychiatry, Suzhou, China, September 2023",
      type: "published"
    },
    {
      id: "fmri-ocd",
      title: "Using resting-state fMRI to identify treatment-specific biomarkers that differentially predict response to group CBT versus medication among OCD patients",
      authors: "Wenqing Li (Co-lead), Research Team",
      journal: "Ongoing Research Project",
      year: 2024,
      type: "ongoing"
    }
  ],

  services: [
    {
      id: "individual-therapy",
      title: "Individual Therapy",
      description: "Trauma-informed, gender-inclusive individual therapy for adults addressing depression, anxiety, PTSD, grief, and life transitions.",
      icon: "person",
      modalities: ["Motivational Interviewing", "CBT", "IFS", "EMDR", "Mindfulness"]
    },
    {
      id: "group-therapy",
      title: "Group Therapy",
      description: "Facilitation of therapeutic groups for collective healing, psychoeducation, and skill-building in supportive environments.",
      icon: "people",
      modalities: ["Art Therapy", "Process Groups", "Psychoeducation", "Intensive Outpatient Programs"]
    },
    {
      id: "bilingual-counseling",
      title: "Bilingual Counseling",
      description: "Culturally sensitive therapy services provided in both English and Mandarin, specializing in immigrant and international student experiences.",
      icon: "language",
      modalities: ["Cross-Cultural Therapy", "Immigrant Mental Health", "Cultural Adaptation"]
    },
    {
      id: "trauma-care",
      title: "Trauma-Informed Care",
      description: "Specialized support for individuals with complex trauma, including refugees, domestic violence survivors, and PTSD.",
      icon: "heart",
      modalities: ["EMDR", "Safety Planning", "Grounding Techniques", "Somatic Approaches"]
    }
  ],

  skills: [
    {
      category: "Therapeutic Modalities",
      items: [
        "Motivational Interviewing (MI)",
        "Cognitive Behavioral Therapy (CBT)",
        "Internal Family Systems (IFS)",
        "Eye Movement Desensitization and Reprocessing (EMDR)",
        "Mindfulness-Based Approaches",
        "Art Therapy",
        "Solution-Focused Therapy",
        "Exposure and Response Prevention (ERP)"
      ]
    },
    {
      category: "Clinical Skills",
      items: [
        "DSM-5-TR Diagnosis",
        "Psychosocial Assessment",
        "Crisis Intervention",
        "Safety Planning",
        "Treatment Planning",
        "Group Facilitation",
        "Case Management",
        "Outcome Tracking"
      ]
    },
    {
      category: "Specialized Populations",
      items: [
        "Refugees & Immigrants",
        "LGBTQ+ Community",
        "International Students",
        "Trauma Survivors",
        "OCD & Anxiety Disorders",
        "Adolescents & Youth",
        "Underserved Communities"
      ]
    },
    {
      category: "Research & Technical",
      items: [
        "Neuroimaging (MRI, fMRI)",
        "Statistical Analysis (SPSS, R, MATLAB)",
        "Data Visualization",
        "Academic Writing",
        "Program Evaluation"
      ]
    }
  ]
};

