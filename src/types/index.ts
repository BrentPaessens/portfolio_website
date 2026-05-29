export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery?: string[];
  tags: string[];
  tagColors: string[];
  link: string;
  github: string;
  status: string;
  date: string;
  role: string;
  teamSize: string;
  features: string[];
  techStack: string[];
  specifics?: string[];
  startDate?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}