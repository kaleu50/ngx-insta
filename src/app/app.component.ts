import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-insta-app';
  config: any = {
    count: '10' , // ANY INT VALUE
    idUser: '#YOUR_IDUSER',
    tokenUser: '#YOUR_TOKEN',
    grid: true
  };
}
