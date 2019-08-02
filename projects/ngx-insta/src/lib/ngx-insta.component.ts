import { InstaAPIService } from './services/insta-api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-insta',
  templateUrl: './ngx-insta.component.html',
  styleUrls: ['./ngx-insta.component.css']
})
export class NgxInstaComponent implements OnInit {
  @Input() config: any;

  errorMessage: string;
  photos: Array<any>;
  instaAPI: InstaAPIService;
  grid: boolean;

 constructor(instaAPI: InstaAPIService) {
   this.instaAPI = instaAPI;
 }

 ngOnInit() {
   this.grid = this.config.grid;
   this.getInstaPhotos();
   console.log(this);

   console.log(this.config);
 }

 getInstaPhotos() {
   this.instaAPI.getPhotos(this.config)
     .subscribe(
       photos => this.photos = photos,
       error => this.errorMessage = error as any
     );
 }
}
