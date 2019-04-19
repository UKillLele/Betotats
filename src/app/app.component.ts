import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beto-tattoo';
  show: boolean;

  constructor() {
    this.show = false;
  }

  toggle(): void {
    this.show = !this.show;
  }
}
