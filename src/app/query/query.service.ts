import { Injectable } from '@angular/core';
import { MysqlConnectionService } from '../common/mysql-connection.service';
import { ConnectPageService } from '../connect-page/connect/connect-page.service';

@Injectable()
export class QueryService {
  private q:any;
  database_card: any;
  constructor(private mysqlConnectionService: MysqlConnectionService, private connectService: ConnectPageService) {
    
   }

   getTables(callback){
    this.database_card = JSON.parse(sessionStorage.getItem('cq_current'));
    this.mysqlConnectionService.get( (err, conn) =>{
    var str;
    str = this.database_card.schema;
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
