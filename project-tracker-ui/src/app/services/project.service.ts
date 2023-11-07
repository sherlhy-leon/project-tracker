import { HttpClient } from "@angular/common/http";
import { Project } from "../models/project.model";
import { Injectable } from '@angular/core';
import { Observable, map, tap } from "rxjs";
import { CreateData } from "../models/create-data.model";


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly API_BASE_RUL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<{ projects: Project[] }>(`${this.API_BASE_RUL}/projects`).pipe(map(res => res.projects));
  }

  completeProjects(projectsIds: string[]): Observable<Project[]> {
    return this.httpClient.put<{ projects: Project[] }>(`${this.API_BASE_RUL}/complete-projects`, projectsIds).pipe(map(res => res.projects));
  }

  createProject(project: CreateData): Observable<Project[]> {
    return this.httpClient.post<{ projects: Project[] }>(`${this.API_BASE_RUL}/create-project`, project).pipe(map(res => res.projects));
  }

  deleteProject(projectId: string): Observable<Project[]> {
    return this.httpClient.delete<{ projects: Project[] }>(`${this.API_BASE_RUL}/delete-project/${projectId}`).pipe(map(res => res.projects));
  }
}