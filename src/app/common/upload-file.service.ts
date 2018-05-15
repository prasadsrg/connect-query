import { Injectable } from '@angular/core';
import * as csv2sql from 'csv2sql-stream';
import *as fs from 'fs';

@Injectable()
export class FileUploadService{
  //let data = sessionStorage.getItem('cq_current');
    getUploadQueries(tableName, files, callback):any{
        csv2sql.transform(tableName,fs.createReadStream(files.path))
          .on('data',(data) => {
            //console.log(data);
            callback (data);
          })
    }

}