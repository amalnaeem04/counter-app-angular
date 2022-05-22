import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CounterTableService } from 'src/app/core/services/counter-table.service';
import { TeamCounter } from "../../models/counter.interface";
import { CounterModalComponent } from '../add-counter-modal/add-counter-modal.component';


@Component({
  selector: 'app-counter-table',
  templateUrl: './counter-table.component.html',
  styleUrls: ['./counter-table.component.scss']
})
export class CounterTableComponent implements OnInit {
  counters: TeamCounter[] = [];
  
  closeResult = '';
  @ViewChild(CounterModalComponent)
  menuItemsUpdateModal?: CounterModalComponent;


  constructor(private service: CounterTableService){}
  
  ngOnInit(){
      this.service.getAlTeamsCounters().subscribe(res => {
        console.log(res);
        this.counters = res;
        });
  }
  
  form = new FormGroup({
    name: new FormControl('', Validators.required),
   
  });

openAddModal() {
  this.menuItemsUpdateModal?.open('', false);
}

}
