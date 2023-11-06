import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { PendingProjectsComponent } from "./presentation/pending-projects.component";
import { ProjectService } from "src/app/services/project.service";
import { PendingProjectsAbstractionComponent } from "./abstraction/pending-projects.abstraction";

@NgModule({
    declarations: [PendingProjectsComponent, PendingProjectsAbstractionComponent],
    imports: [CommonModule, MaterialModule],
    providers: [ProjectService],
    exports: [PendingProjectsComponent]
  })
  export class PendingProjectsModule { }
  