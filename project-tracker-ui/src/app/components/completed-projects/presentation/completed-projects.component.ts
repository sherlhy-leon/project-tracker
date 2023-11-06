import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-completed-projects',
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.scss']
})
export class CompletedProjectsComponent {
  @Input() completedProjects: Project[] = [];
  displayedColumns: string[] = ['name', 'startDate', 'endDate', 'description'];
}
