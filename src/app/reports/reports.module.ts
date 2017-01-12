import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReportsComponent } from './reports.component';
import { ArsComponent } from './ars/ars.component';
import { GpsComponent } from './gps/gps.component';
import { SmsComponent } from './sms/sms.component';
import { AgGridModule } from "ag-grid-ng2";

@NgModule({
  imports: [  
    FormsModule
  ],
  declarations: [
    ReportsComponent,
    ArsComponent,
    GpsComponent,
    SmsComponent
  ],
  exports: [
    ReportsComponent,
    ArsComponent,
    GpsComponent,
    SmsComponent,
	FormsModule
  ]
})
export class ReportsModule { }
