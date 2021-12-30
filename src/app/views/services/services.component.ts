import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewChecked, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
   animations: [
  trigger('EnterLeaveHeadlineLeft', [
    state('void', style({ transform: 'translateX(0)', opacity: 0 })),
    transition(':enter', [
      style({transform: 'translateX(-10%)'}),
      animate('0.5s ease-in')
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
    ])
  ]),
    trigger('EnterLeaveProject1', [
    state('void', style({ transform: 'translateX(0)', opacity: 0 })),
    transition(':enter', [
      style({transform: 'translateX(-20%)'}),
      animate('0.6s 600ms ease-in')
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
    ])
]),
    trigger('EnterLeaveProject2', [
    state('void', style({ transform: 'translateX(0)', opacity: 0 })),
    transition(':enter', [
      style({transform: 'translateX(-20%)'}),
      animate('0.5s 500ms ease-in')
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
    ])
]),
    trigger('EnterLeaveProject3', [
    state('void', style({ transform: 'translateX(0)', opacity: 0 })),
    transition(':enter', [
      style({transform: 'translateX(-20%)'}),
      animate('0.4s 400ms ease-in')
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
    ])
]),
 trigger('EnterLeaveProject4', [
    state('void', style({ transform: 'translateY(0)', opacity: 0 })),
    transition(':enter', [
      style({transform: 'translateY(20%)'}),
      animate('0.3s 1200ms ease-in')
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
    ])
]),
   ]
})
export class ServicesComponent implements AfterViewChecked {

  @ViewChild('slideElement') elRef: ElementRef<HTMLElement>;


  constructor(private renderer: Renderer2) { }

  @HostListener('window:scroll')


  ngAfterViewChecked(): void {
      const slideInAt = (window.scrollY + window.innerHeight) - this.elRef.nativeElement.offsetHeight / 2;
      const isHalfShown = slideInAt > this.elRef.nativeElement.offsetTop;
      if (isHalfShown) {
      this.renderer.addClass(this.elRef.nativeElement, 'active');
    }
  }

}
