import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcRootComponent } from './calc-root.component';

describe('CalcRootComponent', () => {
  let component: CalcRootComponent;
  let fixture: ComponentFixture<CalcRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
