import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CreateModalComponent } from './create-modal.component';
import { ProjectFacade } from 'src/app/facade/projects.facade';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateFormComponent } from '../create-form/create-form.component';

describe('CreateModalComponent', () => {
  let component: CreateModalComponent;
  let fixture: ComponentFixture<CreateModalComponent>;
  let facade: jasmine.SpyObj<ProjectFacade>;
  let matDialog: any;
  let matDialogRef: any

  beforeEach(() => { 
    const matDialogSpy = jasmine.createSpyObj('MatDialog', [ 'open', 'afterClosed' ]);
    const matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', [ 'afterClosed' ]);
    const projectFacadeSpy = jasmine.createSpyObj('ProjectFacade', ['createProject']);

    TestBed.configureTestingModule({
      declarations: [CreateModalComponent],
      providers: [
        { provide: MatDialog, useValue: matDialogSpy },
        { provide: MatDialogRef, useValue: matDialogRefSpy },
        { provide: ProjectFacade, useValue: projectFacadeSpy }
      ]
    });
    fixture = TestBed.createComponent(CreateModalComponent);
    component = fixture.componentInstance;
    matDialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    matDialogRef = TestBed.inject(MatDialogRef)
    facade = TestBed.inject(ProjectFacade) as jasmine.SpyObj<ProjectFacade>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('openDialog', () => {
    it('', () => {
        const newProject = {
          name: 'Project 1', 
          description: 'Description 1'
        }
        const dialogSpy =  matDialog.open.and.returnValue({
          afterClosed: () => of(newProject)
        });
        component.openDialog();
        expect(dialogSpy).toHaveBeenCalledWith(CreateFormComponent);
        expect(facade.createProject).toHaveBeenCalledWith(newProject);
    });
  });

});
