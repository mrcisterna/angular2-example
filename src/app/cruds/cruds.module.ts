import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CrudsComponent } from './cruds.component';
import { RadiosComponent } from './radios/radios.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { ZonesComponent } from './zones/zones.component';
import { AgGridModule } from "ag-grid-ng2/main";
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [  
    FormsModule,
	CommonModule,
	ToasterModule,
	AgGridModule.withComponents([])
  ],
  declarations: [
    CrudsComponent,
    RadiosComponent,
    UsersComponent,
    SettingsComponent,
    ZonesComponent
  ],
  exports: [
    CrudsComponent,
    RadiosComponent,
    UsersComponent,
    SettingsComponent,
    ZonesComponent,
	FormsModule
  ]
})
export class CrudsModule { }
