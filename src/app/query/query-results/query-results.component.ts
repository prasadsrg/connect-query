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
    this.queryService.executeQuery(query, (rows, fields) =>{
      this.dataColumns = [];
      this.dataList = [];

      fields.forEach(element => {
        this.dataColumns.push({td: element.name, th: element.name});
      });
      this.dataList = rows;
      this.outputEvent.emit(this.dataList);
    })
  
  }
  
}
