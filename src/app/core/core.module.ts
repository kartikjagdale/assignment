// Ngx Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './../shared/shared.module';

// Components
import { AppComponent } from './containers/app/app.component';

export const COMPONENTS = [
  AppComponent,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule { }
