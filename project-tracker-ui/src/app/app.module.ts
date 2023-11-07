import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ProjectTrackerModule } from './page/project-tracker/project-tracker.module';
import { AllProjectsModule } from './components/all-projects/all-projects.module';
import { CompletedProjectsModule } from './components/completed-projects/completed-projects.module';
import { PendingProjectsModule } from './components/pending-projects/pending-projects.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProjectTrackerModule,
    AllProjectsModule,
    CompletedProjectsModule,
    PendingProjectsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
