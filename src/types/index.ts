export interface Project {
  title: string;
  subtitle: string;
  category: string;
  date: string;
  description: string;
  technologies: string[];
  techColors: string[];
  icon: string;
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}
