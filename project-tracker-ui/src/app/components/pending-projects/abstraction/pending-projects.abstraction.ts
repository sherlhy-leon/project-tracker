import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "src/app/models/project.model";
import { ProjectFacade } from "../../../facade/projects.facade";

@Component({
    selector: 'app-abstraction-pending-projects',
    template: `<app-pending-projects [pendingProjects]="(projects$ | async)!"> </app-pending-projects>`,
})
export class PendingProjectsAbstractionComponent implements OnInit  {
    projects$: Observable<Project[]>;

    constructor(private projectFacade: ProjectFacade) {}

    ngOnInit(): void {
        this.projects$ = this.projectFacade.pendingProjects$;
        this.projectFacade.loadProjects(); //this could be moved to a resolver
    }
}