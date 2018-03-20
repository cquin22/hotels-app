import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MzButtonModule, MzCheckboxModule, MzToastModule} from 'ng2-materialize';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    MzCheckboxModule,
    MzButtonModule,
    MzToastModule
  ],
  exports: [
    HeaderComponent,
    MzCheckboxModule,
    MzButtonModule,
    MzToastModule,
    LoaderComponent
  ],
  declarations: [HeaderComponent, LoaderComponent]
})
export class CoreModule { }
