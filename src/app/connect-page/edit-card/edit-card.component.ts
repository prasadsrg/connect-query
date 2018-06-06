import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as fs from 'fs';
import { TestConnectionService } from '../../common/test.connection.service';
import { ConnectPageService } from '../connect/connect-page.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {

  public static isValidCard : any = false;
  databases = ['Mysql','Teradata'];
  private connections: any =[]; 
  constructor(
    public dialogRef: MatDialogRef<EditCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private testConnectionService: TestConnectionService, private connect_service: ConnectPageService, public snackBar: MatSnackBar) {
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }s

  ngOnInit() {
  }
  deleteCard(){
    let card_name = this.data.content.name;
    console.log(card_name);
    let database_cards = JSON.parse(fs.readFileSync('./src/assets/connect-page.json','utf8'));
    database_cards = database_cards.filter((card) => {
      return card.name !== card_name;
    })
    fs.writeFileSync('./src/assets/connect-page.json',JSON.stringify(database_cards,null,2));
  }
  testConn(formData){
    //console.log(formData.value);
    let isValid; 
    this.testConnectionService.testConnection(formData,isValid =>{
    if(isValid === true)
    EditCardComponent.isValidCard = true;
  });
  }
  onSubmit(formData){
    let card_name = formData.name;
    console.log(card_name);
    let database_cards = JSON.parse(fs.readFileSync('./src/assets/connect-page.json','utf8'));
    database_cards = database_cards.filter((card) => {
      return card.name !== card_name;
    })
    fs.writeFileSync('./src/assets/connect-page.json',JSON.stringify(database_cards,null,2));
    if(EditCardComponent.isValidCard === true)
    {
    this.connections = this.connect_service.ReadFromJSONFile();
    this.connections = JSON.parse(this.connections);
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
  }
}

