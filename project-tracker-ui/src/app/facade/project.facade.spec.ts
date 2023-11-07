import { TestBed } from '@angular/core/testing';
import { ProjectFacade } from './projects.facade';
import { ProjectService } from '../services/project.service';
import { COMPLETE_RESP, CREATE_RESP, DELETED_RESP, PROJECTS_MOCK } from 'src/assets/mocks/projects';
import { of } from 'rxjs';

describe('ProjectFacade', () => {
    let projectFacade: any;
    let projectService: any;
  
    beforeEach(() => {
      const projectServiceSpy = jasmine.createSpyObj('ProjectService', ['getAllProjects', 'completeProjects', 'createProject', 'deleteProject']);
      TestBed.configureTestingModule({
        providers: [
          ProjectService,
          { provide: ProjectService, useValue: projectServiceSpy }
        ],
      });
  
      projectFacade = TestBed.inject(ProjectFacade);
      projectService = TestBed.inject(ProjectService);
    });
  
    it('should be created', () => {
      expect(projectFacade).toBeTruthy();
    });

    describe('loadProjects' ,() => {
        it('', () => {
            projectService.getAllProjects.and.returnValue(of(PROJECTS_MOCK));
            projectFacade.loadProjects();
            expect(projectService.getAllProjects).toHaveBeenCalled();
        });
    });

    describe('completeProjects' ,() => {
        it('', () => {
            projectService.completeProjects.and.returnValue(of(COMPLETE_RESP));
            projectFacade.completeProjects([PROJECTS_MOCK[0].id]);
            expect(projectService.completeProjects).toHaveBeenCalled();

        });
    });

    describe('createProject' ,() => {
        it('', () => {
            projectService.createProject.and.returnValue(of(CREATE_RESP));
            projectFacade.createProject({name: 'Project X', description:''});
            expect(projectService.createProject).toHaveBeenCalled();
        });
    });

    describe('deleteProject' ,() => {
        it('', () => {
            projectService.deleteProject.and.returnValue(of(DELETED_RESP));
            projectFacade.deleteProject(PROJECTS_MOCK[3].id)
            expect(projectService.deleteProject).toHaveBeenCalled();
        });
    });
});