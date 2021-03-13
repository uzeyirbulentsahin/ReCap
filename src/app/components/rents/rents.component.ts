import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalResponseModel } from 'src/app/models/rentalsResponseModel';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.css'],
})
export class RentsComponent implements OnInit {
  rentals: Rental[] = [];
  dataloaded=false;
  
  constructor(private rentalService: RentalService) { }

  ngOnInit(): void { 
    this.getRentals();
  }

  getRentals() {
    this.rentalService.getRentals().subscribe((response) => {
        this.rentals = response.data;
        this.dataloaded=true;
      });
  }
}
