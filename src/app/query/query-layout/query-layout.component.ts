import { Component, OnInit } from '@angular/core';
import {QueryService} from '../query.service';
import { query } from '@angular/animations';
import { $ } from 'protractor';
@Component({
  selector: 'app-query-layout',
  templateUrl: './query-layout.component.html',
  styleUrls: ['./query-layout.component.scss']
})
export class QueryLayoutComponent implements OnInit {

  private query: string;
  constructor(private queryService: QueryService) { }

  ngOnInit() {
  }
  executeQuery($event: any){
    this.query = $event;
  }
}
