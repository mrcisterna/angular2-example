import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable'
import { Subject } from 'rxjs/Subject'
import { BackendService } from './backend-service.service';
import { Radio } from '../classes/radio'

/*const radioList : Radio [] =[
{id: 1, radioId: '1', name: 'Radio 1'},
{id: 2, radioId: '2', name: 'Radio 2'},
{id: 3, radioId: '3', name: 'Radio 3'},
{id: 4, radioId: '4', name: 'Radio 4'},
{id: 5, radioId: '5', name: 'Radio 5'},
{id: 6, radioId: '6', name: 'Radio 6'}
]*/

@Injectable()
export class RadiosService {

  subject: Subject<Radio[]>
  public radios$: Observable<Radio[]>
  public radios: Radio[]

  constructor(private backend: BackendService) {
    
	this.subject = new Subject()

	this.radios$ = this.backend.radios.getRadios().multicast(this.subject)

	this.backend.radios.getRadios().subscribe(r => {this.subject.next(r)})	
	
  }

  addRadio(radio: Radio) : Subject<any>{
    let saved$ : Subject<any> = new Subject()

    let id : number = this.radios[this.radios.length - 1].id + 1

	radio.id = id

	this.backend.radios.save(radio).subscribe({
	  next: x => {
	    this.radios.push(x)
		saved$.next(true)
	  }, 
	  error: err => saved$.next(err)
    })

	return saved$
  }
}