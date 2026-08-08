export type Discipline = 'web' | 'android' | 'design' | 'systems';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problemStatement: string;
  solutionDescription: string;
  role: string;
  category: Discipline;
  tags: string[];
  tech: string[];
  keyFeatures: string[];
  metrics?: { label: string; value: string }[];
  links: {
    github?: string;
    demo?: string;
    figma?: string;
    playstore?: string;
  };
  image: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'mobile' | 'design' | 'other';
  proficiency: 'Expert' | 'Advanced' | 'Intermediate';
  context: string;
}

export type ExperienceType = 'education' | 'freelance' | 'personal' | 'internship' | 'professional' | 'milestone';

export interface Experience {
  id: string;
  role: string;
  company?: string;
  location?: string;
  period: string;
  type: ExperienceType;
  description: string[];
  achievements?: string[];
  tech?: string[];
}
