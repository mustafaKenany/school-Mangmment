import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }
  scrollToElement(): void {
    // console.log($element);
    // $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    const element = document.getElementById('courses');

    // element.scrollIntoView();
    // element.scrollIntoView(false);
    // element.scrollIntoView({ block: 'end' });
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

}
