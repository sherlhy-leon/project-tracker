import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectService } from 'src/app/services/project.service';
import { ProjectsComponent } from './all-projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let projectService;

  beforeEach(() => {
    const projectServiceSpy = jasmine.createSpyObj('ProjectService', ['getAllProjects']);
    TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      providers: [{ provide: ProjectService, useValue: projectServiceSpy }]
    });
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    projectService = TestBed.inject(ProjectService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
