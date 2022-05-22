import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <app-nav-bar ></app-nav-bar>
  <app-counter-table></app-counter-table>
  `
})
export class AppComponent {
  title : string= 'counter-app';
}
