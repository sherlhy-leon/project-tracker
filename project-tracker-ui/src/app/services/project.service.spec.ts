import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';

describe('ProjectService', () => {
    let projectService: ProjectService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [ProjectService],
      });
  
      projectService = TestBed.inject(ProjectService);
    });
  
    it('should be created', () => {
      expect(projectService).toBeTruthy();
    });
});