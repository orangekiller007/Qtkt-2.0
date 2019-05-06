import { Component, OnInit } from '@angular/core';

//Imports
import { NgForm } from '@angular/forms';
import  {CreateService} from '../shared/create.service'

@Component({
  selector: 'app-createincident',
  templateUrl: './createincident.component.html',
  styleUrls: ['./createincident.component.css']
})
export class CreateincidentComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private createService:CreateService) { }

  ngOnInit() {
  }
  onSubmitIncident(form: NgForm)
{
  this.createService.postTicket(form.value).subscribe(
    res => {
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 4000);
      this.resetForm(form);
    },
    err => {
      if (err.status === 422) {
        this.serverErrorMessages = err.error.join('<br/>');
      }
      else
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
    }
  );
  
}

resetForm(form: NgForm) {
  this.createService.selectedTicket = {
    ticketid: '',
    issue: '',
    summary: '',
    severity: '',
    internal : '',
    submittedby: '',
    updated: '',
    category: '',
    subcategory: '',
    assignedto: '',
    comments: '',
    state: ''
  };
  form.resetForm();
  this.serverErrorMessages = '';
}
}
