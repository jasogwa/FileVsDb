import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-summarypage',
  templateUrl: './summarypage.component.html',
  styleUrls: ['./summarypage.component.css']
})
export class SummarypageComponent implements OnInit {

  public myRequest:any = [];

  constructor(
    private service:ServicesService,
    private router : Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.myRequests()
  }

  myRequests(){
    this.service.getHistory()
      .subscribe( data => {
        console.log(data)
        this.myRequest = data['result'];
      })
  }

}
