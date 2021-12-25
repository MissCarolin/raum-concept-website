import { AppImpressumRoutingModule } from './impressum.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpressumComponent } from './impressum.component';



@NgModule({
  declarations: [ImpressumComponent],
  imports: [CommonModule, AppImpressumRoutingModule],
  exports: [ImpressumComponent]
})
export class AppImpressumModule { }
