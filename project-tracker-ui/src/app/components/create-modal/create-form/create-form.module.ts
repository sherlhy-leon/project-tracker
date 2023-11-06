import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { CreateFormComponent } from "./create-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [CreateFormComponent],
    imports: [CommonModule, ReactiveFormsModule, MaterialModule],
    providers: [],
    exports: [CreateFormComponent]
  })
  export class CreateFormModule { }
  