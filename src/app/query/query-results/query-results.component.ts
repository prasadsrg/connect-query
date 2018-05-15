import { Component, OnInit, SimpleChanges, Input, OnChanges, Output } from '@angular/core';
import { QueryService } from '../query.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-query-results',
  templateUrl: './query-results.component.html',
  styleUrls: ['./query-results.component.scss']
})
export class QueryResultsComponent implements OnChanges {

  @Input()
  inputData: any = null;
  error:any = {code:null,sqlMessage:null,errno:null,sqlState:null,sql:null,name:null};
  error_visible:boolean = false;
  insert_query:boolean = false;
  constructor(private queryService: QueryService) { }

  @Output()
  outputEvent: EventEmitter<any> = new EventEmitter();

  public dataColumns: any[] = [];
  public dataList: any[] = [];
  ngOnChanges(changes: SimpleChanges) {
    const inputData = (changes as any).inputData ||"";
    if ((changes as any).inputData != undefined && (inputData.currentValue)) {
      this.executeQuery(inputData.currentValue);
    }
  }

  executeQuery(query: any){
    //console.log(query);
    this.dataColumns = [];
    this.dataList = [];
    this.queryService.executeQuery(query, (rows,fields) =>{
      if(fields === undefined)
      {
        this.error_visible = false;
        this.insert_query = true;
      }
      else if(fields === "error")
      {
        this.error = rows;
        this.error_visible = true;
        this.insert_query = false;
        //document.getElementById("err").innerHTML = this.error;
        console.log(rows);
      }
      else
      {
        this.error_visible = false;
        this.insert_query = false;
      fields.forEach(element => {
        this.dataColumns.push({td: element.name, th: element.name});
      });
      this.dataList = rows;
      this.outputEvent.emit(this.dataList);
    }
    })
  
  }
  
}
