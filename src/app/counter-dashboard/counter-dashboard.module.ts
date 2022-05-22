 import { NgModule } from "@angular/core";
 import { CommonModule } from "@angular/common";

 import { CounterTableComponent } from "./components/counter-table/counter-table.component";
 import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterModalComponent } from "./components/add-counter-modal/add-counter-modal.component";


 @NgModule({
     declarations: [
        CounterTableComponent,
        NavBarComponent,
        CounterModalComponent

     ],
     imports: [
         CommonModule,
         FormsModule,
         ReactiveFormsModule
     ],
     exports: [
        CounterTableComponent,
        NavBarComponent,
        CounterModalComponent
     ]
 })
 export class CounterDashboardModule{}