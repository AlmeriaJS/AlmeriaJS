import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    title: Title,
    meta: Meta
  ) {
    title.setTitle('AlmeríaJS');
    meta.updateTag({
      name: 'description',
      content: 'Somos un grupo de apasionados de la tecnología que nos juntamos cada vez que tenemos ocasión para hablar de cualquier tema relacionado con Javascript.'
    });
  }

}
