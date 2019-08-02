import { NgxInstaModule } from './../../projects/ngx-insta/src/lib/ngx-insta.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxInstaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
