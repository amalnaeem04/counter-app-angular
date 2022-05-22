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
  //#96C8A2, #D0F0C0
  title : string= 'counter-app';
}
