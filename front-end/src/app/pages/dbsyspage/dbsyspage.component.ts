import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-dbsyspage',
  templateUrl: './dbsyspage.component.html',
  styleUrls: ['./dbsyspage.component.css']
})
export class DbsyspageComponent implements OnInit {

  baseUrl = "http://localhost:5000";
  fileToUpload: File = null;
  public error:any = {};

  public newRequests:any = [];
  public uploadRequests:any = [];

  constructor(
    private service:ServicesService,
    private SpinnerService: NgxSpinnerService,
    private router : Router,
  ) {}

  ngOnInit() {

  }

  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);
    let reader = new FileReader();
    reader.onload = (event:any) => {
      //read value
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  onSubmit(){
    if(this.fileToUpload != null){
      this.SpinnerService.show();
      var pre_query = new Date().getTime();
      this.service.saveDb(this.fileToUpload).subscribe(
        data => {
          let result = [];

          this.uploadRequests = data['result'];
          var post_query = new Date().getTime();
          // calculate the duration in seconds
          var duration = (post_query - pre_query) / 1000;
          this.uploadRequests.forEach(element => {
            result.push('Database Storage','upload',element,duration)
          });

          //save duration
          this.service.downloadDuration(result).subscribe(
            data => this.handleIResponse(data)
          )

          this.SpinnerService.hide();
          alert("Document Saved!");
        }
      )
    }else{
      alert("select a file to upload")
    }
  }

  handleIResponse(data){
    console.log(data)
  }

  getDbFiles(){
    this.SpinnerService.show();
    var pre_query = new Date().getTime();
    this.service.getDbFiles().subscribe(
      data => {
        let result = [];

        this.newRequests = data['result'];
        console.log(this.newRequests)
        var post_query = new Date().getTime();
        // calculate the duration in seconds
        var duration = (post_query - pre_query) / 1000;
        this.newRequests.forEach(element => {

          result.push('Database Storage','download',element.size,duration)

        });
        //save duration
        this.service.downloadDuration(result).subscribe(
          data => this.handleIResponse(data)
        )

        this.SpinnerService.hide();
      }
    )
  }

  public download(fileName: string):  void {
    this.service.downloadBlob(fileName);
  }

  deletea(Id){
    this.service.deleteDb(Id).subscribe(
      data => {
        console.log(data)
        this.newRequests = this.newRequests.filter(result => result.id != Id)
      }
    )
    alert("deleted!")
  }
}

