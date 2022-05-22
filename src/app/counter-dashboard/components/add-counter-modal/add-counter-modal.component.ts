import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Counter } from '../../models/counter.interface';
import { CounterModalService } from 'src/app/core/services/add-counter-modal.service';


@Component({
  selector: 'app-counter-modal',
  templateUrl: './add-counter-modal.component.html',
  styleUrls: ['./add-counter-modal.component.scss']
})
export class CounterModalComponent implements OnInit {
  
  closeResult = '';
  modalRef?: NgbModalRef;

  @ViewChild('content')
  content?: ElementRef;

  constructor(private modalService: NgbModal, private service: CounterModalService){}
  
  ngOnInit(){
  }
  
  form = new FormGroup({
    userId: new FormControl('', Validators.required),
    teamId: new FormControl('', Validators.required),
   
  });



  open(id: string, isEdit: boolean = true) {
  
      this.modalRef = this.modalService.open(
        this.content,
        {
          ariaLabelledBy: 'modal-basic-title',
          size: 'xl',
          scrollable: true
        }
      );
    }

 createCounter(){

    const body = {
        userId : this.form.value.userId,
        teamId: this.form.value.teamId
    }
     this.service.createCounter(body);
        this.form.reset();
        this.modalRef?.close();
 }

}
