import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.scss']
})
export class QueryFormComponent implements OnInit {
  @Input() public queryForm: any;
  constructor() { }

  ngOnInit() {
    console.log(this.queryForm['key']);
  }

}
