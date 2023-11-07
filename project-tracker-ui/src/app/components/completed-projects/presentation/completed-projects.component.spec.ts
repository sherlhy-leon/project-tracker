import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedProjectsComponent } from './completed-projects.component';
import { MatTableModule } from '@angular/material/table';

describe('CompletedProjectsComponent', () => {
  let component: CompletedProjectsComponent;
  let fixture: ComponentFixture<CompletedProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [CompletedProjectsComponent]
    });
    fixture = TestBed.createComponent(CompletedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
