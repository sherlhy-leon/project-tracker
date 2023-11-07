import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingProjectsComponent } from './pending-projects.component';
import { PROJECTS_MOCK } from 'src/assets/mocks/projects';
import { Project } from 'src/app/models/project.model';
import { MatTableModule } from '@angular/material/table';

describe('PendingProjectsComponent', () => {
  let component: PendingProjectsComponent;
  let fixture: ComponentFixture<PendingProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [PendingProjectsComponent]
    });
    fixture = TestBed.createComponent(PendingProjectsComponent);
    component = fixture.componentInstance;
    component.pendingProjects = PROJECTS_MOCK.filter(project => project.status === 'pending') as Project[];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
