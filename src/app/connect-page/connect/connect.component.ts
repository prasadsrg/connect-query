import { Component } from '@angular/core';
import { ConnectPageService } from './connect-page.service';
import { MysqlConnectionService } from '../../common/mysql-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent{
  private databases : any = [];
  private connections: any = [];
  private database_card: any;
  constructor(private connect_service : ConnectPageService, private mysqlConnectionService: MysqlConnectionService, private router: Router){ 
    this.databases = this.connect_service.databases;
    this.connections = this.connect_service.ReadFromJSONFile();
    this.connections = JSON.parse(this.connections);
  }
  onSubmit(value:any)
  {
    this.connections.push(value);
    //console.log(JSON.stringify(this.connections));
    this.connect_service.AppendToJSONFile(JSON.stringify(this.connections));
    //console.log(this.connections);
  }
  createConnection(database_card:any) {
    //this.database_card = database_card;
    //console.log('hi');
    this.connect_service.setCard(database_card);
    this.mysqlConnectionService.establishConnection(database_card);
    this.router.navigate(['layout']);
  }
  getCard(){
    return this.database_card;
  }
}
