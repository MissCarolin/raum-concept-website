import { AppHeaderModule } from 'src/app/shared/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppHomeRoutingModule } from './home.routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AppFooterModule } from 'src/app/shared/footer/footer.module';




@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [AppHeaderModule, CommonModule, AppHomeRoutingModule, MatButtonModule, MatIconModule,
  MatCarouselModule.forRoot()]
})
export class AppHomeModule { }
