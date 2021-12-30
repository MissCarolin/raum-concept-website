import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewChecked, Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChildren, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

   trigger('ImageSliderEnter1', [
    state('void', style({ transform: 'translateX(0)', opacity: 0 })),
    transition(':enter', [
      style({transform: 'translateX(40%)'}),
      animate('0.5s 400ms ease-in')
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
    ])
  ]),
  trigger('ImageSliderEnter2', [
    state('void', style({ transform: 'translateX(0)', opacity: 0 })),
    transition(':enter', [
      style({transform: 'translateX(40%)'}),
      animate('0.7s 400ms ease-in')
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
    ])
  ]),
  trigger('ImageSliderEnter3', [
    state('void', style({ transform: 'translateX(0)', opacity: 0 })),
    transition(':enter', [
      style({transform: 'translateX(40%)'}),
      animate('0.9s 400ms ease-in')
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
    ])
  ]),
  ]
})

export class HomeComponent implements AfterViewChecked {


  @ViewChildren('slideElement') elRef: QueryList<ElementRef>;

 slides = [
      {image: 'assets/images/bad4.jpg'},
      {image: 'assets/images/floors1-2.jpg'},
      {image: 'assets/images/bad3-1.jpg'},
      {image: 'assets/images/floors2-2.jpg'},
      {image: 'assets/images/bad2-2.jpg'},
    ];

  constructor(private renderer: Renderer2) { }


  @HostListener('window:scroll')

  ngAfterViewChecked(): void {
  this.elRef.map(picture => {
      console.log('picture', picture);
      const slideInAt = (window.scrollY + window.innerHeight) - picture.nativeElement.offsetHeight / 2;
      const isHalfShown = slideInAt > picture.nativeElement.offsetTop;
      if (isHalfShown) {
      this.renderer.addClass(picture.nativeElement, 'active');
    }
    });
  }



}
