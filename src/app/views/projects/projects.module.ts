import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { AppProjectsRoutingModule } from './projects.routing.module';
import { AppHeaderModule } from 'src/app/shared/header/header.module';



@NgModule({
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  imports: [AppHeaderModule, CommonModule, AppProjectsRoutingModule]
})
export class AppProjectsModule { }
