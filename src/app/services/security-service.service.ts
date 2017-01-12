import { Injectable } from '@angular/core';
import { BackendService } from './backend-service.service';
import { SecurityCredential } from '../classes/security-credential'
import { User } from '../classes/user'
import { UserToken } from '../classes/user-token'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/observable'

@Injectable()
export class SecurityService {
  public authenticated = new BehaviorSubject(null);
  user: string

  constructor(private backend : BackendService) { }

  login(credentials : SecurityCredential){
    let users : User[] = this.getUsers()

	for(let i=0; i< users.length; i++){
	  if(users[i].username == credentials.username  && users[i].password == credentials.password)
	  {
	    this.authenticated.next(true)

		let storage = JSON.parse(localStorage.getItem('mt-app'))
		let credential : SecurityCredential = {username: users[i].username, password: null, token: new Date().toString()}

		storage.credentials.push(credential)
		localStorage.setItem('mt-app', JSON.stringify(storage))

	    return true
	  }
	}
	
	this.authenticated.next(false)
	return false	   
  }

  authorize(path: string): boolean {
	let storage= JSON.parse(localStorage.getItem('mt-app'))
	let authorizations = storage.authorizations

	console.log(this.authenticated.value)
	
	return (authorizations.filter((a)=> a == path).length > 0 && this.authenticated.value)
  }

  getUsers() : User [] {
  	let storage = JSON.parse(localStorage.getItem('mt-app'))
	return storage.users
  }

  private getCredential(username : string) : SecurityCredential {
    let storage = JSON.parse(localStorage.getItem('mt-app'))
	return storage.credentials.filter((c)=>c.username == username)[0]
  }
}
