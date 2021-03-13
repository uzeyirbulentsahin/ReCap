import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  dataloaded=false;
  
  constructor(private arabaService: CarService) { }

  ngOnInit(): void { 
    this.getCars();
  }

  getCars() {
    this.arabaService.getCars().subscribe((response) => {
        this.cars = response.data;
        this.dataloaded=true;
      });
  }

}
