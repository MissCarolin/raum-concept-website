import { AppContactRoutingModule } from './contact.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, AppContactRoutingModule],
  exports: [ContactComponent]
})
export class AppContactModule { }
