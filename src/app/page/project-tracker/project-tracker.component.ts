import { Component, NgZone } from '@angular/core';
import { NAV_LINKS } from './project-tracker.constants';

@Component({
  selector: 'app-project-tracker',
  templateUrl: './project-tracker.component.html',
  styleUrls: ['./project-tracker.component.scss']
})
export class ProjectTrackerComponent {
  projectsTabs: {url: string; label: string;}[];
  constructor(private readonly zone: NgZone) {
    this.projectsTabs = NAV_LINKS
    // this.zone.run(()=>{})
  }
}
