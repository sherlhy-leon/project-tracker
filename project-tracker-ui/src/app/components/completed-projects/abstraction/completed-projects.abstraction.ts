import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "src/app/models/project.model";
import { ProjectFacade } from "../../../facade/projects.facade";

@Component({
    selector: 'app-abstraction-completed-projects',
    template: `<app-completed-projects [projects]="(projects$ | async)!"> </app-completed-projects>`,
})
export class CompletedProjectsAbstractionComponent implements OnInit  {
    projects$: Observable<Project[]>;

    constructor(private projectFacade: ProjectFacade) {}

    ngOnInit(): void {
        this.projects$ = this.projectFacade.completedProjects$;
        this.projectFacade.loadProjects(); //this could be moved to a resolver
    }
}