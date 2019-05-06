import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Ticket } from './ticket.model';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  selectedTicket: Ticket = {
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
    state: 'New'
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }

  postTicket(ticket:Ticket){
    return this.http.post(environment.apiBaseUrl+'/createincident',ticket,this.noAuthHeader);  }

    getIncident() {
      return this.http.get(environment.apiBaseUrl + '/home');
    }
    deleteIncident(id){

      return this.http.delete(environment.apiBaseUrl+'/home/'+id);
    }
    editIncident(id){
      return this.http.get(environment.apiBaseUrl+'/edit/'+id);
    }
    updateIncident(ticket:Ticket,id){
      return this.http.post(environment.apiBaseUrl+'/update/'+id,ticket);

    }
}
