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
    const COUNT_MONTHS_YEAR = 12;
    let monthlyInterestRate = this.annualInterestRate / (100 * COUNT_MONTHS_YEAR);
    if(this.paymentType == "annuity"){
      this.monthlyPayment.numberValue = Math.ceil(
      this.loanAmount * (
        monthlyInterestRate + (monthlyInterestRate / 
          (
            Math.pow(1 + monthlyInterestRate, this.loanPerionMonths) - 1
          ))
      ));
      this.totalAmountPayments.numberValue = Math.ceil(this.monthlyPayment.numberValue * this.loanPerionMonths);
      this.totalAmountOverpayments.numberValue = Math.ceil(this.totalAmountPayments.numberValue - this.loanAmount);
    }else{
      this.monthlyPayment.numberValue = 0;
    }
  }

  @Input() loanAmount: number;
  @Input() loanPerionMonths: number;
  @Input() annualInterestRate: number;
  @Input() paymentType: string;

  monthlyPayment = {label: "Monthly payment", numberValue: 0};
  totalAmountPayments = {label: "Total amount payments", numberValue: 0};
  totalAmountOverpayments = {label: "Total amount overpayments", numberValue: 0};

}
