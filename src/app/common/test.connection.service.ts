import { Injectable } from '@angular/core';
import { ConnectionService } from './connection.service';
import { MatSnackBar } from '@angular/material';
import { ConnectComponent } from '../connect-page/connect/connect.component';
@Injectable()
export class TestConnectionService {
    constructor(private connectionService: ConnectionService, private snackBar: MatSnackBar){
    }

    testConnection(formData,callback){
        console.log(formData.value);
        if(formData.value.type === 'Teradata'){
              console.log(formData.value.username);
              this.connectionService.establishConnection(formData.value);
              this.connectionService.get((err,conn) => {
              if(err){
                //ConnectComponent.isValidCard = false;
                console.log(err);
                console.log("error");
                this.snackBar.open("Connection Unsuccessful..!!" ,'', {
                  duration: 2000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'center'
                });
              // 
              callback(false);
              } else {
                console.log(conn);
    
                console.log("success");
                this.snackBar.open("Connection Successful.." ,"", {
                  duration:2000,
                });
                callback(true);
                //ConnectComponent.isValidCard = true;
              }
            });
        }
        else
        {
          console.log(formData.value.type);
          this.connectionService.establishConnection(formData.value);
          this.connectionService.get((err,conn) => {
          if(err){
            //ConnectComponent.isValidCard = false;
            console.log(err);
            console.log("error");
            this.snackBar.open("Connection Unsuccessful..!!" ,'', {
              duration: 2000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center'
            });
           // 
           callback(false);
          } else {
             console.log("success");
             this.snackBar.open("Connection Successful.." ,"", {
               duration:2000,
             });
             //ConnectComponent.isValidCard = true;
             callback(true);
          }
        });
    }
}
}