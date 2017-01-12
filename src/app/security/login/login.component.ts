import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../services/security-service.service'
import { SecurityCredential } from '../../classes/security-credential'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public credentials : SecurityCredential
  public badLogin : boolean = false

  constructor(private router: Router, private securityService : SecurityService) { }

  ngOnInit() {
    this.credentials = new SecurityCredential("", "")
  }

  login(){
    this.badLogin = false

    if(this.securityService.login(this.credentials)){
	  this.router.navigate(['/dashboard']);
	}
	else{
	  console.log('login failed')
	  this.badLogin = true
	}
  }	
}
