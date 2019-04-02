import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  items: Object;
  cart: Object;
  emailAddress: String;
  emailSubject: String;
  emailBody: String;

  constructor(
    private service: AppService
  ) {
    this.emailAddress = 'alberto@coderty.com';
    this.emailSubject= '¡Quiero mi camiseta de AlmeríaJS!';
    this.emailBody = 'Buenas,\n\nLe he echado el ojo a la';
  }

  ngOnInit() {
    this.service.getItems().subscribe(items => {
      // TODO: Hice esto a las 1:30 del Lunes. No vendría mal darle una vuelta... 
      let _items = [];
      for(let key in items) {
      _items.push({ ...items[key], selectedColor: items[key].colors[0] || null })
      }
      this.items = _items;
    }, error => {
      console.log(error);
      this.items = [];
    });
  }

}
