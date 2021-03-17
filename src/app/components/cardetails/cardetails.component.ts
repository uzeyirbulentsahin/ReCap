import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carimage';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CarDetailsComponent implements OnInit {

  cardetails:CarImage[]=[];
  dataloaded=false;
  GelenId:number;

  constructor(private activatedRoute:ActivatedRoute,
              private cardetailService:CardetailService ) { }

  ngOnInit() {
    console.log(this.activatedRoute)
    this.activatedRoute.params.subscribe(params => {
      if (params["Id"]) {
        this.getCarDetails(params["Id"])    
      }});
  }


  getCarDetails(carId: number) {
    this.cardetailService.getCarDetails(carId).subscribe((response) => {
      this.cardetails = response.data;
      this.dataloaded = true;
    });
  }
}
 

  


