import { Injectable } from '@angular/core';
import { LoanCalcInfoService } from './loan-calc-info.service';

@Injectable({
  providedIn: 'root'
})
export class LoanCalcService {

  constructor(private loanInfo: LoanCalcInfoService /*calculate loan main indicators*/) { 
  }

  //basic loan info properties
  private _loanAmount = {label: 'Loan amount', value: 1000000000};
  private _loanPeriodMonths = {label: 'Loan period months', value: 24};
  private _annualInterestRate = {label: 'Annual interest rate', value: 25};
  private _loanPaymentType: string= "differentiated";

  //information for payment loan properties
  private _monthlyPayment: number = 0;
  private _totalAmountPayments: number = 0;
  private _totalAmountOverpayments: number = 0;
  private _differentedLoanPayment: Array<any> = [];

  //getters and setters for properties
  public get loanAmount(): any{
    return this._loanAmount;
  }

  public get loanPeriodMonths(): any{
    return this._loanPeriodMonths;
  }

  public get annualInterestRate(): any{
    return this._annualInterestRate;
  }

  public get loanPaymentType(): string{
    return this._loanPaymentType;
  }

  public set loanPaymentType(loanPaymentType: string){
    this._loanPaymentType = loanPaymentType;
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

  public get differentedLoanPayment(): Array<any>{
    return this._differentedLoanPayment;
  }

  public set differentedLoanPayment(differentedLoanPayment: Array<any>){
    this._differentedLoanPayment = [...differentedLoanPayment];
  }

  //updates information about credit
  setMonthlyPayment(){
    this.loanInfo.setMonthlyPayment(this._loanAmount.value, this._loanPeriodMonths.value, this._annualInterestRate.value, this._loanPaymentType);
    this._monthlyPayment = this.loanInfo.monthlyPayment;
    this._totalAmountPayments = this.loanInfo.totalAmountPayments;
    this._totalAmountOverpayments = this.loanInfo.totalAmountOverpayments;
    this._differentedLoanPayment = [...this.loanInfo.differentedLoanPayment];
  }

}
