// Ngx Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './containers/app/app.component';

export const COMPONENTS = [
  AppComponent,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule { }
