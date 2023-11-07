import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModalComponent } from './create-modal.component';
import { ProjectFacade } from 'src/app/facade/projects.facade';
import { MatDialog } from '@angular/material/dialog';

describe('CreateModalComponent', () => {
  let component: CreateModalComponent;
  let fixture: ComponentFixture<CreateModalComponent>;
  let facade: jasmine.SpyObj<ProjectFacade>;
  let matDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open', 'afterClosed']);
    const ProjectFacadeSpy = jasmine.createSpyObj('ProjectFacade', ['createProject']);

    TestBed.configureTestingModule({
      declarations: [CreateModalComponent],
      providers: [
        { provide: MatDialog, useValue: matDialogSpy },
        { provide: ProjectFacade, useValue: ProjectFacadeSpy }
      ]
    });
    fixture = TestBed.createComponent(CreateModalComponent);
    component = fixture.componentInstance;
    matDialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    facade = TestBed.inject(ProjectFacade) as jasmine.SpyObj<ProjectFacade>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
