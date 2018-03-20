import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IndexSystemErrorsComponent} from './index-system-errors/index-system-errors.component';
import {PageNoFoundComponent} from './404/page-no-found.component';
import {ErrorComponent} from './500/error.component';




const SystemRoutes: Routes = [
  {
    path: '',
    component: IndexSystemErrorsComponent,  children: [
    { path: '', pathMatch: 'full', redirectTo: 'pagina-no-encontrada' },
    {
      path: 'pagina-no-encontrada',
      component: PageNoFoundComponent
    },
    {
      path: 'error',
      component: ErrorComponent
    },
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(SystemRoutes)],
  exports: [RouterModule]
})
export class SystemErrorsRoutesModule {}
