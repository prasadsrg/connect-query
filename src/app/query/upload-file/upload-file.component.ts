import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectComponent } from '../../connect-page/connect/connect.component';
import { Session } from 'protractor';
import * as csv2sql  from 'csv2sql-stream';
import * as fs from 'fs';
import { FileUploadService } from '../../common/upload-file.service';
import { QueryService } from '../../query/query.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  public databaseCard: any;
  public sdata:any = [];
  constructor(private router:Router, private fileUploadService: FileUploadService, private queryService: QueryService) {
  }

  ngOnInit() {
  }
  uploadMultipleFiles(value:any){
    
    var dialog = require('open-file-dialog');
    dialog({
      multiple:true,
    }, files => {
      console.log(files);
       let fileList = JSON.parse(JSON.stringify(files));
       console.log(fileList);
       this.databaseCard = JSON.parse(sessionStorage.getItem('cq_current'));
       console.log(value.tname);
       for(var i = 0;i <files.length;++i) {
        
      this.fileUploadService.getUploadQueries(value.tname, files[i], (data) => {
               this.sdata.push(data);
        });
       // console.log(this.sdata);
        // for(let j = 0; j < uploadQueries; ++j) {
        //   this.queryService.executeQuery(uploadQueries[j],(rows,fields) =>{
        //   })
        // }
        this.sdata = JSON.parse(JSON.stringify(this.sdata));
        this.sdata.forEach(element => {
          this.queryService.executeQuery(element,(rows,fields) =>{
          })
          console.log(element);
          //console.log("hi");
        });
       }
})
  }
  switchToLayout(){
    this.router.navigate(['layout']);
  }
}
