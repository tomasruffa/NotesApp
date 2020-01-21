import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Mi modulo de material
import { MaterialModule } from './shared/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
