import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatenschutzComponent } from './datenschutz.component';
import { AppDatenschutzRoutingModule } from './datenschutz.routing.module';



@NgModule({
  declarations: [DatenschutzComponent],
  imports: [CommonModule, AppDatenschutzRoutingModule],
  exports: [DatenschutzComponent]

})
export class AppDatenschutzModule { }
