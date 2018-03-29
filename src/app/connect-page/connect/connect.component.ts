import { Component } from '@angular/core';
import { ConnectPageService } from './connect-page.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent{
  private databases : any = [];
  private connections: any = [];
  constructor(private connect_service : ConnectPageService){ 
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
    this.connect_service.establishConnection(database_card);
  }

}
