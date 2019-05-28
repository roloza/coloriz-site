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

  getcolorKeywords(): Observable<any> {
    return this.httpClient.get(this.url + 'coloriz/?type=colorsKw');
  }

  postImages(query: string): Observable<any> {
    const httpParams = new HttpParams().append('q', query);
    return this.httpClient.post(this.url + 'images', httpParams);
  }

  postColoriz(query: string): Observable<any> {
    const httpParams = new HttpParams().append('q', query);
    return this.httpClient.post(this.url + 'coloriz', httpParams);
  }

  showColoriz(query: string): Observable<any> {
    return this.httpClient.get(this.url + 'coloriz/' + query);
  }

  getImage(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'image/' + id);
  }

  getImageColorsDetails(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'colors/' + id);
  }

  postColor(img: string, slug: string = ''): Observable<any> {
    const httpParams = new HttpParams()
      .append('img', img)
      .append('slug', slug);
    return this.httpClient.post(this.url + 'colors', httpParams);
  }

  postBrowsershot(params: string[]): Observable<any> {
    const httpParams = new HttpParams()
      .append('url', params[0])
      .append('type', params[1])
      .append('device', params[2])
      .append('width', params[3])
      .append('height', params[4])
      .append('fullpage', params[5]);
    return this.httpClient.post(this.url + 'browsershot', httpParams);
  }

  showBrowsershot(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'browsershot/' + id);
  }

  showCompressor(id: string): Observable<any> {
    return this.httpClient.get(this.url + 'compress/' + id);
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
      };
      xhr.open('POST', this.url + 'upload', true);
      xhr.send(formData);
    });
  }

  getTags(): Observable<any> {
    return this.httpClient.get(this.url + 'tags');
  }

  getCategoryTags(id: number): Observable<any> {
    return this.httpClient.get(this.url + 'tags/' + id);
  }

  getCategories(): Observable<any> {
    return this.httpClient.get(this.url + 'categories');
  }

  getBrands(): Observable<any> {
    return this.httpClient.get(this.url + 'brands');
  }

  showBrand(id: number): Observable<any> {
    return this.httpClient.get(this.url + 'brands/' + id);
  }

  postBrand(query: string): Observable<any> {
    const httpParams = new HttpParams().append('q', query);
    return this.httpClient.post(this.url + 'brands', httpParams);
  }


  getBrandImagesLinks(query: string): Observable<any> {
    return this.httpClient.get(this.url + 'brand-query-urls?q=' + query);
  }

  updateBrandImagesLinks(id: number, url: string): Observable<any> {
    return this.httpClient.get(this.url + 'brand-query-urls/update/' + id + '/?url=' + url);
  }

  saveBrandImagesLinks(id: number, idImage: number): Observable<any> {
    return this.httpClient.get(this.url + 'brand-query-urls/save/' + id + '/' + idImage);
  }
}


