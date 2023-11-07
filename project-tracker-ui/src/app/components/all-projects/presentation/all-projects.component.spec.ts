import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllProjectsComponent } from './all-projects.component';
import { MatTableDataSource } from '@angular/material/table';
import { PROJECTS_MOCK } from 'src/assets/mocks/projects';
import { Project } from 'src/app/models/project.model';
import { CreateModalModule } from '../../actions/create/create-modal/create-modal.module';
import { MaterialModule } from 'src/app/material.module';
import { ProjectFacade } from 'src/app/facade/projects.facade';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AllProjectsComponent', () => {
  let component: AllProjectsComponent;
  let fixture: ComponentFixture<AllProjectsComponent>;
  let facade: jasmine.SpyObj<ProjectFacade>;

  beforeEach(() => {
    const projectFacadeSpy = jasmine.createSpyObj('ProjectFacade', ['createProject']);

    TestBed.configureTestingModule({
      imports: [CreateModalModule, BrowserAnimationsModule, MaterialModule],
      declarations: [AllProjectsComponent],
      providers: [
        { provide: ProjectFacade, useValue: projectFacadeSpy }
      ]
    });
    fixture = TestBed.createComponent(AllProjectsComponent);
    component = fixture.componentInstance;
    component.allProjects = new MatTableDataSource<Project>(PROJECTS_MOCK as Project[]);
    facade = TestBed.inject(ProjectFacade) as jasmine.SpyObj<ProjectFacade>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toogleSelection', ()=> {
    it('should select the project', () => {
      const project = (PROJECTS_MOCK[0] as Project)
        component.toogleSelection(project);
        expect(component.selection.isSelected(project)).toEqual(true);
        expect(component.hideCompleteButton).toEqual(false);
    });
  });

  describe('masterToggle', ()=> {
    it('should select all checkboxes and enable the completed button', () => {
        spyOn(component, 'isAllSelected');
        component.masterToggle();
        expect(component.isAllSelected).toHaveBeenCalled();
        expect(component.selection.selected.length).toEqual(3);
        expect(component.hideCompleteButton).toEqual(false);
    });

    it('should unselect all checkboxes and disabled the completed button', () => {
      spyOn(component, 'isAllSelected').and.returnValue(true);
      component.masterToggle();
      expect(component.isAllSelected).toHaveBeenCalled();
      expect(component.selection.selected.length).toEqual(0);
      expect(component.hideCompleteButton).toEqual(true);
    });
  });

  describe('isCompleted', ()=> {
    it('should return true', () => {
        const result = component.isCompleted(PROJECTS_MOCK[2] as Project);
        expect(result).toEqual(true);
    });

    it('should return false', () => {
      const result = component.isCompleted(PROJECTS_MOCK[0] as Project);
      expect(result).toEqual(false);
    });
  });

  describe('completeProjectsHandler', ()=> {
    it('should emit to complete a project and clear selection', () => {
      const eventEmitterSpy = spyOn(component.completeProjects, 'emit');
      const project = (PROJECTS_MOCK[0] as Project);
      component.toogleSelection(project);
      component.completeProjectsHandler();
      expect(eventEmitterSpy).toHaveBeenCalledWith(['195d6449-8789-450d-b81a-87b294ee4c01']);
      expect(component.selection.selected.length).toEqual(0);
    });
  });

  describe('deleteProjectHandler', ()=> {
    it('should emit to edit a project', () => {
        const eventEmitterSpy = spyOn(component.deleteProject, 'emit');
        component.deleteProjectHandler('195d6449-8789-450d-b81a-87b294ee4c02');
        expect(eventEmitterSpy).toHaveBeenCalledWith('195d6449-8789-450d-b81a-87b294ee4c02');
    });
  });

  describe('isAllSelected', ()=> {
    it('should return false', () => {
      const project = (PROJECTS_MOCK[2] as Project);
      component.toogleSelection(project);
      expect(component.isAllSelected()).toEqual(false);
    });
  });

  describe('hover', ()=> {
    it('should set the property hoverRowId', () => {
      const project = (PROJECTS_MOCK[2] as Project);
      component.hover(project);
      expect(component.hoverRowId).toEqual('195d6449-8789-450d-b81a-87b294ee4c03');
    });
  });

});
