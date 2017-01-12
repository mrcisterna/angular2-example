import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../services/security-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private router: Router, private securityService : SecurityService) { }

  ngOnInit() {
  }

  logout(){
    this.securityService.authenticated.next(false)
	this.router.navigate(['']);
  }
}
