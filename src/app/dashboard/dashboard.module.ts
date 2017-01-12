import { NgModule } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { MainMapComponent } from './main-map/main-map.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { RadioMapComponent } from './left-bar/radio-map/radio-map.component';
import { RadioListComponent } from './left-bar/radio-list/radio-list.component';
import { RadioCardComponent } from './left-bar/radio-list/radio-card/radio-card.component';

import {ToasterModule, ToasterService} from 'angular2-toaster';

@NgModule({
  imports: [
  CommonModule,
  FormsModule,
  AgmCoreModule.forRoot({apiKey: 'AIzaSyA2d8PFQLPjgYd2D-cYvTWUjm5E_cI2caI'}),
  ToasterModule],
  declarations: [
    DashboardComponent,
    MainMapComponent,
    LeftBarComponent,
    RadioMapComponent,
    RadioListComponent,
    RadioCardComponent,
  ],
  exports: [
    FormsModule,
    DashboardComponent,
    MainMapComponent,
    LeftBarComponent,
    RadioMapComponent,
    RadioListComponent,
	AgmCoreModule
  ]
})
export class DashboardModule { }
