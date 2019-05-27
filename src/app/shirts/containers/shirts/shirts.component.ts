import { Component, OnInit } from '@angular/core';
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
  constructor(private service: ShirtsService) {}

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
