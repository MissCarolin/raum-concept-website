import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppHomeRoutingModule } from './home.routing.module';



@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, AppHomeRoutingModule]
})
export class AppHomeModule { }
