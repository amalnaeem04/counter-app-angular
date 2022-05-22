import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private url!: string;
  constructor(private router: Router,) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      this.url = this.router.url;
    });
  }

  goToMenuManagement() {
    this.router.navigate(['./menu-management']);
  }

  goToImportMerchantIds() {
    this.router.navigate(['./merchant-management/import-merchant-ids']);
  }

  get isMenuManagementRoute() {
    return this.url === '/menu-management';
  }

  get isImportMerchantIdsRoute() {
    return this.url === '/merchant-management/import-merchant-ids';
  }

  signOut() {
  }
}
