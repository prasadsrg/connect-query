import { Component,Inject, Output } from '@angular/core';
import { ConnectPageService } from './connect-page.service';
import { ConnectionService } from '../../common/connection.service';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditCardComponent } from '../../connect-page/edit-card/edit-card.component';
import { EventEmitter } from '@angular/core';
import { TestConnectionService } from '../../common/test.connection.service';

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
  constructor(private connect_service : ConnectPageService, private connectionService: ConnectionService, private router: Router, 
    public snackBar: MatSnackBar, public dialog:MatDialog, private testConnectionService: TestConnectionService){ 
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
      this.connectionService.establishConnection(database_card);
      this.router.navigate(['layout']);
  }
  getCard(){
    return ConnectComponent.database_card;
  }
  resetForm(formData){
    formData.reset();
  }
  testConnection(formData){
    let isValid;
    this.testConnectionService.testConnection(formData,isValid =>{
    if(isValid === true)
    ConnectComponent.isValidCard = true;
  });
    //sidenav.toggle();
  }
  editCard(formData){
    //sidenav.toggle();
    console.log(formData);
    let dialogRef = this.dialog.open(EditCardComponent,{
      width: '500px',
      data: {content:formData}
    });
  }
}