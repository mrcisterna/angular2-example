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
  selectedRadio: Radio = null

  @Output() selectedRadio$ = new EventEmitter()

  constructor(private radiosService: RadiosService) { }

  ngOnInit() {   
	
	this.radiosService.radios$.subscribe({
	    next: (radios) => {
          this.radios = radios
          this.radiosService.radios = radios
		  if(!this.selectedRadio)
		    this.selectRadio(this.radios[0])
        }
      })
  }

  selectRadio(radio: Radio): void{
    this.selectedRadio = radio
	this.selectedRadio$.emit(radio);
  }

}
