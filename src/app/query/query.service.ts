import { Injectable } from '@angular/core';
import { MysqlConnectionService } from '../common/mysql-connection.service';

@Injectable()
export class QueryService {

  constructor(private mysqlConnectionService: MysqlConnectionService) {

   }

   getTables(callback){
    this.mysqlConnectionService.get( (err, conn) =>{
      if(err) throw err;
      var query= conn.query("show tables", (err, rows) => {
              if(err)  throw err;
              callback(JSON.parse(JSON.stringify(rows))) 
      });
      console.log(query.sql);
    });
   }

}
