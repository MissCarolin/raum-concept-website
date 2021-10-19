import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

 slides = [
      {image: 'https://picsum.photos/600/800'},
      {image: 'https://picsum.photos/600/800'},
      {image: 'https://picsum.photos/600/800'},
      {image: 'https://picsum.photos/600/800'},
      {image: 'https://picsum.photos/600/800'}
    ];


}
