import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { ProgressComponent } from './progress/progress.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [WelcomeRoutingModule, ChartsModule, NgZorroAntdModule, FormsModule,
    HttpClientModule, CommonModule],
  declarations: [WelcomeComponent, ChartComponent, ProgressComponent, CardComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
