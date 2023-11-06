import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { CreateFormComponent } from './create-form/create-form.component';
import { ProjectFacade } from 'src/app/facade/projects.facade';
import { CreateData } from 'src/app/models/create-data.model';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent {
  constructor(public dialog: MatDialog, private projectFacade: ProjectFacade) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateFormComponent);

    dialogRef.afterClosed()
      .pipe(tap((outputData) => this.execute(outputData)))
      .subscribe(() => {
        console.log('The dialog was closed');
      });
  }

  execute(outputData: CreateData) {
    console.log('outputData: ', outputData)
    this.projectFacade.createProject(outputData)
  }
}
