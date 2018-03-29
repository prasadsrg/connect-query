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
  establishConnection(database_card:any) {
    console.log(database_card);
    //var mysql = require('mysql');
    let connection = mysql.createConnection({
      host     : database_card.host,
      user     : database_card.username,
      password : database_card.password,
      database : database_card.name
    });
     
    connection.connect(function(err){
      if(err)
      throw err;
      console.log('done');
    });
  }
}
