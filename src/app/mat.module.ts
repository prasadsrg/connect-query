import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import {
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatInputModule, MatSelectModule,
MatExpansionModule, MatListModule, MatSnackBarModule, MatDialogModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
       MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatInputModule, MatSelectModule, 
       FlexLayoutModule, FormsModule, MatExpansionModule,MatListModule, MatSnackBarModule, MatDialogModule, MatTableModule
          ],
  exports: [
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatInputModule, MatSelectModule, 
    FlexLayoutModule,FormsModule, MatExpansionModule, MatListModule, MatSnackBarModule, MatDialogModule, MatTableModule
    ],
})
export class MatModule { }