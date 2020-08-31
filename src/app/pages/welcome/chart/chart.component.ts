import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [0, 7, 10, 12, 14, 20, 25], label: 'Your Portfolio Value' },
  ];
  public lineChartLabels: Label[] = ['12-jan', '14-jan', '16-jan', '18-jan', '20-jan', '22-jan', '24-jan'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'white',
      backgroundColor: 'rgba(255,0,0,0.3)'
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  constructor() { }

  ngOnInit() {
  }

}
