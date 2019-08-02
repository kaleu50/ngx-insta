import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstaAPIService {
  instaURL: string;

  constructor(private http: HttpClient) { }

  getPhotos(config): Observable<any> {

    this.instaURL = 'https://api.instagram.com/' +
      'v1/users/' + config.idUser +
      '/media/recent/' +
      '?count=' + config.count +
      '&access_token=' + config.tokenUser;

    return this.http.get(this.instaURL)
      .pipe(map(res => {
        const photos: any = res;
        return photos.data;
      }))
      .pipe(catchError(this.handleError));

  }


  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return throwError(errMsg);
  }
}
