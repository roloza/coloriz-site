import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  url = 'http://51.15.210.203/api/';

  constructor(private httpClient: HttpClient) {}

  getImages(query: string): Observable<any> {
    return this.httpClient.get(this.url + 'images/' + query);
  }

  getLastQueries(): Observable<any> {
    return this.httpClient.get(this.url + 'images?type=last-queries');
  }

  getBestQueries(): Observable<any> {
    return this.httpClient.get(this.url + 'images?type=best-queries');
  }

  postImages(query: string): Observable<any> {
    const httpParams = new HttpParams().append('q', query);
    return this.httpClient.post(this.url + 'images', httpParams);
  }

  postColor(img: string): Observable<any> {
    const httpParams = new HttpParams().append('img', img);
    return this.httpClient.post(this.url + 'colors', httpParams);
  }

  postBrowsershot(url: string): Observable<any> {
    const httpParams = new HttpParams().append('url', url);
    return this.httpClient.post(this.url + 'browsershot', httpParams);
  }

  uploadRequest(files: Array<File>) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
        formData.append('file', files[i]);

      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(xhr.response);
            }
        }
      }
      xhr.open('POST', this.url + 'upload', true);
      xhr.send(formData);
    })
  }
}
