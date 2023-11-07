import { Component } from '@angular/core';
import { ProjectFacade } from 'src/app/facade/projects.facade';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-project-tracker',
  templateUrl: './project-tracker.component.html',
  styleUrls: ['./project-tracker.component.scss']
})
export class ProjectTrackerComponent {
  projectsTabs: { url: string; label: string; count: Observable<number> }[];

  constructor(private projectFacade: ProjectFacade) {
    this.projectFacade.loadProjects();
    this.projectsTabs = [
      { url: '/projects/all', label: 'ALL', count: this.projectFacade.projects$.pipe(map(projects => projects.length)) },
      { url: '/projects/pending', label: 'PENDING', count: this.projectFacade.pendingProjects$.pipe(map(projects => projects.length)) },
      { url: '/projects/completed', label: 'COMPLETED', count: this.projectFacade.completedProjects$.pipe(map(projects => projects.length)) }
    ]
  }
}
