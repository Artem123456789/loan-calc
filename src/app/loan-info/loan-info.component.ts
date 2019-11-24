import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'loan-info',
  templateUrl: './loan-info.component.html',
  styleUrls: ['./loan-info.component.css']
})

export class LoanInfoComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
  }

  @Input() monthlyPayment: number;
  @Input() totalAmountPayments: number;
  @Input() totalAmountOverpayments: number;
  @Input() paymentType: string;
}
