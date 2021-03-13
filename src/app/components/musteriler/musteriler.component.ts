import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-musteriler',
  templateUrl: './musteriler.component.html',
  styleUrls: ['./musteriler.component.css']
})
export class MusterilerComponent implements OnInit {

  customers: Customer[] = [];
  dataloaded=false;
  
  constructor(private musteriService: CustomerService) { }

  ngOnInit(): void { 
    this.getCustomers();
  }

  getCustomers() {
    this.musteriService.getCustomers().subscribe((response) => {
        this.customers = response.data;
       
        this.dataloaded=true;
      });
  }

}
