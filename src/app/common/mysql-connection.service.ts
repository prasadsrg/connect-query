import { Injectable } from '@angular/core';
import * as mysql from 'mysql';

@Injectable()
export class MysqlConnectionService {
  private pool;
  constructor() {
    // let database_card: any = sessionStorage.getItem('cq_current');
    // if(database_card && database_card.type == 'Mysql') {
    //   this.establishConnection(JSON.parse(database_card));
    // }
   }
  establishConnection(database_card:any) {
    //console.log(database_card);
    sessionStorage.setItem('cq_current', JSON.stringify(database_card));
    this.pool = mysql.createPool({

      connectionLimit : 1000,
      connectTimeout  : 60 * 60 * 1000,
      aquireTimeout   : 60 * 60 * 1000,
      timeout         : 60 * 60 * 1000,
      host     : database_card.host,
      port      : database_card.port,
      user     : database_card.username,
      password : database_card.password,
      database : database_card.schema
      
    });
  }

  get(callback: any){
    return this.pool.getConnection(callback);
  }
}
