import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as di from 'datalib';

@Component({
  selector: 'app-data-summary',
  templateUrl: './data-summary.component.html',
  styleUrls: ['./data-summary.component.scss']
})
export class DataSummaryComponent implements OnInit {

  dataSummary:any;
  constructor(
    public dialogRef: MatDialogRef<DataSummaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.dataSummary = JSON.parse(JSON.stringify(data[0]));
      console.log(this.dataSummary);
     }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
