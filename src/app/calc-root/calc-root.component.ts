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
    //updated monthly payment, amount payments, amount overpayments, and differentiated payments list
    this.loanCalc.setMonthlyPayment();
  }

}
