import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProjectTrackerComponent } from './project-tracker.component';
import { ProjectFacade } from 'src/app/facade/projects.facade';
import { PROJECTS_MOCK } from 'src/assets/mocks/projects';
import { HeaderModule } from 'src/app/components/header/header.module';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProjectTrackerComponent', () => {
  let component: ProjectTrackerComponent;
  let fixture: ComponentFixture<ProjectTrackerComponent>;
  let facade: jasmine.SpyObj<ProjectFacade>;

  beforeEach(() => {
    const ProjectFacadeSpy = jasmine.createSpyObj('ProjectFacade', ['loadProjects'] , {
      projects$: of(PROJECTS_MOCK),
      pendingProjects$: of(PROJECTS_MOCK.filter(project => project.status === 'pending')) ,
      completedProjects$: of(PROJECTS_MOCK.filter(project => project.status === 'completed'))
    });

    TestBed.configureTestingModule({
      imports: [HeaderModule, RouterTestingModule, MaterialModule],
      declarations: [ProjectTrackerComponent],
      providers: [
        { provide: ProjectFacade, useValue: ProjectFacadeSpy }
      ]
    });
    fixture = TestBed.createComponent(ProjectTrackerComponent);
    component = fixture.componentInstance;
    facade = TestBed.inject(ProjectFacade) as jasmine.SpyObj<ProjectFacade>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
