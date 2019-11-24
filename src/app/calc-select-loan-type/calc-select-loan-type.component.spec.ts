import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcSelectLoanTypeComponent } from './calc-select-loan-type.component';

describe('CalcSelectLoanTypeComponent', () => {
  let component: CalcSelectLoanTypeComponent;
  let fixture: ComponentFixture<CalcSelectLoanTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcSelectLoanTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcSelectLoanTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
