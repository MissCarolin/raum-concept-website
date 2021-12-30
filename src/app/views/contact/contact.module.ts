import { AppHeaderModule } from 'src/app/shared/components/header/header.module';
import { AppFooterModule } from 'src/app/shared/components/footer/footer.module';
import { AppContactRoutingModule } from './contact.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, AppContactRoutingModule, AppFooterModule, AppHeaderModule],
  exports: [ContactComponent]
})
export class AppContactModule { }
