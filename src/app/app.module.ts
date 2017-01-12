/*ng-2 Modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, JsonpModule } from '@angular/http';

/*Custom Modules*/
import { CrudsModule } from './cruds/cruds.module';
import { AppRouterModule } from './routes.module'
import { AppCoreModule } from './core.module'
import { AppSharedModule } from './shared.module'
import { ReportsModule } from './reports/reports.module';
import { DashboardModule } from './dashboard/dashboard.module';

/*components*/
import { LoginComponent } from './security/login/login.component';
import { AppComponent } from './app.component';

import { SecurityService } from './services/security-service.service'
import { RadiosService } from './services/radios.service'

@NgModule({
  declarations: [
    AppComponent,	
    LoginComponent    
  ],
  providers: [ SecurityService, RadiosService ],
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    AppCoreModule,
    AppRouterModule,
	AppSharedModule,
    BrowserModule,
	NgbModule.forRoot(),
	DashboardModule,
	CrudsModule,
	ReportsModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
