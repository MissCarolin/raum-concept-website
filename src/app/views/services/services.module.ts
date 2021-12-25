import { AppServicesRoutingModule } from './services.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';



@NgModule({
  declarations: [ServicesComponent],
  imports: [CommonModule, AppServicesRoutingModule],
  exports: [ServicesComponent]
})
export class AppServicesModule { }
