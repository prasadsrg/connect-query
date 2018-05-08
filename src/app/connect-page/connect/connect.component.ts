import { Component,Inject } from '@angular/core';
import { ConnectPageService } from './connect-page.service';
import { MysqlConnectionService } from '../../common/mysql-connection.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditCardComponent } from '../../connect-page/edit-card/edit-card.component';

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
    public snackBar: MatSnackBar, public dialog:MatDialog){ 
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
    //console.log(this.connections);
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
    formData.reset();
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
    if(this.database_type === 'Teradata')
    console.log("hi bro");
    else
    {
    this.mysqlConnectionService.establishConnection(formData.value);
    this.mysqlConnectionService.get((err,conn) => {
      if(err)
      {
        ConnectComponent.isValidCard = false; 
        console.log("error");
        this.snackBar.open("Connection Unsuccessful..!!" ,'', {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
       // 
      }
      else
      {
         console.log("success");
         this.snackBar.open("Connection Successful.." ,"", {
           duration:2000,
         });
         ConnectComponent.isValidCard = true;
        // formData.reset();
      }
    });
  }
    //sidenav.toggle();
  }
  editCard(sidenav,userForm){
    let dialogRef = this.dialog.open(EditCardComponent, {
      data: {} 
    });
    //sidenav.toggle();
  }
}