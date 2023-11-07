import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectTrackerComponent } from './page/project-tracker/project-tracker.component';
import { AllProjectsAbstractionComponent } from './components/all-projects/abstraction/all-project.abstraction';
import { CompletedProjectsAbstractionComponent } from './components/completed-projects/abstraction/completed-projects.abstraction';
import { PendingProjectsAbstractionComponent } from './components/pending-projects/abstraction/pending-projects.abstraction';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectTrackerComponent,
    children: [
      { path: 'all', component: AllProjectsAbstractionComponent },
      { path: 'completed', component: CompletedProjectsAbstractionComponent },
      { path: 'pending', component: PendingProjectsAbstractionComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'all' },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'projects/all' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
