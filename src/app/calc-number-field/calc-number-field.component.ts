import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'calc-number-field',
  templateUrl: './calc-number-field.component.html',
  styleUrls: ['./calc-number-field.component.css']
})
export class CalcNumberFieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() labelText: string;
  @Input() numberValue: number;

  @Output() numberValueChange = new EventEmitter<number>();

  onNumberValueChange(newVal: number){
    this.numberValue = newVal;
    this.numberValueChange.emit(newVal);
  }

}
