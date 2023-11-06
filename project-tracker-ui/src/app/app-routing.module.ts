import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedProjectsComponent } from './components/completed-projects/completed-projects.component';
import { PendingProjectsComponent } from './components/pending-projects/pending-projects.component';
import { ProjectTrackerComponent } from './page/project-tracker/project-tracker.component';
import { AllProjectsAbstractionComponent } from './components/all-projects/abstraction/all-project.abstraction';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectTrackerComponent,
    children: [
      { path: 'all', component: AllProjectsAbstractionComponent },
      { path: 'completed', component: CompletedProjectsComponent },
      { path: 'pending', component: PendingProjectsComponent },
      { path: '**', pathMatch:'full', redirectTo: 'all' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
