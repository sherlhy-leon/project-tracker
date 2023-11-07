import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {
  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<CreateFormComponent>, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null)
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    const formValues = this.form.value;
    this.dialogRef.close(formValues);
  }

  disabledCreate() {
    return !this.form.get('name')?.value
  }
}
