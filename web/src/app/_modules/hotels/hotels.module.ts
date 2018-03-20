import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterIndexHotelsComponent } from './router-index-hotels/router-index-hotels.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import {HotelRoutesModule} from './hotels.router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../../_core/-core.module';
import { FiltersComponent } from './filters/filters.component';
import { HotelComponent } from './hotel/hotel.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    HotelRoutesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    RouterIndexHotelsComponent,
    HotelListComponent,
    FiltersComponent,
    HotelComponent
  ]
})
export class HotelsModule { }
