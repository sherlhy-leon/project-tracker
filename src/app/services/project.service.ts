import { Project } from "../models/project.model";
import { Injectable } from '@angular/core';

const PROJECTS: Project[] = [
    {
      id: "1",
      name: 'Proyecto 1',
      description: 'Descripción del Proyecto 1',
      status: 'Pending',
      startDate: new Date(2022,4,6)
    },
    {
      id: "2",
      name: 'Proyecto 2',
      description: 'Descripción del Proyecto 2',
      status: 'Pending',
      startDate: new Date(2023,6,20)

    },
    {
      id: "3",
      name: 'Proyecto 3',
      description: 'Descripción del Proyecto 3',
      status: 'Completed',
      startDate: new Date(2021,3,6),
      endDate: new Date(2021,9,30)
    },
    {
      id: "4",
      name: 'Proyecto 4',
      description: 'Descripción del Proyecto 4',
      status: 'Pending',
      startDate: new Date(2023,10,15)
    },
    {
      id: "5",
      name: 'Proyecto 5',
      description: 'Descripción del Proyecto 5',
      status: 'Completed',
      startDate: new Date(2023,2,10),
      endDate: new Date(2023,6,24)
    },
];

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = PROJECTS;

  constructor() {}

  getAllProjects(): Project[] {
    return this.projects;
  }

  getPendingProjects(): Project[] {
    return this.projects.filter(project => project.status === 'Pending');
  }

  getCompletedProjects(): Project[] {
    return this.projects.filter(project => project.status === 'Completed');
  }

  markAsCompleted(project: Project): void {
    const index = this.projects.findIndex((p) => p.id === project.id);
    if (index !== -1) {
        this.projects[index] = {
            ...this.projects[index],
            status: 'Completed',
            endDate: new Date()
        }
    }
  }
}