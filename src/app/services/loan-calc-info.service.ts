import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoanCalcInfoService {

  constructor() { }

  //service properties
  private _monthlyPayment: number = 0;
  private _totalAmountPayments: number = 0;
  private _totalAmountOverpayments: number = 0;
  private _differentedLoanPayment: Array<any> = []; 

  //getters and setters for properties
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

  //calculates monthly payment
  public setMonthlyPayment(loanAmount: number, loanPeriodMonths: number, annualInterestRate: number, paymentType: string){
    const COUNT_MONTHS_YEAR = 12;
    //calculates monthly payment if payment type is annuity
    if(paymentType == "annuity"){
      //algorithm of calculating monthly payment
      let monthlyInterestRate = annualInterestRate / (100 * COUNT_MONTHS_YEAR);
      this._monthlyPayment = 
      loanAmount*(
        (
          monthlyInterestRate + (
          monthlyInterestRate 
          /
          (
            Math.pow(1 + monthlyInterestRate, loanPeriodMonths) - 1
          )) 
        )
      )
    }else{
      //calculates monthly payment if payment type is differentiated
      const COUNT_DAYS_LEAP_YEAR = 366;
      let currentDate: Date = new Date();
      let countDaysYear: number = 0;
      let interestRate = annualInterestRate / 100;
      let amountPrincipalAmountLoan = loanAmount;
      let loanBody = loanAmount / loanPeriodMonths;
      let paymentsAmount: number = 0;
      let monthlyInterestRate: number = 0;
      let payment: number = 0;
      this._differentedLoanPayment = [];
      while(amountPrincipalAmountLoan > 0){
        currentDate.setMonth(currentDate.getMonth() + 1);//increments months
        countDaysYear = currentDate.getFullYear() % 400 == 0 || (currentDate.getFullYear() % 100 != 0 && currentDate.getFullYear() % 4 == 0) ? COUNT_DAYS_LEAP_YEAR : COUNT_DAYS_LEAP_YEAR - 1;//determines whether the year is a leap year
        monthlyInterestRate = amountPrincipalAmountLoan * interestRate / countDaysYear * this.getCountDaysMonth(currentDate.getFullYear(), currentDate.getMonth());//calculates monthly interest
        payment = loanBody + monthlyInterestRate;
        this._differentedLoanPayment.push({date: new Date(currentDate.getTime()), payment: payment});//adds to array monthly payment info
        paymentsAmount += payment;
        amountPrincipalAmountLoan -= loanBody;
      }
      this._monthlyPayment = paymentsAmount / loanPeriodMonths;
    }
    //sets total amount payments and total amount overpayments
    this._totalAmountPayments = this.monthlyPayment * loanPeriodMonths;
    this._totalAmountOverpayments = this._totalAmountPayments - loanAmount;
  }

  private getCountDaysMonth(year: number, month: number): number{
    return new Date(year, month, 0).getDate();
  }

}
