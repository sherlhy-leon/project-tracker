import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { PROJECTS_MOCK } from 'src/assets/mocks/projects';
import { Project } from '../models/project.model';

describe('ProjectService', () => {
    let projectService: ProjectService;
    let httpClient: any;
  
    beforeEach(() => {
      const httClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
      TestBed.configureTestingModule({
        providers: [
          ProjectService,
          { provide: HttpClient, useValue: httClientSpy }
        ],
      });
  
      projectService = TestBed.inject(ProjectService);
      httpClient = TestBed.inject(HttpClient);
      httpClient.get.and.returnValue(of({ projects: PROJECTS_MOCK }));
      httpClient.post.and.returnValue(of({ projects: PROJECTS_MOCK }));
      httpClient.put.and.returnValue(of({ projects: PROJECTS_MOCK }));
      httpClient.delete.and.returnValue(of({ projects: PROJECTS_MOCK }));
    });
  
    it('should be created', () => {
      expect(projectService).toBeTruthy();
    });

    describe('getAllProjects',() => {
      it('',() => {
        projectService.getAllProjects();
        expect(httpClient.get).toHaveBeenCalledWith('http://localhost:3000/projects');
      });
    });

    describe('completeProjects',() => {
      it('',() => {
        const ids = [PROJECTS_MOCK[0].id]
        projectService.completeProjects(ids);
        expect(httpClient.put).toHaveBeenCalledWith('http://localhost:3000/complete-projects', ids);
      });
    });

    describe('createProject',() => {
      it('',() => {
        const newProject = { name: 'Projects 45', description: 'New Project'};
        projectService.createProject(newProject);
        expect(httpClient.post).toHaveBeenCalledWith('http://localhost:3000/create-project', newProject);

      });
    });

    describe('deleteProject',() => {
      it('',() => {
        projectService.deleteProject("195d6449-8789-450d-b81a-87b294ee4c02");
        expect(httpClient.delete).toHaveBeenCalledWith('http://localhost:3000/delete-project/195d6449-8789-450d-b81a-87b294ee4c02');
      });
    });
});