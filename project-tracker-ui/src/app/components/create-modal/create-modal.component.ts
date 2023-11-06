import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
 import { tap } from 'rxjs/operators';
import { CreateFormComponent } from './create-form/create-form.component';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateFormComponent);

    dialogRef.afterClosed()
      .pipe(tap((outputData) => this.execute(outputData)))
      .subscribe(() => {
        console.log('The dialog was closed');
      });
  }

  execute(outputData: any){
    console.log('outputData: ',outputData)
  }
}
