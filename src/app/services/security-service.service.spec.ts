/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SecurityServiceService } from './security-service.service';

describe('SecurityServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityServiceService]
    });
  });

  it('should ...', inject([SecurityServiceService], (service: SecurityServiceService) => {
    expect(service).toBeTruthy();
  }));
});
