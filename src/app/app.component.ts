import { Component } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public chartId: any;
  constructor(public appService: AppService, public Http: HttpClient) { }

  public downloadAs(pdfExportModule) {
    const innerHTML = {
      data: pdfExportModule['innerHTML'],
      _id: 1,
      status: "d",
      title: null
    };
    console.log(innerHTML['data']);
    let headers = new HttpHeaders().set('Authorization', `JWT eyJraWQiOiJMQ0dJRXl6NXQ4UElBbTJucmNjemU2VGNmMGZLS1RnMlVwZmN5VVAyOURBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OTZjMGE2Yy04NmUyLTQ0MjMtOGVkZi02YjA1NTIxMjA2YjUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfcVB0WVV3VzhLIiwiY29nbml0bzp1c2VybmFtZSI6Ijk5NmMwYTZjLTg2ZTItNDQyMy04ZWRmLTZiMDU1MjEyMDZiNSIsImF1ZCI6ImJhYzVuNnFhN2lrODZjNDhxM2xtZTUxaDciLCJjdXN0b206bGFzdF9uYW1lIjoiV2FoYWIiLCJldmVudF9pZCI6IjYxYjQ3MDkwLWQxZTEtNDc3ZS1iM2RiLWI0MmU1NTY0NGQwZiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTY2Mjk2NTYyLCJuYW1lIjoiVXNtYW4iLCJleHAiOjE1NjY0ODY0MzEsImlhdCI6MTU2NjQ4MjgzMSwiZW1haWwiOiJ1c21hbi53YWhhYkBtYWlsaW5hdG9yLmNvbSJ9.XbgYcEY9OuCoaPVYxiwU3ZmeUOeIdtvxHcjm1F97kbJ_7bDaaet3IWFGrxqtRiLwWIvK6Ufjj9N-VEF4MhZHIOj0S9AezM5P2p-yHf8cMfXnqKNUCy6lKOOsTfwPnf_OhhKYyAaQyRewMVqmXj0fjIHo-K_FK4slAciZxinRgHITCwjEwp3hRaOOEI0zyp6hde2k3hYIhZcnPPFKETiriNQ931laH4OjL8XvEJetuRM2ElVIrFuW7Kd5X7SKWrp17FL6_gF-XcT0V_1KzxwDf93B4Uiu4Yk59pqBglYVhi2jOdsgqY-FLhWC_6tBX-zpSZqLnpOWUhRYcGFihTo3Ig`);
    this.Http.post('http://192.168.0.203:8000/export_pdf/download/', innerHTML, { responseType: 'blob', headers: headers }).subscribe((rex) => {
      saveAs(rex, `pdf report.pdf`)
    })
  }

  header = [
    {
      name: 'Engagement Overview',
      key: 'engagement_overview',
      data: [
        {
          name: 'Line 1',
          data: [Math.random() + 10, Math.random() + 10, Math.random() + 10]
        }
      ]
    },
    {
      name: 'Comparison Engagement',
      key: 'comparison_engagement',
      data: [{
        name: 'USA',
        data: [
          null, null, null, null, null, 6, 11, 32, 110, 235,
          369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
          20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
          26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
          24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
          21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
          10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
          5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
        ]
      }]
    },
    {
      name: 'Comparison Platform',
      key: 'comparison_platform',
      data: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Other',
          y: 7.05
        }]
      }]
    },
    {
      name: 'comparison Trend',
      key: 'comparison_trend',
      data: [{
        name: 'Delivered amount',
        data: [
          ['Bananas', 8],
          ['Kiwi', 3],
          ['Mixed nuts', 1],
          ['Oranges', 6],
          ['Apples', 8],
          ['Pears', 4],
          ['Clementines', 4],
          ['Reddish (bag)', 1],
          ['Grapes (bunch)', 1]
        ]
      }]
    },
    {
      name: 'Posts',
      key: 'posts',
      data: [{
        name: 'Delivered amount',
        data: [
          ['Bananas', 8],
          ['Kiwi', 3],
          ['Mixed nuts', 1],
          ['Oranges', 6],
          ['Apples', 8],
          ['Pears', 4],
          ['Clementines', 4],
          ['Reddish (bag)', 1],
          ['Grapes (bunch)', 1]
        ]
      }]
    },
    {
      name: 'Engagement Distribution',
      key: 'engagement_distribution',
      data: [{
        name: 'Delivered amount',
        data: [
          ['Bananas', 8],
          ['Kiwi', 3],
          ['Mixed nuts', 1],
          ['Oranges', 6],
          ['Apples', 8],
          ['Pears', 4],
          ['Clementines', 4],
          ['Reddish (bag)', 1],
          ['Grapes (bunch)', 1]
        ]
      }]
    },
    {
      name: 'Engagement Summary',
      key: 'engagement_summary',
      data: [{
        name: 'Delivered amount',
        data: [
          ['Bananas', 8],
          ['Kiwi', 3],
          ['Mixed nuts', 1],
          ['Oranges', 6],
          ['Apples', 8],
          ['Pears', 4],
          ['Clementines', 4],
          ['Reddish (bag)', 1],
          ['Grapes (bunch)', 1]
        ]
      }]
    },
    {
      name: 'Engagement Trend',
      key: 'engagement_trend',
      data: [{
        name: 'Delivered amount',
        data: [
          ['Bananas', 8],
          ['Kiwi', 3],
          ['Mixed nuts', 1],
          ['Oranges', 6],
          ['Apples', 8],
          ['Pears', 4],
          ['Clementines', 4],
          ['Reddish (bag)', 1],
          ['Grapes (bunch)', 1]
        ]
      }]
    },
    {
      name: 'Activity',
      key: 'activity',
      data: [{
        name: 'Delivered amount',
        data: [
          ['Bananas', 8],
          ['Kiwi', 3],
          ['Mixed nuts', 1],
          ['Oranges', 6],
          ['Apples', 8],
          ['Pears', 4],
          ['Clementines', 4],
          ['Reddish (bag)', 1],
          ['Grapes (bunch)', 1]
        ]
      }]
    }
  ];

  content = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer.data) {
      this.chartId = 'container' + new Date().valueOf() + Math.random() + 100;
      this.content.push(this.header[event.previousIndex])
    }
  }

  deleteItem(index) {
    this.content = [...this.content.filter((item, Index, array) => Index !== index)];
  }
}
