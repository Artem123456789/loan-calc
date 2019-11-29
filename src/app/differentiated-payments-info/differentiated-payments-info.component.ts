import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'differentiated-payments-info',
  templateUrl: './differentiated-payments-info.component.html',
  styleUrls: ['./differentiated-payments-info.component.css']
})
export class DifferentiatedPaymentsInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() dirrerentiedPayments: Array<any>;

}
