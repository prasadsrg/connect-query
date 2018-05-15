import { Component, OnInit,Input } from '@angular/core';
import {QueryService} from '../query.service';
import { query } from '@angular/animations';
import { $ } from 'protractor';
import * as di from 'datalib';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'; 
import { DataSummaryComponent } from '../data-summary/data-summary.component';

@Component({
  selector: 'app-query-layout',
  templateUrl: './query-layout.component.html',
  styleUrls: ['./query-layout.component.scss']
})
export class QueryLayoutComponent implements OnInit {

  private query: string;
  //@Input()
  public dataList:any = [];
  public dataSummary:any ;
  constructor(private queryService: QueryService, public dialog:MatDialog) {
  }

  ngOnInit() {
  }
  executeQuery($event: any){
    this.query = $event;
  }
  handleData($event){
    console.log("hi");
    //console.log($event.id);
    //this.dataList = JSON.parse(JSON.stringify($event.dataColumns));
    //console.log(this.dataList[0].id);
    this.dataList = JSON.parse(JSON.stringify($event));
  }
  selectFile(){
    let fdiag = require('save-file');
    //let data = "sachin cd df";
    //console.log(this.dataColumns);
    //console.log(data);
    let jsonexport = require('jsonexport');
    jsonexport(this.dataList,function(err,csv){
      if(err) return console.log(err);
      fdiag(csv,'',(err,data) =>{
        if(err) throw err;
        //console.log(data);
      });
      console.log(csv);
  });
  }
  statsSummary(){
    console.log(this.dataList);
    this.dataSummary =  di.summary(this.dataList);
    console.log(this.dataSummary[0]);
    let dialogRef = this.dialog.open(DataSummaryComponent,{
      //width: '900px',
      data: [this.dataSummary]
    });
  }
//     var rollup = di.groupby()
//   .summarize({'dqd': ['mean', 'stdev']})
//   .execute(this.dataList);
// console.log(di.format.table(rollup));
}

