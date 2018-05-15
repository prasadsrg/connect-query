import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as fs from 'fs';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

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
}
