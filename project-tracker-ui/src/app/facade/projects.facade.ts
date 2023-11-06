import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from "rxjs";
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { CreateData } from '../models/create-data.model';

@Injectable({
    providedIn: 'root'
})
export class ProjectFacade {
    #projects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
    projects$: Observable<Project[]> = this.#projects.asObservable();
    completedProjects$: Observable<Project[]> = this.#projects.asObservable().pipe(
        map(projects => projects.filter(project => project.status === 'completed')),
        tap((data) => console.log("completed data", data))
    );

    pendingProjects$: Observable<Project[]> = this.#projects.asObservable().pipe(
        map(projects => projects.filter(project => project.status === 'pending')),
        tap((data) => console.log("pending data", data))
    );

    constructor(private projectService: ProjectService) { }

    loadProjects() {
        if (this.#projects.getValue().length === 0) {
            this.projectService.getAllProjects().subscribe((projects) => {
                this.#projects.next(projects);
            });
        }
    }

    completeProjects(projectsIds: string[]) {
        this.projectService.completeProjects(projectsIds).subscribe(projects => {
            this.#projects.next(projects);
        });
    }

    createProject(project: CreateData) {
        this.projectService.createProject(project).subscribe(projects => {
            this.#projects.next(projects);
        });
    }

    deleteProject(projectId: string) {
        this.projectService.deleteProject(projectId).subscribe(projects => {
            this.#projects.next(projects);
        });
    }

}