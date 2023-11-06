import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from "rxjs";
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

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

    constructor(private projectService: ProjectService) { }

    loadProjects() {
        if (this.#projects.getValue().length === 0) {
            this.projectService.getAllProjects().subscribe((projects) => {
                this.#projects.next(projects);
            });
        }
    }
}