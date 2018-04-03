import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit{
  public tables: any = [];
  public tables_info:any = [];
  public table_name:any;
  constructor(private query_service: QueryService, private router: Router) {
  }
  ngOnInit(){

  }
  getTables(){
    this.query_service.getTables((data) =>{
      console.log(data);
      this.tables = data;
    });
  }
  getTablesInfo(table_name){
    this.query_service.getTableInfo(table_name,(rows,fields)=>{
      this.tables_info = rows;
      console.log(this.tables_info);
    });
  }
  switchToConnect(){
    this.router.navigate(['connect']);
  }
}
