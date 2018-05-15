import { Component, OnInit, Input } from '@angular/core';
import { QueryService } from '../query.service';
import { Router } from '@angular/router';
//import { DragAndDropModule } from 'angular-draggable-droppable';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})

export class TablesComponent implements OnInit{
  @Input()
  public tables: any = [];
  //public tables_info: Map<any,any>;
  public table_size : any;
  constructor(private query_service: QueryService, private router: Router) {
  }
  ngOnInit(){
  }
  getTables(){
    this.query_service.getTables((err, data) =>{
      //console.log(data);
      this.tables = [];
      data.forEach(element => {
        this.tables.push({table_name: element.table_name, attrs:[]})
      });
      this.table_size = Object.keys(this.tables).length;
    });
  }
  getTablesInfo(table){
    table.attrs = [];
    this.query_service.getTableInfo(table.table_name,(rows,fields)=>{
      table.attrs = rows
      //this.tables_info.set(table_name,rows);
      //console.log(this.tables_info);
    });
  }
  switchToConnect(){
    this.router.navigate(['connect']);
  }
  switchToUploadFile(){
    this.router.navigate(['generate']);
  }
}
