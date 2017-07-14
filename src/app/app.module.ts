import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { appComponents } from './components/';
import { appRouteModule } from './router/router';


@NgModule({
  declarations: [
    appComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
