import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { AppComponents } from './components/';
import { AppRouteModule } from './router/router';

import { AppServices } from './services/'
import { F7Service } from './services/framework7.service';

@NgModule({
  declarations: [
    AppComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule
  ],
  providers: [AppServices],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private f7Service: F7Service) {
    f7Service.register();
  }
}
