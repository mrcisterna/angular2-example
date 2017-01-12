/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RadiosService } from './radios.service';

describe('RadiosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RadiosService]
    });
  });

  it('should ...', inject([RadiosService], (service: RadiosService) => {
    expect(service).toBeTruthy();
  }));
});
