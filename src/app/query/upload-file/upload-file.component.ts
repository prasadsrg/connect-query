import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectComponent } from '../../connect-page/connect/connect.component';
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
    this.databaseCard = ConnectComponent.database_card;
    var dialog = require('open-file-dialog');
    dialog({
      multiple:true,
    },function(files){
      console.log(files);
       let fileList = JSON.parse(JSON.stringify(files));
       console.log(fileList);
       for(var i = 0;i <files.length;++i) {
        var csv = require('csv-parser');
        var fs = require('fs');
        fs.createReadStream(files[i].path)
        .pipe(csv())
        .on('data',function(data){
          var jsonexport = require('jsonexport');
          jsonexport(data,function(err,csvdata){
            if(err) 
            console.log(err);
            var cm = require('csv-mysql');
            var options ={mysql: {
              host: '127.0.0.1',
              user: this.databaseCard.username,
              database: this.databaseCard.schema,
            },
            csv: {
              comment: '#',
              quote: '"'
            },
            table:'emp'};
            
            cm.import(options,csvdata,function(err,rows){
              console.log(rows);
            });
          });
        });
    }
  })
 }
  switchToLayout(){
    this.router.navigate(['layout']);
  }
}
