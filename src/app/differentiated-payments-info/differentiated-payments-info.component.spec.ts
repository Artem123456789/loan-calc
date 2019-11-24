import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentiatedPaymentsInfoComponent } from './differentiated-payments-info.component';

describe('DifferentiatedPaymentsInfoComponent', () => {
  let component: DifferentiatedPaymentsInfoComponent;
  let fixture: ComponentFixture<DifferentiatedPaymentsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentiatedPaymentsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentiatedPaymentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
