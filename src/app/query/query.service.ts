import { Injectable } from '@angular/core';
import { MysqlConnectionService } from '../common/mysql-connection.service';

@Injectable()
export class QueryService {

  constructor(private mysqlConnectionService: MysqlConnectionService) {

   }

   getTables(callback){
    this.mysqlConnectionService.get( (err, conn) =>{
      if(err) throw err;
      conn.query("SHOW TABLES;", (err, rows) => {
              if(err)  throw err;
              callback(rows) 
      });
    });
   }

}
