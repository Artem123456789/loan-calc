import { Injectable } from '@angular/core';
import { LoanCalcInfoService } from './loan-calc-info.service';

@Injectable({
  providedIn: 'root'
})
export class LoanCalcService {

  constructor(private loanInfo: LoanCalcInfoService) { 
  }

  private _loanAmount = {label: 'Loan amount', value: 1000};
  private _loanPeriodMonths = {label: 'Loan period months', value: 12};
  private _annualInterestRate = {label: 'Annual interest rate', value: 25};

  private _selectedLoanPaymentType: string= "annuity";

  private _monthlyPayment: number = 0;
  private _totalAmountPayments: number = 0;
  private _totalAmountOverpayments: number = 0;
  private _differentedLoanPayment: Array<Object> = [];

  public get loanAmount(): Object{
    return this._loanAmount;
  }

  public get loanPeriodMonths(): Object{
    return this._loanPeriodMonths;
  }

  public get annualInterestRate(): Object{
    return this._annualInterestRate;
  }

  public get loanPaymentType(): string{
    return this._selectedLoanPaymentType;
  }

  public set loanPaymentType(loanPaymentType: string){
    this._selectedLoanPaymentType = loanPaymentType;
  }

  public get monthlyPayment(): number{
    return this._monthlyPayment;
  }

  public get totalAmountPayments(): number{
    return this._totalAmountPayments;
  }

  public get totalAmountOverpayments(): number{
    return this._totalAmountOverpayments;
  }

  public get differentedLoanPayment(): Array<Object>{
    return this._differentedLoanPayment;
  }

  public set differentedLoanPayment(differentedLoanPayment: Array<Object>){
    this._differentedLoanPayment = [...differentedLoanPayment];
  }

  setMonthlyPayment(){
    this.loanInfo.setMonthlyPayment(this._loanAmount.value, this._loanPeriodMonths.value, this._annualInterestRate.value, this._selectedLoanPaymentType);
    this._monthlyPayment = this.loanInfo.monthlyPayment;
    this._totalAmountPayments = this.loanInfo.totalAmountPayments;
    this._totalAmountOverpayments = this.loanInfo.totalAmountOverpayments;
    this._differentedLoanPayment = [...this.loanInfo.differentedLoanPayment];
  }

}
