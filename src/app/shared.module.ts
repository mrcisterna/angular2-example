import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [	
	NgbModule,RouterModule
  ],
  declarations: [MenuBarComponent],
  exports: [
    MenuBarComponent
  ]
})

export class AppSharedModule { }
