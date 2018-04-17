import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TablesComponent } from '../tables/tables.component';
import { GenerateQueryComponent } from '../generate-query/generate-query.component';

@Component({
  selector: 'app-query-grid',
  templateUrl: './query-grid.component.html',
  styleUrls: ['./query-grid.component.scss']
})
export class QueryGridComponent implements OnInit {
  public queryText="";

  // editorOptions:any = {theme: 'vs-dark', language: 'javascript'};
  // code: string= 'function x() {\nconsole.log("Hello world!");\n}';
  
  public tablePart :any = null;
  public attributePart:any = null;
  public completeQuery:any = null;
  @Output()
  outputEvent: EventEmitter<any> = new EventEmitter();
  constructor() {
    
  }

  ngOnInit() {
  }

  executeQuery(){
    console.log(this.queryText);
    this.outputEvent.emit(this.queryText);
  }
  tableDataSuccess($event:any){
    if(this.tablePart === null)
    this.tablePart = " from "+JSON.parse(JSON.stringify($event)).dragData;
    else
    this.tablePart += " inner join "+JSON.parse(JSON.stringify($event)).dragData;
    console.log(this.tablePart)
  }
  selectDataSuccess($event:any){
    if(this.attributePart === null)
    this.attributePart = "select "+JSON.parse(JSON.stringify($event)).dragData;
    else
    this.attributePart = this.attributePart+","+JSON.parse(JSON.stringify($event)).dragData;
  }
  generateQuery(){
    if(this.attributePart === null)
    this.completeQuery = "select * "+this.tablePart;
    else
    this.completeQuery = this.attributePart+this.tablePart;
    this.queryText = this.completeQuery;
  }
}
