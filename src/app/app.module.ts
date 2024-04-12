import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewhomeComponent } from './components/newhome/newhome.component';
import { HttpClientModule } from '@angular/common/http';
import { CartcomponentComponent } from './components/cartcomponent/cartcomponent.component';
import { NewsdetailsComponent } from './components/newsdetails/newsdetails.component';

@NgModule({
  declarations: [AppComponent, NewhomeComponent, CartcomponentComponent, NewsdetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
