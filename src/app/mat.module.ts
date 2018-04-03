import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import {
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatInputModule, MatSelectModule,
MatExpansionModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
       MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatInputModule, MatSelectModule, 
       FlexLayoutModule, FormsModule, MatExpansionModule,MatListModule
          ],
  exports: [
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatInputModule, MatSelectModule, 
    FlexLayoutModule,FormsModule, MatExpansionModule,MatListModule
    ],
})
export class MatModule { }