import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatModule} from './mat.module';

import { AppComponent } from './app.component';
import {ConnectPageModule} from './connect-page/connect-page.module'
import {QueryModule} from './query/query.module'
import { ConnectionService} from './common/connection.service';
import {MysqlConnectionService} from './common/mysql-connection.service';
import { TeradataConnectionService } from './common/teradata-connection.service';
import { FileUploadService } from './common/upload-file.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModule,
    ConnectPageModule,
    QueryModule
  ],
  providers: [MysqlConnectionService,FileUploadService, TeradataConnectionService, ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
