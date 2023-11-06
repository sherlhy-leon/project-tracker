import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { PendingProjectsComponent } from "./pending-projects.component";
import { ProjectService } from "src/app/services/project.service";

@NgModule({
    declarations: [PendingProjectsComponent],
    imports: [CommonModule, MaterialModule],
    providers: [ProjectService],
    exports: [PendingProjectsComponent]
  })
  export class PendingProjectsModule { }
  