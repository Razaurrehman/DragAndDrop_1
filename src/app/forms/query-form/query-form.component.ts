import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.scss']
})
export class QueryFormComponent implements OnInit {
  @Input() public queryForm: any;
  queryForPDFForm: FormGroup;
  streamList: number[] = [120, 121, 125, 126, 127, 128];
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }
  constructor() { }

  ngOnInit() {
    console.log(this.queryForm['key']);
    this.queryForPDFForm = new FormGroup({
      project_id: new FormControl(1, Validators.required),
      stream: new FormControl('', Validators.required),
      date: new FormControl({ start: moment(), end: moment() }, Validators.required),
      range: new FormControl({ start: moment(), end: moment() }, Validators.required),
      metric: new FormControl('', Validators.required),
      max_limit: new FormControl('', Validators.required),
    });
  }

  public formSubmitPDF() {
    console.log(this.queryForPDFForm.value);
  }

}