// src/types/index.ts
export interface ProjectItem {
  title: string;
  description: string;
  pdf: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}
