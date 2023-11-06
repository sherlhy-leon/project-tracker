import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-completed-projects',
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.scss']
})
export class CompletedProjectsComponent {
  @Input() projects: Project[] = [];
  displayedColumns: string[] = ['name', 'startDate', 'endDate', 'description'];
}
