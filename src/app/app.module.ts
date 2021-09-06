import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCvComponent } from './my-cv/my-cv.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCvComponent,
    DashbaordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
