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
    const COUNT_MONTHS_YEAR = 12;
    let monthlyInterestRate = this.loanCalc.annualInterestRate.numberValue / (100 * COUNT_MONTHS_YEAR);
    if(this.loanCalc.selectedLoanPaymentType = "annuity")
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
      this.loanCalc.totalAmountPayments = Math.ceil(this.loanCalc.totalAmountPayments - this.loanCalc.loanAmount.numberValue);
    }else{
      this.loanCalc.monthlyPayment = 0;
    }
  }

}
