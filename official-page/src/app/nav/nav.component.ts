import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  websiteMainName='Dawn-Team';
  websiteSubName='';
  navbarCollapsed=true;

  constructor() { }

  ngOnInit() {
  }

}
