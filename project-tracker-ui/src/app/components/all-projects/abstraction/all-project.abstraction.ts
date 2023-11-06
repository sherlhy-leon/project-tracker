import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Project } from "src/app/models/project.model";
import { ProjectService } from "src/app/services/project.service";
import { ProjectFacade } from "../../../facade/all-projects.facade";

@Component({
    selector: 'app-abstraction-all-projects',
    template: `<app-all-projects [projects]="(projects$ | async)!"> </app-all-projects>`,
})
export class AllProjectsAbstractionComponent implements OnInit  {
    projects$: Observable<Project[]>;

    constructor(private allProjectFacade: ProjectFacade) {}

    ngOnInit(): void {
        this.projects$ = this.allProjectFacade.projects$;
        this.allProjectFacade.loadProjects(); //this could be moved to a resolver
    }
}