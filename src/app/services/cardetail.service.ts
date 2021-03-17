import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/cardetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl = "https://localhost:44331/api/";
  constructor(private httpClient: HttpClient) { }
  

  getCarDetails(carId:number):Observable<CarDetailResponseModel> {
    let newPath = this.apiUrl + "carimages/getbyid?Id=" + carId
    return this.httpClient.get<CarDetailResponseModel>(newPath);
  }

}
