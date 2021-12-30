import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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
  trigger('EnterLeaveImageRight', [
    state('void', style({ transform: 'translateX(0)', opacity: 0 })),
    transition(':enter', [
      style({transform: 'translateX(10%)'}),
      animate('0.5s 700ms ease-in')
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
    ])
  ]),
  trigger('EnterLeaveTextleft', [
    state('void', style({ transform: 'translateX(0)', opacity: 0 })),
    transition(':enter', [
      style({transform: 'translateX(-10%)'}),
      animate('0.5s 700ms ease-in')
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
    ])
  ]),
    ]
})
export class ContactComponent implements OnInit {
@HostBinding() class = 'app-contact';


  constructor() { }

  ngOnInit(): void {
  }

}
