import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { AllProjectsComponent } from "./all-projects.component";
import { ProjectService } from "src/app/services/project.service";

@NgModule({
    declarations: [AllProjectsComponent],
    imports: [CommonModule, MaterialModule],
    providers: [ProjectService],
    exports: [AllProjectsComponent]
  })
  export class AllProjectsModule { }
  