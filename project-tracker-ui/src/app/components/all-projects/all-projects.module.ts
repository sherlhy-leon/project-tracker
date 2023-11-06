import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { AllProjectsComponent } from "./presentation/all-projects.component";
import { ProjectService } from "src/app/services/project.service";
import { AllProjectsAbstractionComponent } from "./abstraction/all-project.abstraction";

@NgModule({
    declarations: [AllProjectsComponent, AllProjectsAbstractionComponent],
    imports: [CommonModule, MaterialModule],
    providers: [ProjectService],
    exports: [AllProjectsComponent]
  })
  export class AllProjectsModule { }
  