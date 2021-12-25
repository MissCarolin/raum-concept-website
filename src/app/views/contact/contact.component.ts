import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
@HostBinding() class = 'app-contact';


  constructor() { }

  ngOnInit(): void {
  }

}
