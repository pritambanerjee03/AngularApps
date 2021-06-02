import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-street-light',
  templateUrl: './street-light.component.html',
  styleUrls: ['./street-light.component.scss']
})
export class StreetLightComponent implements OnInit {

  colorVert:string =  "red";
  colorHori:string =  "red";
  constructor() { }

  ngOnInit(): void {
  }
  VertColorChange(){
    if(this.colorVert == 'red')
     this.colorVert = 'green';
    else if(this.colorVert == 'green')
      this.colorVert = 'yellow';
    else if(this.colorVert == 'yellow')
      this.colorVert = 'red';
  }
  HoriColorChange(){
    if(this.colorHori == 'red')
    this.colorHori = 'green';
   else if(this.colorHori == 'green')
     this.colorHori = 'yellow';
   else if(this.colorHori == 'yellow')
     this.colorHori = 'red';
  }

}
