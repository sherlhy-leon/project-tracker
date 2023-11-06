import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { CompletedProjectsComponent } from "./completed-projects.component";
import { ProjectService } from "src/app/services/project.service";

@NgModule({
    declarations: [CompletedProjectsComponent],
    imports: [CommonModule, MaterialModule],
    providers: [ProjectService],
    exports: [CompletedProjectsComponent]
  })
  export class CompletedProjectsModule { }
  