import { AppFooterModule } from '../../shared/components/footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { AppProjectsRoutingModule } from './projects.routing.module';
import { AppHeaderModule } from 'src/app/shared/components/header/header.module';



@NgModule({
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  imports: [AppHeaderModule, AppFooterModule, CommonModule, AppProjectsRoutingModule]
})
export class AppProjectsModule { }
