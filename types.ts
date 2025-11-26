export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string; // Some entries in PDF have location, others implies
  account?: string;
  description: string[];
  tech: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  logo?: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  year: string;
  link?: string;
}

export interface Language {
  language: string;
  proficiency: string;
  level: string;
}

export interface NavItem {
  label: string;
  href: string;
}