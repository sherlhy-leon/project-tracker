import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';
import { HttpClient } from '@angular/common/http';

describe('ProjectService', () => {
    let projectService: ProjectService;
    let httpClient: HttpClient;
  
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
    });
  
    it('should be created', () => {
      expect(projectService).toBeTruthy();
    });
});