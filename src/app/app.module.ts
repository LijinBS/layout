import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccordionComponent } from './accordion/accordion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { DxDataGridModule, DxTemplateModule, DxProgressBarModule, DxChartModule, DxPieChartModule } from 'devextreme-angular';
import { ChartComponent } from './chart/chart.component';
import { PiechartComponent } from './piechart/piechart.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccordionComponent,
    TableComponent,
    ChartComponent,
    PiechartComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    DxDataGridModule,
    DxTemplateModule,
    DxProgressBarModule,
    DxChartModule,
    DxPieChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
