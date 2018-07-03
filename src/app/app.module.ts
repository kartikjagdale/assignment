// Ngx Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// User Modules
import { CoreModule } from './core/core.module';

// App Components
import { AppComponent } from './core/containers/app/app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
