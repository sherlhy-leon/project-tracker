import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-pending-projects',
  templateUrl: './pending-projects.component.html',
  styleUrls: ['./pending-projects.component.scss']
})
export class PendingProjectsComponent {
  @Input() pendingProjects: Project[] = [];
  displayedColumns: string[] = ['name', 'startDate', 'endDate', 'description'];
}
