import { NgModule } from '@angular/core';
import { SecurityService } from './services/security-service.service'
import { BackendService } from './services/backend-service.service'

@NgModule({
  imports: [],
  declarations: [],
  providers: [SecurityService, BackendService],
  exports: []
})

export class AppCoreModule { }
