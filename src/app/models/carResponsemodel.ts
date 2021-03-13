import { CarsComponent } from "../components/cars/cars.component";
import { Car } from "./car";
import { ResponseModel } from "./responseModel";

export interface CarResponseModel extends ResponseModel{
    data:Car[]  
}