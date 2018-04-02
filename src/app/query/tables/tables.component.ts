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
  constructor(private query_service: QueryService, private router: Router) {

  }
  ngOnInit(){
    this.getTables();
  }
  getTables(){
    this.query_service.getTables((data) =>{
      console.log(data);
      this.tables = data;
    });
    
  }
  switchToConnect(){
    this.router.navigate(['connect']);
  }

}
