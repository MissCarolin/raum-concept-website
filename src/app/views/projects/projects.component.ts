import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterContentChecked, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
  // trigger('fadeInOut', [
  //   state('void', style({
  //     opacity: 0
  //   })),
  //   transition('void <=> *', animate(2000)),
  // ]),
  trigger('EnterLeaveHeadline', [
    state('void', style({ transform: 'translateX(0)', opacity: 0 })),
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('0.4s 300ms ease-in')
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
    ])
  ]),
  trigger('EnterLeaveProject1', [
  state('void', style({ transform: 'translateX(0)', opacity: 0 })),
  transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate('0.8s 700ms ease-in')
  ]),
  transition(':leave', [
    animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
  ])
]),
trigger('EnterLeaveSlider', [
  state('void', style({ transform: 'translateX(0)', opacity: 0 })),
  transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate('0.5s 100ms ease-in')
  ]),
  transition(':leave', [
    animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
  ])
])

]
})
export class ProjectsComponent implements AfterViewChecked {


  @ViewChildren('slideElement') elRef: QueryList<ElementRef>;


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
