import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShirtsComponent } from './containers/shirts/shirts.component';

const routes: Routes = [{ path: '', component: ShirtsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShirtsRoutingModule {}
