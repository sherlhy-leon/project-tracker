import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, mergeMap } from "rxjs";
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectFacade {
    #projects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
    projects$: Observable<Project[]> = this.#projects.asObservable();
    constructor(private projectService: ProjectService) { }

    loadProjects() {
        this.projectService.getAllProjects().subscribe((projects) => {
            this.#projects.next(projects);
        });
    } 
}