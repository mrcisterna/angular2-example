import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SecurityService } from './services/security-service.service'
import { UsersComponent } from './cruds/users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './security/login/login.component';
import { RadiosComponent } from './cruds/radios/radios.component';
import { Observable } from 'rxjs/observable'
import { UserToken } from './classes/user-token'

@Injectable()
export class Authorize implements CanActivate {
	constructor(private securityService: SecurityService, private currentUser: UserToken) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {	
	  console.log(route)
	  return this.securityService.authorize(route.url[0].path)
	}
}

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [Authorize] },
  { path: 'users', component: UsersComponent, canActivate: [Authorize] },
  { path: 'radios', component: RadiosComponent, canActivate: [Authorize] },
];

@NgModule({
  imports: [    
	RouterModule.forRoot(appRoutes)
  ],
  providers: [ Authorize, UserToken ],
  exports: [
    RouterModule
  ]
})

export class AppRouterModule { }
