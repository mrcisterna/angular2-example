import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { RadiosService } from '../../../services/radios.service'
import { Radio } from '../../../classes/radio'

@Component({
  selector: 'radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.css']
})
export class RadioListComponent implements OnInit {
  
  radios: Radio[]
  selectedRadio: Radio

  @Output() selectedRadio$ = new EventEmitter()

  constructor(private radiosService: RadiosService) { }

  ngOnInit() {
    
	if(!this.radiosService.radios){
	  this.radiosService.radios$.subscribe({
	    next: (radios) => {
          this.radios = radios
          this.radiosService.radios = radios
		  this.selectedRadio = this.radios[0]
        }
      })
	}else{
	  this.radios = this.radiosService.radios
	  this.selectedRadio = this.radios[0]
	}
  }

  selectRadio(radio: Radio): void{
    this.selectedRadio = radio
	this.selectedRadio$.emit(radio);
  }

}
