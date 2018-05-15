import { Component,Inject, Output } from '@angular/core';
import { ConnectPageService } from './connect-page.service';
import { MysqlConnectionService } from '../../common/mysql-connection.service';
import { TeradataConnectionService } from '../../common/teradata-connection.service';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditCardComponent } from '../../connect-page/edit-card/edit-card.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent{
  private databases : any = [];
  
  private connections: any = [];
  public static database_card: any;
  public static isValidCard : any = false;
  database_type:any;
  constructor(private connect_service : ConnectPageService, private mysqlConnectionService: MysqlConnectionService, private router: Router, 
    public snackBar: MatSnackBar, public dialog:MatDialog, private teradataConnectionService:TeradataConnectionService){ 
    this.databases = this.connect_service.databases;
    this.connections = this.connect_service.ReadFromJSONFile();
    this.connections = JSON.parse(this.connections);
  }
  onSubmit(formData:any,sidenav)
  {
    if(ConnectComponent.isValidCard === true)
    {
    this.connections.push(formData.value);
    //console.log(JSON.stringify(this.connections));
    this.connect_service.AppendToJSONFile(JSON.stringify(this.connections));
    //ConnectComponent.database_card = formData.value;
    //this.database_card.push({name:formData.name,data:formData});
    //console.log(this.connections);
    formData.reset();
    }
    else
    {
       console.log("invalid data");
       this.snackBar.open("Can not create connection..!!" ,'', {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    }
    sidenav.toggle();
  }
  createConnection(database_card:any) {
      ConnectComponent.database_card = database_card;
      //console.log('hi');
      this.connect_service.setCard(database_card);
      this.mysqlConnectionService.establishConnection(database_card);
      this.router.navigate(['layout']);
  }
  getCard(){
    return ConnectComponent.database_card;
  }
  resetForm(formData){
    formData.reset();
  }
  testConnection(formData,sidenav){
    this.database_type = formData.value.type;
    if(this.database_type === 'Teradata'){
          console.log(formData.value.username);
          this.teradataConnectionService.establishConnection(formData.value);
          this.teradataConnectionService.get((err,conn) => {
          if(err){
            ConnectComponent.isValidCard = false;
            console.log(err);
            console.log("error");
            this.snackBar.open("Connection Unsuccessful..!!" ,'', {
              duration: 2000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center'
            });
          // 
          } else {
            console.log(conn);

            console.log("success");
            this.snackBar.open("Connection Successful.." ,"", {
              duration:2000,
            });
            ConnectComponent.isValidCard = true;
          }
        });
    }
    else
    {
      console.log(formData.value.username);
      this.mysqlConnectionService.establishConnection(formData.value);
      this.mysqlConnectionService.get((err,conn) => {
      if(err){
        ConnectComponent.isValidCard = false;
        console.log(err);
        console.log("error");
        this.snackBar.open("Connection Unsuccessful..!!" ,'', {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
       // 
      } else {
         console.log("success");
         this.snackBar.open("Connection Successful.." ,"", {
           duration:2000,
         });
         ConnectComponent.isValidCard = true;
      }
    });
  }
    //sidenav.toggle();
  }
  editCard(formData,sidenav){
    //sidenav.toggle();
    console.log(formData);
    let dialogRef = this.dialog.open(EditCardComponent,{
      width: '500px',
      data: {content:formData}
    });
  }
}