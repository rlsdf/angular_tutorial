import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardFancyComponent } from './card-fancy/card-fancy.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardRoutingModule } from './card-routing.module';

@NgModule({
  declarations: [
    CardFancyComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class CardModule { }

