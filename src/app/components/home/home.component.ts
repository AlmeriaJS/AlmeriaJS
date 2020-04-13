import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class HomeComponent {
  talks = [
    {
      date: '16 abril',
      image: '/assets/images/talks/pinchito.png',
      link: 'https://www.meetup.com/es-ES/almeriajs/events/269973701/',
    },
    { date: '23 abril', image: '/assets/images/talks/pablo.png' },
    { date: '30 abril', image: '/assets/images/talks/konstantin.png' },
    { date: '6 mayo', image: '/assets/images/talks/ari.png' },
  ];

  constructor(title: Title, meta: Meta) {
    title.setTitle('AlmeríaJS');
    meta.updateTag({
      name: 'description',
      content:
        'Somos un grupo de apasionados de la tecnología que nos juntamos cada vez que ' +
        'tenemos ocasión para hablar de cualquier tema relacionado con Javascript.',
    });
  }
}
