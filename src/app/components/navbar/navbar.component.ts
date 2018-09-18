import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  home: HomeComponent;
  constructor() {
  }

  ngOnInit() {
  }

  scrollToElement() {

    this.home.scrollToElement();
  }

}
