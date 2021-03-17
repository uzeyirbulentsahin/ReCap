import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkalarComponent } from './components/markalar/markalar.component';
import { RenklerComponent } from './components/renkler/renkler.component';
import { MusterilerComponent } from './components/musteriler/musteriler.component';
import { CarsComponent } from './components/cars/cars.component';
import { RentsComponent } from './components/rents/rents.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { CarDetailsComponent } from './components/cardetails/cardetails.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MarkalarComponent,
    RenklerComponent,
    MusterilerComponent,
    CarsComponent,
    RentsComponent,
    NavbarComponent,
    SidebarComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
