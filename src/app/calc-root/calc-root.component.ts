import { Component, OnInit, DoCheck } from '@angular/core';
import { LoanCalcService } from '../services/loan-calc.service';

@Component({
  selector: 'calc-root',
  templateUrl: './calc-root.component.html',
  styleUrls: ['./calc-root.component.css']
})

export class CalcRootComponent implements OnInit, DoCheck {

  constructor(private loanCalc: LoanCalcService) {
  }

  ngOnInit() {
  }

  ngDoCheck(){
    const COUNT_MONTHS_YEAR: number = 12;
    let monthlyInterestRate: number = this.loanCalc.annualInterestRate.numberValue / (100 * COUNT_MONTHS_YEAR);
    if(this.loanCalc.selectedLoanPaymentType == "annuity")
    {
      this.loanCalc.monthlyPayment = Math.ceil(
        this.loanCalc.loanAmount.numberValue * (
          monthlyInterestRate + (monthlyInterestRate / 
            (
              Math.pow(1 + monthlyInterestRate, this.loanCalc.loanPeriodMonths.numberValue) - 1
            ))
        )
      );
      this.loanCalc.totalAmountPayments = Math.ceil(this.loanCalc.monthlyPayment * this.loanCalc.loanPeriodMonths.numberValue);
      this.loanCalc.totalAmountOverpayments = Math.ceil(this.loanCalc.totalAmountPayments - this.loanCalc.loanAmount.numberValue);
    }else{
      let currentDate: Date = new Date();
      let countDaysYear: number = 0;
      let interestRate: number = this.loanCalc.annualInterestRate.numberValue / 100;
      let amountPrincipalAmountLoan: number = this.loanCalc.loanAmount.numberValue;
      let loanBody: number = this.loanCalc.loanAmount.numberValue / this.loanCalc.loanPeriodMonths.numberValue;
      let paymentsSumm: number = 0;
      let monthlyInterest: number = 0;
      this.loanCalc.differentedLoanPayment = [];
      currentDate.setDate(0);
      while(amountPrincipalAmountLoan > 0){
        currentDate.setMonth(currentDate.getMonth() + 1);
        countDaysYear = currentDate.getFullYear() % 400 == 0 || (currentDate.getFullYear() % 100 != 0 && currentDate.getFullYear() % 4 == 0) ? 366 : 365;
        monthlyInterest = amountPrincipalAmountLoan * interestRate / countDaysYear * this.getCountDaysMonth(currentDate.getFullYear(), currentDate.getMonth());
        this.loanCalc.differentedLoanPayment.push({date: `${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`, 
        payment: loanBody + monthlyInterest});
        amountPrincipalAmountLoan -= loanBody;
      }
      this.loanCalc.differentedLoanPayment.forEach((val)=>{
        paymentsSumm += val.payment;
      });
      this.loanCalc.monthlyPayment = paymentsSumm / this.loanCalc.differentedLoanPayment.length;
      this.loanCalc.totalAmountPayments = paymentsSumm;
      this.loanCalc.totalAmountOverpayments = paymentsSumm - this.loanCalc.loanAmount.numberValue;
    }
  }

  getCountDaysMonth(year: number, month: number): number{
    return new Date(year, month, 0).getDate();
  }

}
