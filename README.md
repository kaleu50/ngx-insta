# :camera: Ngx-Insta

This project was based on [InstaFeed2](https://github.com/JoeKarlsson/instafeed-2.0).

# Getting Starded
## Installation instructions
Install `ngx-insta` from `npm`:
```bash
npm install ngx-insta --save
```

Add needed package to NgModule imports:
```
import { NgxInstaModule } from 'ngx-insta';

@NgModule({
  ...
  imports: [NgxInstaModule,...]
  ...
})
```

Add component to your page:
```
<ngx-insta [config]="config"></ngx-insta>
```
## Config
```
  config: any = {
    count: '10' , // any int value
    idUser: '#YOUR_IDUSER',
    tokenUser: '#YOUR_TOKEN',
    grid: true // false is list true is grid
  };
```

# License

[MIT](LICENSE)

