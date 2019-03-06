import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  // url = "http://212.47.229.135/api/";
  url = "http://51.15.210.203/api/";

  constructor(private httpClient: HttpClient) {}

  getImages(query: string): Observable<any> {
    return this.httpClient.get(this.url + "images/" + query);
  }

  getLastQueries(): Observable<any> {
    return this.httpClient.get(this.url + "coloriz/last-queries");
  }

  postImages(query: string): Observable<any> {
    let httpParams = new HttpParams().append("q", query);
    return this.httpClient.post(this.url + "images", httpParams);
  }

  postColor(img: string): Observable<any> {
    let httpParams = new HttpParams().append("img", img);
    return this.httpClient.post(this.url + "colors", httpParams);
  }

  uploadRequest(files: Array<File>) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for (var i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
         
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(xhr.response);
            }
        }
      }
      xhr.open("POST", this.url + "upload", true);
      xhr.send(formData);
    })
  }
}
