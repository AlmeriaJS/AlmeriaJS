import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ShirtsComponent } from './containers/shirts/shirts.component';
import { ShirtsRoutingModule } from './shirts-routing.module';

@NgModule({
  declarations: [ShirtsComponent, ItemListComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ShirtsRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule
  ]
})
export class ShirtsModule {}
