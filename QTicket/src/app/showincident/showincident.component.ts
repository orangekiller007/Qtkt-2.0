import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { CreateService } from '../shared/create.service';

@Component({
  selector: 'app-showincident',
  templateUrl: './showincident.component.html',
  styleUrls: ['./showincident.component.css']
})
export class ShowincidentComponent implements OnInit {
  incidents;
  constructor(private userService: UserService,private router: Router,private createService:CreateService) { }


  ngOnInit() {
    this.createService.getSubmittedIncident().subscribe(
      res => {
        this.incidents = res//['incident'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

}
