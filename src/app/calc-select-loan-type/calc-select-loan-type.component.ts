import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'calc-select-loan-type',
  templateUrl: './calc-select-loan-type.component.html',
  styleUrls: ['./calc-select-loan-type.component.css']
})
export class CalcSelectLoanTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() paymentTypeVal: string;
  @Output() paymentTypeValChange = new EventEmitter<string>();

  onPaymentTypeValChange(newVal: string){
    this.paymentTypeVal = newVal;
    this.paymentTypeValChange.emit(newVal);
  }

}
