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
  dataloaded = false;
  secilenRenk: Color ;

  constructor(private renklerService: ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.renklerService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataloaded = true;
    });
  }
  setRenkler(color: Color) {
    this.secilenRenk = color;

  }
  secilenRenkActive(color: Color) {
    if ( color == this.secilenRenk ) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }
}
