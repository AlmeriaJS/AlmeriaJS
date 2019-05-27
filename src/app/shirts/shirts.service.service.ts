import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shirt } from './models/shirts.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShirtsService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<Shirt[]>(`/assets/items.json`).pipe(
      map(shirts =>
        shirts.map(shirt => {
          shirt.selectedColor = shirt.colors[0];
          return shirt;
        })
      )
    );
  }
}
