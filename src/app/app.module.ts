import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

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
import { CarFilterPipePipe } from './pipes/car-filter-pipe.pipe';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';


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
    CarDetailsComponent,
    CarFilterPipePipe,
    BrandFilterPipePipe,
    ColorFilterPipePipe

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
