import { Component, ViewChild, OnInit, AfterViewInit, Input } from '@angular/core';
import { Radio } from '../../classes/radio'

import { RadioListComponent } from './radio-list/radio-list.component';

@Component({
  selector: 'left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit, AfterViewInit {  

  selectedRadio: Radio

  @ViewChild(RadioListComponent) radioList: RadioListComponent

  constructor() {
    this.selectedRadio = new Radio
  }

  ngOnInit() { }

  ngAfterViewInit() {      
	console.log(this.radioList)
	console.log(this.selectedRadio)
  }

  selectedRadioChange(radio){
    console.log(radio)
    this.selectedRadio = radio
  }

}
