import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
