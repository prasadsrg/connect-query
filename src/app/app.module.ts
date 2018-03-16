import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatModule} from './mat.module';

import { AppComponent } from './app.component';
import  { PageOne} from './app.pageone';



@NgModule({
  declarations: [
    AppComponent,
    PageOne,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
