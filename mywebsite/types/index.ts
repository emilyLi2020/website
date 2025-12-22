export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}

export interface Education {
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

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  presented?: string;
  type: 'published' | 'ongoing';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  modalities?: string[];
}

export interface Profile {
  name: string;
  credentials: string;
  tagline: string;
  location: string;
  email?: string;
  linkedin: string;
  about: {
    intro: string;
    philosophy: string;
    specializations: string[];
    languages: string[];
  };
  experiences: Experience[];
  education: Education[];
  publications: Publication[];
  services: Service[];
  skills: {
    category: string;
    items: string[];
  }[];
}

