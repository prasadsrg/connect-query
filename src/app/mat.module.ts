import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
       MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule
    ],
  exports: [
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule
  ],
})
export class MatModule { }