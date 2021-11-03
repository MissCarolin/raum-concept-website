import { AppFooterModule } from '../../shared/components/footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { AppProjectsRoutingModule } from './projects.routing.module';
import { AppHeaderModule } from 'src/app/shared/components/header/header.module';
import { AppearDirective } from 'src/app/shared/directives/appear-on-scroll.directive';



@NgModule({
  declarations: [ProjectsComponent, AppearDirective],
  exports: [ProjectsComponent],
  imports: [AppHeaderModule, AppFooterModule, CommonModule, AppProjectsRoutingModule]
})
export class AppProjectsModule { }
