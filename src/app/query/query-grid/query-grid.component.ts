import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TablesComponent } from '../tables/tables.component';

@Component({
  selector: 'app-query-grid',
  templateUrl: './query-grid.component.html',
  styleUrls: ['./query-grid.component.scss']
})
export class QueryGridComponent implements OnInit {
  public queryText="";
  public simpleDrop :any =null;
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
  transferDataSuccess($event:any){
    this.simpleDrop = "select * from "+JSON.parse(JSON.stringify($event)).dragData+ ";";
    this.queryText = this.simpleDrop;
    console.log(this.simpleDrop);
  }
}
