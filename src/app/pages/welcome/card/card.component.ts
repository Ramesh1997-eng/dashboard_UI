import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  mockData = [
    { data: 'TradingAmount', amount: '266.6 CCRB' },
    { data: 'MiningBalance', amount: '266.6 CCRB' },
    { data: 'Miningpending', amount: '266.6 CCRB' },
    { data: 'Total', amount: '266.6 CCRB' }

  ]
  constructor() { }

  ngOnInit() {
  }

}
