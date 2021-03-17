import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponsemodel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44331/api/";
  constructor(private httpClient: HttpClient) { }
  
  getCars():Observable<CarResponseModel> {
    let newPath=this.apiUrl+"cars/getcars"
    return this.httpClient.get<CarResponseModel>(newPath);
  }
  getCarsByColorId(colorId:number):Observable<CarResponseModel> {
    let newPath = this.apiUrl + "cars/getcarsbycolor?colorId=" + colorId
    return this.httpClient.get<CarResponseModel>(newPath);
  }
  getCarsByBrandId(brandId: number):Observable<CarResponseModel> {
    let newPath = this.apiUrl + "cars/getcarsbybrand?brandId=" + brandId
    return this.httpClient.get<CarResponseModel>(newPath);
  }
}
