import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-markalar',
  templateUrl: './markalar.component.html',
  styleUrls: ['./markalar.component.css']
})
export class MarkalarComponent implements OnInit {
  brands: Brand[] = [];
  dataloaded=false;
  secilenMarka:Brand;
  filterText="";
  
  constructor(private rentalService: BrandService) { }

  ngOnInit(): void { 
    this.getBrands();
  }

  getBrands() {
    this.rentalService.getBrands().subscribe((response) => {
        this.brands = response.data;
        this.dataloaded=true;
      });
  }
  setMarkalar(brand:Brand){
   this.secilenMarka=brand;
    
  }
  seciliMarka(brand:Brand){
    if(brand == this.secilenMarka)
    {
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }

}
