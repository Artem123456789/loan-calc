import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcRootComponent } from './calc-root/calc-root.component';
import { CalcNumberFieldComponent } from './calc-number-field/calc-number-field.component';
import { CalcSelectLoanTypeComponent } from './calc-select-loan-type/calc-select-loan-type.component';
import { LoanInfoComponent } from './loan-info/loan-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcRootComponent,
    CalcNumberFieldComponent,
    CalcSelectLoanTypeComponent,
    LoanInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
