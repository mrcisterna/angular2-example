import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radio-map',
  templateUrl: './radio-map.component.html',
  styleUrls: ['./radio-map.component.css']
})
export class RadioMapComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
