import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { DonutChartComponent } from './charts/donut-chart/donut-chart.component';
import { ChartModule } from 'angular-highcharts';
import { MatButtonModule } from '@angular/material/button';
import { QueryFormComponent } from './forms/query-form/query-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    AreaChartComponent,
    PieChartComponent,
    DonutChartComponent,
    QueryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    DragDropModule,
    MatCardModule,
    ChartModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    NgxDaterangepickerMd.forRoot({
      separator: ' - to - ',
      applyLabel: 'Okay',
    })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
