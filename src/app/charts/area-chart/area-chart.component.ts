import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {
  @Input() data: any;
  public chart: any;

  public options: any = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'US and USSR nuclear stockpiles'
    },
    subtitle: {
      text: 'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
        'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
        'armscontrol.org</a>'
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        formatter: function () {
          return this.value; // clean, unformatted number for year
        }
      }
    },
    yAxis: {
      title: {
        text: 'Nuclear weapon states'
      },
      labels: {
        formatter: function () {
          return this.value / 1000 + 'k';
        }
      }
    },
    tooltip: {
      pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
      area: {
        pointStart: 1940,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: null
  };
  constructor() { }

  ngOnInit() {
    this.options.series = this.data;
    this.chart = new Chart(this.options);
  }

}
