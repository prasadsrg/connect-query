import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import {
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatInputModule, MatSelectModule,
MatExpansionModule} from '@angular/material';

@NgModule({
  imports: [
       MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatInputModule, MatSelectModule, 
       FlexLayoutModule, FormsModule, MatExpansionModule,
          ],
  exports: [
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatInputModule, MatSelectModule, 
    FlexLayoutModule,FormsModule, MatExpansionModule,
    ],
})
export class MatModule { }