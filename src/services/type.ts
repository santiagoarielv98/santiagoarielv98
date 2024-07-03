export interface SkillsResponse {
  frontEndSkills: string[];
  backEndSkills: string[];
  cloudAndDBSkills: string[];
}

export interface ProjectsResponse {
  projects: Project[];
}

export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  deployed: string;
}
