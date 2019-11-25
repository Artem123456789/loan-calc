import { TestBed } from '@angular/core/testing';

import { LoanCalcInfoService } from './loan-calc-info.service';

describe('LoanCalcInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanCalcInfoService = TestBed.get(LoanCalcInfoService);
    expect(service).toBeTruthy();
  });
});
