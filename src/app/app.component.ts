import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from './services/security-service.service'
import { User } from './classes/user'
import { Observable } from 'rxjs/observable'
import { AppSharedModule } from './shared.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: []
})
export class AppComponent implements OnInit {
  public isLogin : boolean

  constructor(private securityService : SecurityService){
    this.securityService.authenticated.subscribe((value : boolean) => this.isLogin = (value))	
  }

  ngOnInit() {
	let storage = localStorage.getItem('mt-app')

	if(!storage){
	  this.loadDefaultConfig()
	}
  }

  private loadDefaultConfig() : void{
    let storage = {users: [], credentials: [], settings: {}, authorizations: ['login','dashboard','users','radios']}
	
	let user = new User('TestAdmin', 'Test', 'admin', 'admin', 'user@test.com')

	storage.users.push(user)

	localStorage.setItem('mt-app', JSON.stringify(storage))
  }
}
