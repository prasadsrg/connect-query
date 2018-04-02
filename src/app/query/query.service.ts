import { Injectable } from '@angular/core';
import { MysqlConnectionService } from '../common/mysql-connection.service';
import { ConnectPageService } from '../connect-page/connect/connect-page.service';

@Injectable()
export class QueryService {
  private q:any;
  constructor(private mysqlConnectionService: MysqlConnectionService, private connectService: ConnectPageService) {
    
   }

   getTables(callback){
    this.mysqlConnectionService.get( (err, conn) =>{
    var str;
    str = this.connectService.getCard().schema;
    this.q = "SELECT table_name FROM information_schema.tables WHERE table_schema='"+str+"'";
      if(err) throw err;
      var query= conn.query(this.q, (err, rows) => {
              if(err)  throw err;
              callback(JSON.parse(JSON.stringify(rows))) 
      });
      console.log(query.sql);
    });
   }

}
