import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  @Input() routerLink: string | any [];

  constructor() { 

    this.routerLink = ''
    
  }

  ngOnInit(): void {
  }

}
