import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { FilterComponent } from "./filter.component";

@NgModule({
    declarations: [FilterComponent],
    imports: [CommonModule, MaterialModule],
    exports: [FilterComponent]
  })
  export class FilterrModule { }
  