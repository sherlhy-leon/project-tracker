import { NgModule } from "@angular/core";
import { ProjectTrackerComponent } from "./project-tracker.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material.module";

@NgModule({
    declarations: [ProjectTrackerComponent],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [ProjectTrackerComponent]
  })
  export class ProjectTrackerModule { }
  