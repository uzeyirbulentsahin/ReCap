import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  dataloaded = false;
  secilenCar: Car;
  filterText="";
  
  constructor(private arabaService: CarService,
    private activatedRoute: ActivatedRoute,private rentalService: BrandService,private renklerService: ColorService
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
    this.getBrands()
    this.getColors()

  }
  getColors() {
    this.renklerService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataloaded = true;
    });
  }
  getBrands() {
    this.rentalService.getBrands().subscribe((response) => {
        this.brands = response.data;
        this.dataloaded=true;
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
