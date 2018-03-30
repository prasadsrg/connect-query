import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit{
  private tables: any = [];
  constructor(private query_service: QueryService) {

  }
  ngOnInit(){
    this.getTables();
  }
  getTables(){
    this.query_service.getTables((err,data) =>{
      if(err) throw err;
      this.tables = data;
    });
    console.log(this.tables);
  }

}
