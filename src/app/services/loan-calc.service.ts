import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanCalcService {

  loanAmount = {label: 'Loan amount', numberValue: 1000};
  loanPeriodMonths = {label: 'Loan period months', numberValue: 12};
  annualInterestRate = {label: 'Annual interest rate', numberValue: 10};

  selectedLoanPaymentType: string= "annuity";

  constructor() { 
  }
}
