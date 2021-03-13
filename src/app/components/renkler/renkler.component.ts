import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-renkler',
  templateUrl: './renkler.component.html',
  styleUrls: ['./renkler.component.css']
})
export class RenklerComponent implements OnInit {

  colors: Color[] = [];
  dataloaded=false;
  
  constructor(private renklerService: ColorService) { }

  ngOnInit(): void { 
    this.getColors();
  }

  getColors() {
    this.renklerService.getColors().subscribe((response) => {
        this.colors = response.data;
        this.dataloaded=true;
      });
  }
}
