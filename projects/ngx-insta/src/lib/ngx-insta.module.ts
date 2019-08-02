import { NgModule } from '@angular/core';
import { NgxInstaComponent } from './ngx-insta.component';
import { PhotoComponent } from './photo/photo.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [NgxInstaComponent, PhotoComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [NgxInstaComponent]
})
export class NgxInstaModule { }
