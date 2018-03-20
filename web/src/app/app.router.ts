import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';




const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'hotels',
    pathMatch: 'full'
  },
  {
    path: 'hotels',
    loadChildren: './_modules/hotels/hotels.module#HotelsModule'
  },
  {
    path: 'error',
    loadChildren: './_modules/system-errors/system-errors.module#SystemErrorsModule'
  },
  {
    path: '**',
    redirectTo: '/error/pagina-no-encontrada'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutesModule {}
