import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-pending-projects',
  templateUrl: './pending-projects.component.html',
  styleUrls: ['./pending-projects.component.scss']
})
export class PendingProjectsComponent {
  @Input() pendingProjects: Project[] = [];
  displayedColumns: string[] = ['select', 'name', 'startDate', 'endDate', 'description'];
  selection = new SelectionModel<Project>(true, []);
  
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.pendingProjects.forEach(row => this.selection.select(row));
  }
  
  isAllSelected() {
    return this.selection.selected.length ===  this.pendingProjects.length;
  }
}
