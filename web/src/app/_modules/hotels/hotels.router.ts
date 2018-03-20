import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RouterIndexHotelsComponent} from './router-index-hotels/router-index-hotels.component';
import {HotelListComponent} from './hotel-list/hotel-list.component';





const HotelRoutes: Routes = [
  {
    path: '',
    component: RouterIndexHotelsComponent,  children: [
    { path: '', pathMatch: 'full', redirectTo: 'hotel-list' },
    {
      path: 'hotel-list',
      component: HotelListComponent
    }
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(HotelRoutes)],
  exports: [RouterModule]
})
export class HotelRoutesModule {}
