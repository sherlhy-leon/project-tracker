import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "src/app/models/project.model";
import { ProjectFacade } from "../../../facade/projects.facade";

@Component({
    selector: 'app-abstraction-all-projects',
    template: `<app-all-projects 
                [projects]="(projects$ | async)!"
                (completeProjects)="completeProjects($event)"
                (deleteProject)="deleteProject($event)"
                > 
               </app-all-projects>`,
})
export class AllProjectsAbstractionComponent implements OnInit  {
    projects$: Observable<Project[]>;
    completeProjects: Function;
    deleteProject: Function;

    constructor(private projectFacade: ProjectFacade) {}

    ngOnInit(): void {
        this.projects$ = this.projectFacade.projects$;
        this.completeProjects = this.projectFacade.completeProjects.bind(this.projectFacade);
        this.deleteProject = this.projectFacade.deleteProject.bind(this.projectFacade);
        this.projectFacade.loadProjects(); //this could be moved to a resolver
    }
}