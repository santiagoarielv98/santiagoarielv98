import { ProjectsResponse, SkillsResponse } from "./type";

export const baseUrl =
  "https://raw.githubusercontent.com/santiagoarielv98/santiagoarielv98/main";

export async function getProjects(): Promise<ProjectsResponse> {
  return fetch(`${baseUrl}/db/projects.json`).then((res) => res.json());
}

export async function getSkills(): Promise<SkillsResponse> {
  return fetch(`${baseUrl}/db/skills.json`).then((res) => res.json());
}
