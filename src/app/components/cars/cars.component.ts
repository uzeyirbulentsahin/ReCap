import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  dataloaded = false;
  secilenCar: Car;

  constructor(private arabaService: CarService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["colorId"]) {
        this.getCarsByColorId(params["colorId"])
      } else if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"])
      } else {
        this.getCars()
      }
    });

  }

  getCars() {
    this.arabaService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataloaded = true;
    });
  }
  getCarsByColorId(color: number) {
    this.arabaService.getCarsByColorId(color).subscribe((response) => {
      this.cars = response.data;
      this.dataloaded = true;
    });
  }
  getCarsByBrandId(brand: number) {
    this.arabaService.getCarsByBrandId(brand).subscribe((response) => {
      this.cars = response.data;
      this.dataloaded = true;
    });
  }


}
