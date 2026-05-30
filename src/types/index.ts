export interface Project {
  id: number;
  title: string;
  description_nl: string;
  description_en: string;
  longDescription_nl: string;
  longDescription_en: string;
  image: string;
  gallery?: string[];
  tags: string[];
  tagColors: string[];
  link?: string;
  github?: string;
  status_nl: string;
  status_en: string;
  date: string;
  role: string;
  teamSize: string;
  features_nl?: string[];
  features_en?: string[];
  techStack: string[];
  specifics_nl?: string[];
  specifics_en?: string[];
  startDate?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Helper functions to get language-specific content
export function getProjectDescription(project: Project, language: 'nl' | 'en'): string {
  return language === 'nl' ? project.description_nl : project.description_en;
}

export function getProjectLongDescription(project: Project, language: 'nl' | 'en'): string {
  return language === 'nl' ? project.longDescription_nl : project.longDescription_en;
}

export function getProjectStatus(project: Project, language: 'nl' | 'en'): string {
  return language === 'nl' ? project.status_nl : project.status_en;
}

export function getProjectFeatures(project: Project, language: 'nl' | 'en'): string[] {
  return language === 'nl' 
    ? (project.features_nl || [])
    : (project.features_en || []);
}

export function getProjectSpecifics(project: Project, language: 'nl' | 'en'): string[] {
  return language === 'nl'
    ? (project.specifics_nl || [])
    : (project.specifics_en || []);
}