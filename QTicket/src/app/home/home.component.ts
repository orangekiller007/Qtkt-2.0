import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { CreateService } from '../shared/create.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
incidents;
  constructor(private userService: UserService,private router: Router,private createService:CreateService) { }

  ngOnInit() {
    this.createService.getIncident().subscribe(
      res => {
        this.incidents = res//['incident'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  deleteIncident(id:any){
    var incidents=this.incidents;
  this.createService.deleteIncident(id).subscribe(data=>{
    if(data==1){
      for(var i=0;i<incidents.length;i++)
      {
        if(incidents[i]._id==id)
        {
          incidents.splice(i,1);
        }
  
      }
    }
    this.createService.getIncident().subscribe(incidents =>
      this.incidents = incidents)
  })
  
  }

}
