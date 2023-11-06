import { ChangeDetectorRef, Component, OnInit, ViewChild, Input  } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent {
  @Input() set projects(data: Project[]) {
    if(data?.length > 0) {
      console.log("DATA RECEIVED IN COMPONENT", data)
      this.allProjects = new MatTableDataSource<Project>(data);
    }
  }

  allProjects: MatTableDataSource<Project>// = new MatTableDataSource<Project>([]);
  displayedColumns: string[] = ['select', 'name', 'status', 'startDate', 'endDate', 'description'];
  selection = new SelectionModel<Project>(true, []);
  hideCompleteButton: boolean = true;
  pageSize: number = 5;

  @ViewChild(MatSort) set matSort(ms:MatSort) {
    if(ms){
      this.sort = ms;
      this.setDataSourceAttributes();
    }
  }

  @ViewChild(MatPaginator) set matPaginator( mp: MatPaginator) {
    if(mp){
      this.paginator = mp;
      this.setDataSourceAttributes();
    }
  }
  private sort: MatSort;
  private paginator: MatPaginator;

  constructor(private projectService: ProjectService, private cdr: ChangeDetectorRef) {}

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.allProjects.data.forEach(row => {
        if(row.status === 'Pending') {
          this.selection.select(row)
        }
      });
    this.cdr.detectChanges();
    this.hideCompleteButton = !(this.selection.selected.length > 0);
  }

  toogleSelection(project: Project) {
    const toogleValue =  this.selection.select(project)
    this.hideCompleteButton = !this.selection.hasValue();
    return toogleValue;
  }
  
  isAllSelected() {
    return this.selection.selected.length === this.allProjects?.data.filter(p => p.status === 'Pending').length;
  }

  completeProject() {
    this.projectService.markAsCompleted(this.selection.selected.map(p => p.id));
    this.selection.clear();
  }

  isCompleted(project: Project) {
    return project.status === 'Completed';
  }

  private setDataSourceAttributes() {
    this.allProjects.paginator = this.paginator;
    this.allProjects.sortingDataAccessor = (row: Project, columnName: string) => {
      switch(columnName) {
          default:
            return row[columnName as keyof Project] as string
      }
    }
    this.allProjects.sort = this.sort;
  }
}
