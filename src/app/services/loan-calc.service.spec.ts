import { TestBed } from '@angular/core/testing';

import { LoanCalcService } from './loan-calc.service';

describe('LoanCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanCalcService = TestBed.get(LoanCalcService);
    expect(service).toBeTruthy();
  });
});
