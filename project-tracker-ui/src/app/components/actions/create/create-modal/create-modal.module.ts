import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { CreateModalComponent } from "./create-modal.component";
import { CreateFormModule } from "../create-form/create-form.module";

@NgModule({
    declarations: [CreateModalComponent],
    imports: [CommonModule, MaterialModule, CreateFormModule],
    providers: [],
    exports: [CreateModalComponent]
  })
  export class CreateModalModule { }
  