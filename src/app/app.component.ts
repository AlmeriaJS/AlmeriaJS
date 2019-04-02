import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  items: Object;
  emailAddress: String;
  emailSubject: String;
  emailBody: String;

  constructor(
    private service: AppService
  ) {
    this.emailAddress = 'howdy@albertogomez.dev'; //TODO: ¡No es el email definitivo! Pero hasta que lo tengamos pongo que lleguen aquí.
    this.emailSubject= encodeURI('¡Quiero mi camiseta de AlmeríaJS!');
    this.emailBody = encodeURI('Buenas,\n\nLe he echado el ojo a la');
  }

  ngOnInit() {
    this.service.getItems().subscribe(items => {
      // TODO: Hice esto a las 1:30. No vendría mal darle una vuelta... 
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
