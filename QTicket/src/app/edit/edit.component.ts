import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateService } from '../shared/create.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  incident:any={};
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private router: Router,private route:ActivatedRoute,private createService:CreateService) { }
id;
  ngOnInit() {

  this.route.params.subscribe(params => {
    //this.id = params['id'];
    this.id=params['id'];
    console.log(this.id);

  });

  }

  updateIncident(form: NgForm){
console.log("Inside updateincident")
console.log(form.value);
this.createService.updateIncident(form.value,this.id).subscribe(
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
