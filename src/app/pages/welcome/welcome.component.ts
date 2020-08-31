import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  data = [
    { data: 'Cyptocarbon(CCRB)', amount: '266.6 CCRB' },
    { data: 'Cyptocarbon(CCRB)', amount: '266.6 CCRB' },
    { data: 'Cyptocarbon(CCRB)', amount: '266.6 CCRB' },
    { data: 'Cyptocarbon(CCRB)', amount: '266.6 CCRB' }

  ]
  constructor() { }

  ngOnInit() {
  }

}
