import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { Subject } from 'rxjs/Subject'
import { BackendService } from './backend-service.service';
import { Radio } from '../classes/radio'

@Injectable()
export class RadiosService {

  public radios$: any
  public radios: Radio[]

  constructor(private backend: BackendService) {
	this.startRadiosWatcher()
  }

  private startRadiosWatcher(){
    this.radios$ = Observable.interval(1000)
	  .flatMap(()=>{
		let data$ = this.backend.radios.getRadios()
	    data$.subscribe(data=> this.radios = data)
	    return data$
	  })
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