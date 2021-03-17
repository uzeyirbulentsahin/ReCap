import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/cardetails/cardetails.component';
import { CarsComponent } from './components/cars/cars.component';
import { MusterilerComponent } from './components/musteriler/musteriler.component';
import { RentsComponent } from './components/rents/rents.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarsComponent},
  {path:"cars",component:CarsComponent},
  {path:"cars/colorId/:colorId",component:CarsComponent},
  {path:"cars/brandId/:brandId",component:CarsComponent},
  {path:"rents",component:RentsComponent},
  {path:"customers",component:MusterilerComponent},
  {path:"cardetails/:Id",component:CarDetailsComponent}
  


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
