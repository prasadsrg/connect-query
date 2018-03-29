import { Injectable } from '@angular/core';
import * as fs from 'fs';
import * as mysql from 'mysql';

@Injectable()
export class ConnectPageService {

  constructor() { }
  databases = ['Teradata','Mysql'];

  AppendToJSONFile(value:any) {
    //var json = JSON.stringify(value);
    fs.writeFileSync('./src/assets/connect-page.json',value, 'utf8');

  }
  ReadFromJSONFile(): any {
     return fs.readFileSync('./src/assets/connect-page.json','utf8');
  }
  // establishConnection(database_card:any) {
  //   let connection = mysql.createPool({
  //     connectionLimit : 1000,
  //     connectTimeout  : 60 * 60 * 1000,
  //     aquireTimeout   : 60 * 60 * 1000,
  //     timeout         : 60 * 60 * 1000,
  //     host     : database_card.host,
  //     port      : database_card.port,
  //     user     : database_card.username,
  //     password : database_card.password,
  //     database : database_card.name
  //   });
 
    // connection.connect(function(err){
    //   if(err)
    //   throw err;
    //   console.log('done');
    // });
  //   connection.getConnection(function(err, conn){
  //     conn.query("select * from emp", function(err, rows) {
  //       if(err)  throw err;
  //         console.log(rows);
  //     })
  // });
//}
}
