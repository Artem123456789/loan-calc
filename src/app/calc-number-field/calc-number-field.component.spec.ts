import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcNumberFieldComponent } from './calc-number-field.component';

describe('CalcNumberFieldComponent', () => {
  let component: CalcNumberFieldComponent;
  let fixture: ComponentFixture<CalcNumberFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcNumberFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcNumberFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
