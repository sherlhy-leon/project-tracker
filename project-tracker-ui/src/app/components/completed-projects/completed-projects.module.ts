import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { CompletedProjectsComponent } from "./presentation/completed-projects.component";
import { ProjectService } from "src/app/services/project.service";
import { CompletedProjectsAbstractionComponent } from "./abstraction/completed-projects.abstraction";

@NgModule({
    declarations: [CompletedProjectsComponent, CompletedProjectsAbstractionComponent],
    imports: [CommonModule, MaterialModule],
    providers: [ProjectService],
    exports: [CompletedProjectsComponent]
  })
  export class CompletedProjectsModule { }
  