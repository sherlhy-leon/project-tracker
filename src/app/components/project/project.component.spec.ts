import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { ProjectService } from 'src/app/services/project.service';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let projectService;

  beforeEach(() => {
    const projectServiceSpy = jasmine.createSpyObj('ProjectService', ['getAllProjects']);
    TestBed.configureTestingModule({
      declarations: [ProjectComponent],
      providers: [{ provide: ProjectService, useValue: projectServiceSpy }]
    });
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    projectService = TestBed.inject(ProjectService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
