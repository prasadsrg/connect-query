import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectComponent } from '../../connect-page/connect/connect.component';
import { Session } from 'protractor';
import * as csv2sql  from 'csv2sql-stream';
import * as fs from 'fs';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  public databaseCard: any; 
  constructor(private router:Router) {
  }

  ngOnInit() {
  }
  uploadMultipleFiles(){
    
    var dialog = require('open-file-dialog');
    dialog({
      multiple:true,
    }, files => {
      console.log(files);
       let fileList = JSON.parse(JSON.stringify(files));
       console.log(fileList);
       this.databaseCard = JSON.parse(sessionStorage.getItem('cq_current'));
       for(var i = 0;i <files.length;++i) {
        // var csv = require('csv');
        // var fs = require('fs');
        // fs.createReadStream(files[i].path)
        // .pipe(csv.parse())
        // .on('data',function(data){
        //   var jsonexport = require('jsonexport');
        //   this.databaseCard = JSON.parse(sessionStorage.getItem('cq_current'));

        //   jsonexport(data, (err,csvdata) => {
        //     if(err) 
        //     console.log(err);
        //     var cm = require('csv-mysql');
        //     var options ={mysql: {
        //       host: this.databaseCard.host,
        //       user: this.databaseCard.username,
        //       password: this.databaseCard.password,
        //       database: this.databaseCard.schema,
        //     },
        //     csv: {
        //       comment: '#',
        //       quote: '"'
        //     },
        //     table:'emp'};
            
        //     cm.import(options,csvdata,function(err,rows){
        //       console.log(rows);
        //     });
        //   });
        // });
        //exporter(this.databaseCard.host,this.databaseCard.schema,this.databaseCard.username,this.databaseCard.password, files[i].path);
        console.log(files[i]);
        csv2sql.transform("emp",fs.createReadStream(files[i].path))
          .on('data',function(sql){
            console.log(sql); //INSERT INTO DOGS ...
          })
          .on('end',function(rows){
            console.log(rows); // 5 - Num of rows handled, including header
          })
          .on('error', function(error){
            console.error(error); //Handle error
          })
    }
  })
 }
  switchToLayout(){
    this.router.navigate(['layout']);
  }
}
