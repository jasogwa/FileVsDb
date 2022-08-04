import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl = 'http://localhost:5000';

  public searchResults: any;

  constructor(
      private http: HttpClient,
      private sanitizer: DomSanitizer
    ) {
  }

  saveFile(
    Image:File
  ){
    const url = `${this.baseUrl}/filestorage`;
    let input = new FormData();
    input.append('streamfile', Image);
    return this.http.post(url, input);
  }

  saveDb(
    Image:File
  ){
    const url = `${this.baseUrl}/dbstorage`;
    let input = new FormData();
    input.append('streamfile', Image);
    return this.http.post(url, input);
  }

  getFileSys() :Observable<any>{

    return this.http.get(`${this.baseUrl}/filestorage/all`).pipe(
            map( response => {
              return this.searchResults = response;
            })
          )
  }

  getDbFiles() :Observable<any>{

    return this.http.get(`${this.baseUrl}/dbstorage/all`).pipe(
            map( response => {
              return this.searchResults = response;
            })
          )
  }

  download(fileName: string): void {
    this.http.get(`${this.baseUrl}/${fileName}`, { responseType: 'blob'} ).subscribe(res => {
      window.open(window.URL.createObjectURL(res));
    });
  }

  downloadBlob(fileName): void {
    let bytes = new Uint8Array(fileName); // pass your byte response to this constructor

    let blob = new Blob([bytes], { type: 'application/pdf' });

    let fileURL = URL.createObjectURL(blob);
    window.open(fileURL);
  }

  downloadDuration(data) :Observable<any>{
    return this.http.post(`${this.baseUrl}/duration/download`,data);
  }

  getHistory() :Observable<any>{

    return this.http.get(`${this.baseUrl}/history`).pipe(
            map( response => {
              console.log(response)
              return this.searchResults = response;
            })
          )
  }

  delete(id){
    return this.http.delete(`${this.baseUrl}/del-file/${id}`)
  }

  deleteDb(id){
    return this.http.delete(`${this.baseUrl}/del-dbfile/${id}`)
  }

}
