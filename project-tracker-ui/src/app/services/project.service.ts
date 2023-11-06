import { HttpClient } from "@angular/common/http";
import { Project } from "../models/project.model";
import { Injectable } from '@angular/core';
import { Observable, map, tap } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly API_BASE_RUL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<{projects: Project[]}>(`${this.API_BASE_RUL}/projects`).pipe(tap((d) => console.log("data received", d)), map(res => res.projects));
  }

  completeProjects(projectsIds: string[]): Observable<Project[]> {
    return this.httpClient.put<{projects: Project[]}>(`${this.API_BASE_RUL}/complete-projects`, projectsIds).pipe(map(res => res.projects));
  }
}