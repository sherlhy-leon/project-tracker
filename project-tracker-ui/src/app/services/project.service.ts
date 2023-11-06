import { HttpClient } from "@angular/common/http";
import { Project } from "../models/project.model";
import { Injectable } from '@angular/core';
import { Observable, map, tap } from "rxjs";

const PROJECTS: Project[] = [
    {
      id: "1",
      name: 'Proyecto 1',
      description: 'Descripción del Proyecto 1',
      status: 'pending',
      startDate: new Date(2022,4,6)
    },
    {
      id: "2",
      name: 'Proyecto 2',
      description: 'Descripción del Proyecto 2',
      status: 'pending',
      startDate: new Date(2023,6,20)

    },
    {
      id: "3",
      name: 'Proyecto 3',
      description: 'Descripción del Proyecto 3',
      status: 'completed',
      startDate: new Date(2021,3,6),
      endDate: new Date(2021,9,30)
    },
    {
      id: "4",
      name: 'Proyecto 4',
      description: 'Descripción del Proyecto 4',
      status: 'pending',
      startDate: new Date(2023,10,15)
    },
    {
      id: "5",
      name: 'Proyecto 5',
      description: 'Descripción del Proyecto 5',
      status: 'completed',
      startDate: new Date(2023,2,10),
      endDate: new Date(2023,6,24)
    },
    {
      id: "6",
      name: 'Proyecto 6',
      description: 'Descripción del Proyecto 6',
      status: 'completed',
      startDate: new Date(2023,2,10),
      endDate: new Date(2023,6,24)
    },
    {
      id: "7",
      name: 'Proyecto 7',
      description: 'Descripción del Proyecto 7',
      status: 'completed',
      startDate: new Date(2023,2,10),
      endDate: new Date(2023,6,24)
    },
];

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = PROJECTS;
  private readonly API_BASE_RUL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<{projects: Project[]}>(`${this.API_BASE_RUL}/projects`).pipe(tap((d) => console.log("data received", d)), map(res => res.projects));
  }

  getPendingProjects(): Project[] {
    return this.projects.filter(project => project.status === 'pending');
  }


  markAsCompleted(projectsIds: string[]): void {
    this.httpClient.put<{projects: Project[]}>(`${this.API_BASE_RUL}/complete-projects`, projectsIds).pipe(map(res => res.projects)).subscribe(data => this.projects = data);
  }
}