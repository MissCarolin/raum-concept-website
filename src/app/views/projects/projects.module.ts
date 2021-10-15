import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { AppProjectsRoutingModule } from './projects.routing.module';



@NgModule({
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  imports: [CommonModule, AppProjectsRoutingModule]
})
export class AppProjectsModule { }
