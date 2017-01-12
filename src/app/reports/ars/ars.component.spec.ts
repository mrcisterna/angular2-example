/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArsComponent } from './ars.component';

describe('ArsComponent', () => {
  let component: ArsComponent;
  let fixture: ComponentFixture<ArsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
