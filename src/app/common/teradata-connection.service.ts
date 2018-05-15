import { Injectable } from '@angular/core';
import * as teradata from 'node-teradata';

@Injectable()
export class TeradataConnectionService {
  private config;
  constructor() {
    // let database_card: any = sessionStorage.getItem('cq_current');
    // console.log(database_card);
    // if(database_card) {
    //   this.establishConnection(JSON.parse(database_card));
    // }
   }
  establishConnection(database_card:any) {
    //console.log(database_card);
    sessionStorage.setItem('cq_current', JSON.stringify(database_card));
    this.config = {
        url: 'jdbc:teradata://'+database_card.host+'/'+database_card.schema,
        username: database_card.username,
        password: database_card.password,
        driver: './jars/',
        minPoolSize: 1,
        maxPoolSize: 100,
        keepalive: {
          interval: 60000,
          query: 'SELECT 1',
          enabled: true
        }
      };
      // console.log(this.config.driver);
      // this.get( (err, conn) => {
      //   if(err){
      //     console.log(err);
      //   }
      //   var query = `SELECT DataBaseName, TableName FROM DBC.TABLESV WHERE  DATABASENAME LIKE 'temp'`;
      //   conn.read(query)
      //   .then(function(response) {
      //     console.log(response);
      //   });
      // })
  }

  get(callback: any){
    console.log(this.config);
    let td = new teradata(this.config);
    callback(null, td);
  }
}
