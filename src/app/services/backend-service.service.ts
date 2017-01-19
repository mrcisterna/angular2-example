import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable'

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/multicast';
import 'rxjs/add/operator/max';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/toArray';

import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/interval';



import { User } from '../classes/user'
import { Radio } from '../classes/radio'
import { RadioType } from '../classes/radio-type'

const url: string = "http://localhost:3000/"

@Injectable()
export class BackendService {  

  constructor(private http: Http) { }  

  users = { /*Backend users CRUD*/
    getUsers: () : User[] => {
	  console.log('retrieving users')
	  return []
	},

	getUser: (username : string) : User => {
	  return null
	},

	save(user : User) : void {
	
	},

	remove(user : User) : void {
	
	}
  }

  radios = { /*Backend radios CRUD*/
    getRadios: () : Observable<Radio[]> => {	  
	  return this.http.get(url + "radios").map((res) => {return res.json()})
	},

	save: (item: any) : Observable<Radio> => {
	  return this.http.post(url + "radios", item).map((res) => {return res.json()})
	}
  }

  radioTypes = { /*Backend radio types CRUD*/
    getRadioTypes: () : Observable<RadioType[]> => {	  
	  return this.http.get(url + "radio-types").map((res) => {return res.json()})
	}
  }

   private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}