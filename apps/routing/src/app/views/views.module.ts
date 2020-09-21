import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewshomeComponent } from './viewshome/viewshome.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemslistComponent } from './itemslist/itemslist.component';


@NgModule({
  declarations: [ViewshomeComponent, StatisticsComponent, ItemslistComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
