import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMenuBar: boolean = false;
  sideMenuItems: string[];
  constructor() { }

  ngOnInit(){
    this.sideMenuItems = ["Products","Commercials", "Contact Us", ]
  }
  showMenu() {
    this.showMenuBar = !this.showMenuBar;
  }

}
