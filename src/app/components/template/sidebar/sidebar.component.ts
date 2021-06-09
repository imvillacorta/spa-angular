import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  element: any;

  constructor() { }

  ngOnInit(): void {
  }

  menu() {
    this.element = document.querySelector('#nav');
    this.element.classList.toggle('nav');
  }

}
