import { ProjectsResponse, SkillsResponse } from "./type";

const baseUrl =
  "https://raw.githubusercontent.com/santiagoarielv98/santiagoarielv98/main/db";

export async function getProjects(): Promise<ProjectsResponse> {
  return fetch(`${baseUrl}/projects.json`).then((res) => res.json());
}

export async function getSkills(): Promise<SkillsResponse> {
  return fetch(`${baseUrl}/skills.json`).then((res) => res.json());
}
