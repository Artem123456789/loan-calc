import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanCalcService {

  loanAmount = {label: 'Loan amount', numberValue: 1000};
  loanPeriodMonths = {label: 'Loan period months', numberValue: 12};
  annualInterestRate = {label: 'Annual interest rate', numberValue: 25};

  selectedLoanPaymentType: string= "annuity";

  monthlyPayment: number = 0;
  totalAmountPayments: number = 0;
  totalAmountOverpayments: number = 0;

  differentedLoanPayment: Array<any> = [];

  constructor() { 
  }
}
