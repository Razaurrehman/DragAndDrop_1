import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {
  @Input() data: any;
  public chart: any;

  public options: any = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45
      }
    },
    title: {
      text: 'Contents of Highsoft\'s weekly fruit delivery'
    },
    subtitle: {
      text: '3D donut in Highcharts'
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45
      }
    },
    series: null
  }
  constructor() { }

  ngOnInit() {
    this.options.series = this.data;
    this.chart = new Chart(this.options);
  }

}
