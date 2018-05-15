import { Injectable } from '@angular/core';
import { ConnectionService } from '../common/connection.service';
import { ConnectPageService } from '../connect-page/connect/connect-page.service';

@Injectable()
export class QueryService {
  database_card: any;
  constructor(private connectionService: ConnectionService, private connectService: ConnectPageService) {
    
   }

   getTables(callback){
    this.database_card = JSON.parse(sessionStorage.getItem('cq_current'));
    this.connectionService.get( (err, conn) =>{
        if(err) throw err;
        var str;
        str = this.database_card.schema;
        let q = ConnectionService.props.TABLE_INFO+"'"+str+"'";
        this.connectionService.query(q, callback);
        // var query= conn.query(q, (err, rows) => {
        //         if(err)  throw err;
        //         callback(JSON.parse(JSON.stringify(rows))) 
        // });
      //console.log(query.sql);
    });
   }

   executeQuery(queryText, callback){
    this.connectionService.get( (err, conn) =>{
        if(err) throw err;
        var query= conn.query(queryText, (err, rows, fields) => {
                if(err)  callback(JSON.parse(JSON.stringify(err)),"error");
                callback(JSON.parse(JSON.stringify(rows)), fields) 
        });
        //console.log(query.sql);
      });
   }
   getTableInfo(table_name,callback){
        this.connectionService.get( (err, conn) =>{
                if(err) throw err;
                var query= conn.query("describe "+table_name, (err, rows, fields) => {
                        if(err)  throw err;
                        callback(JSON.parse(JSON.stringify(rows)), fields) 
                });
                //console.log(query.sql);
              });
   }

}
