import { AppFooterModule } from 'src/app/shared/components/footer/footer.module';
import { AppHeaderModule } from 'src/app/shared/components/header/header.module';
import { AppImpressumRoutingModule } from './impressum.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpressumComponent } from './impressum.component';



@NgModule({
  declarations: [ImpressumComponent],
  imports: [CommonModule, AppImpressumRoutingModule, AppHeaderModule, AppFooterModule],
  exports: [ImpressumComponent]
})
export class AppImpressumModule { }
