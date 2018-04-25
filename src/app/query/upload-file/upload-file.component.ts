import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  public filenames:any = [];
  uploadMultipleFiles(){
    let dialog = require('open-file-dialog');
    dialog({
      multiple:true,
    },function(files){
      console.log(files);
       let fileList = JSON.parse(JSON.stringify(files));
       console.log(fileList);
       fileList.forEach(element => {
        let csv = require('csv-parser');
        let fs = require('fs');
        fs.createReadStream(element.name)
        .pipe(csv())
        .on('data',function(data){
          let jsonexport = require('jsonexport');
          jsonexport(data,function(err,csvdata){
            if(err) 
            console.log(err);
            let cm = require('csv-mysql');
            let options ={table:'emp'};
            cm.import(options,csvdata,function(err,rows){
              console.log(rows);
            });
          });
        });
      });
    })
  }
  switchToLayout(){
    this.router.navigate(['layout']);
  }
}
