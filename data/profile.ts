import { Profile } from '@/types';

export const profileData: Profile = {
  name: "Wenqing(Emily) Li",
  credentials: "MSW, ASW-Eligible",
  tagline: "Mental Health Therapist | Bilingual (English & Mandarin)",
  location: "California, United States",
  linkedin: "https://www.linkedin.com/in/emily-l-54b1b2259",
  
  about: {
    intro: "I am a dedicated mental health professional currently completing my Master of Social Work at UC Berkeley. As a Mental Health Trainee at Kaiser Permanente, I provide trauma-informed, gender-inclusive therapy to diverse populations, managing a caseload of 8-10 clients weekly.",
    philosophy: "My approach integrates evidence-based practices with cultural sensitivity and lived experience. I believe in meeting clients where they are, building safety and trust, and empowering individuals to reclaim authorship over their narratives. With a background in neuroscience research and clinical practice, I bring both scientific rigor and deep compassion to my therapeutic work.",
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
  },

  experiences: [
    {
      id: "kaiser-trainee",
      title: "Mental Health Trainee",
      organization: "Kaiser Permanente Adult Psychiatry",
      location: "Daly City, California · Hybrid",
      period: "Sep 2025 - Present",
      type: "Internship",
      description: [
        "Provide individual therapy 3 days/week, managing a weekly caseload of 8–10 clients with MDD, GAD, PTSD, adjustment disorders, grief, work stress, and domestic violence",
        "Conduct assessments, diagnosis (DSM-5-TR), goal setting, treatment planning, and bilingual (English & Mandarin) intervention using a trauma-informed and gender-inclusive approach",
        "Implement evidence-based interventions, including Motivational Interviewing (MI), CBT, mindfulness-based techniques, art therapy, solution-focused therapy, and psychoeducation",
        "Co-facilitate Intensive Outpatient Groups for higher-level care patients, including psychoeducation and processing sessions, and engage in curriculum development",
        "Manage crisis assessments for SI/HI risks and develop safety plans; filed APS reports as needed and made client-centered safety plans",
        "Track treatment outcomes using Lucet, and adapt intervention delivery based on client feedback"
      ],
      skills: ["Cross-team Collaboration", "Bilingual therapy: Mandarin", "Crisis Intervention", "DSM-5-TR Diagnosis"]
    },
    {
      id: "ucb-counselor",
      title: "Group Counselor & Instructor (Neurodiversity-Inclusive, Ages 7–12)",
      organization: "Blue Camp, UC Berkeley",
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
    },
    {
      id: "fuwafuwa-family",
      title: "Founder & Project Lead",
      organization: "Fuwafuwa Family Psychoeducation Project",
      location: "Shanghai, China · Hybrid",
      period: "Sep 2021 - Apr 2024",
      type: "Self-employed",
      description: [
        "Produced and disseminated psychoeducational videos in elementary and middle schools on emotion awareness, expression, regulation, and interpersonal conflicts, received 210,000+ views",
        "Delivered family psychoeducation lectures to improve parents' awareness of mental health and providing guidance on effective and supportive communication with their children",
        "Built and managed a cross-disciplinary team, fostered a creative & inclusive working culture",
        "Reached out and established partnerships with academic organizations and corporations to promote service quality and social impact",
        "This project is acknowledged by Shanghai Psychological Association and China's Ministry of Education, and received National Innovation Fund in 2022"
      ],
      skills: ["Social Media Marketing", "Project Management", "Public Outreach", "Family Psychoeducation", "Cross-disciplinary Team Building"]
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
      activities: "Founder & Group Facilitator of Mental Health Wellness Group for International students",
      courses: "Psychosocial Problems and Psychopathology, Substance Use and Interventions, Cognitive Behavioral Methods, Anti-Oppressive Frameworks for Social Work Ethics and Justice, Aging Processes, Solution-Focused Brief Therapy, Domestic Violence, Third Wave Cognitive Behavioral Therapy"
    },
    {
      id: "ecnu-bs",
      degree: "Bachelor of Science",
      field: "Applied Psychology",
      institution: "East China Normal University",
      location: "Shanghai, China",
      period: "Sep 2020 - Jun 2024",
      gpa: "3.8/4.0 | Top 10%",
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
      authors: "Chen Zhang*, Xiaochen Zhang*, Wenqing Li*, Tianran Zhang, Zongfeng Zhang, Lu Lu, Fabrizio Didonna, Qing Fan",
      journal: "Comprehensive Psychiatry, 131, 152462",
      year: 2024,
      presented: "21st National Psychiatry Conference of the Chinese Medical Association, 17th National Congress of Child and Adolescent Psychiatry, Suzhou, China, September 2023",
      type: "published"
    },
    {
      id: "fmri-ocd",
      title: "Resting-state functional connectivity predicts response to medication and psychotherapy in obsessive–compulsive disorder",
      authors: "Wenqing Li*, Chen Zhang*, Research Team",
      journal: "Ongoing Research Project",
      year: 2024,
      type: "ongoing"
    }
  ],

  services: [
    {
      id: "individual-therapy",
      title: "Individual Therapy",
      description: "Trauma-informed, gender-inclusive individual therapy for youth, adults, and older adults addressing depression, anxiety, PTSD, grief, and life transitions.",
      icon: "person",
      modalities: ["Motivational Interviewing", "CBT", "DBT", "IFS", "Mindfulness"]
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
      modalities: ["Safety Planning", "Grounding Techniques", "Somatic Approaches", "Trauma Processing"]
    },
    {
      id: "case-management",
      title: "Case Management",
      description: "Comprehensive support to connect clients with community resources, coordinate care, and advocate for access to essential services including healthcare, housing, and social support systems.",
      icon: "clipboard",
      modalities: ["Resource Coordination", "Care Planning", "Systems Navigation", "Advocacy"]
    },
    {
      id: "crisis-intervention",
      title: "Crisis Intervention",
      description: "Immediate support for mental health crises including suicidal ideation, homicidal ideation, and acute psychiatric emergencies. Safety assessment, planning, and connection to appropriate level of care.",
      icon: "alert",
      modalities: ["Risk Assessment", "Safety Planning", "Crisis Stabilization", "Emergency Coordination"]
    }
  ],

  skills: [
    {
      category: "Therapeutic Modalities",
      items: [
        "Motivational Interviewing (MI)",
        "Cognitive Behavioral Therapy (CBT)",
        "Dialectical Behavior Therapy (DBT)",
        "Internal Family Systems (IFS)",
        "Mindfulness-Based Approaches",
        "Art Therapy",
        "Solution-Focused Therapy",
        "Exposure Therapy",
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
        "International Students",
        "Trauma Survivors"
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

