import { Component, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { Filter } from 'src/app/models/filter.model';
import { Project } from 'src/app/models/project.model';

export enum ICON {
  DOWN = 'arrow_drop_down',
  UP = 'arrow_drop_up'
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filters: Filter<string>[];
  @Input() title: string;
  @Input() chipLabel: string;
  arrowIcon: ICON = ICON.DOWN
  isSomeFilterSelected: boolean = false;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  filterOptions = [
    { value: 'Completed', id: 'completed', selected: false },
    { value: 'Pending', id: 'pending', selected: false }
  ];


  constructor() {
    
  }

  selectFilter(filter: Filter<string>) {

  }

  unselectFilters() {

  }

  toggleIcon() {
    this.arrowIcon = this.arrowIcon === ICON.DOWN ? ICON.UP : ICON.DOWN;
  }

  closeMenu() {
    this.trigger.closeMenu();
  }

}
