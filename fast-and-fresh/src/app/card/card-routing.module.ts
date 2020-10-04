import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardFancyComponent } from './card-fancy/card-fancy.component';

const routes: Routes = [{path: '', component: CardFancyComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
