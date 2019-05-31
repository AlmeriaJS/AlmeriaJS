import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ShirtsService } from '../../shirts.service.service';
import { Shirt } from '../../models/shirts.interface';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.scss']
})
export class ShirtsComponent implements OnInit {

  items: Shirt[];
  emailAddress: string;
  emailSubject: string;
  emailBody: string;

  constructor(
    private service: ShirtsService,
    title: Title,
    meta: Meta
  ) {
    title.setTitle('¡Consigue tu camiseta! - AlmeríaJS');
    meta.updateTag({
      name: 'description',
      content: 'Elije la que mas te guste y ayuda a una buena causa. Todas las camisetas se pueden pedir en modelo unisex o mujer, independientemente de como se muestren en el catálogo.'
    });
  }

  ngOnInit() {
    this.service.getItems().subscribe(
      items => {
        this.items = items;
      },
      error => {
        console.log(error);
        this.items = [];
      }
    );
  }
}
