import { AppFooterModule } from 'src/app/shared/components/footer/footer.module';
import { AppHeaderModule } from './../../shared/components/header/header.module';
import { AppServicesRoutingModule } from './services.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';



@NgModule({
  declarations: [ServicesComponent],
  imports: [CommonModule, AppServicesRoutingModule, AppHeaderModule, AppFooterModule],
  exports: [ServicesComponent]
})
export class AppServicesModule { }
