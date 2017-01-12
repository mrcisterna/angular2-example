import { Component, OnInit, Input } from '@angular/core';
import { Radio } from '../../../../classes/radio'

@Component({
  selector: 'radio-card',
  templateUrl: './radio-card.component.html',
  styleUrls: ['./radio-card.component.css']
})
export class RadioCardComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input() radio: Radio

}
