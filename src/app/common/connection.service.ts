import { Injectable } from '@angular/core';
import { MysqlConnectionService } from './mysql-connection.service';
import { TeradataConnectionService } from './teradata-connection.service';
import { DbProps } from './properties/db.props';
import { MysqlProps } from './properties/mysql.props';
import { TeradataProps } from './properties/teradata.props';

@Injectable()
export class ConnectionService {
    private connType: any;
    public static props: DbProps;
    constructor(private mysqlConnectionService: MysqlConnectionService, private teradataConnectionService: TeradataConnectionService) {
        let database_card: any = sessionStorage.getItem('cq_current');
        if (database_card) {
            this.establishConnection(JSON.parse(database_card));
        }
        //this.connType = database_card.type;
    }
    establishConnection(database_card: any) {
        //console.log(database_card);
        sessionStorage.setItem('cq_current', JSON.stringify(database_card));
        this.connType = database_card.type;
        if (this.connType == 'Mysql') {
            this.mysqlConnectionService.establishConnection(database_card);
            ConnectionService.props = new MysqlProps();
        } else if (this.connType == 'Teradata') {
            this.teradataConnectionService.establishConnection(database_card);
            ConnectionService.props = new TeradataProps();
        }
    }

    get(callback: any) {
        if (this.connType == 'Mysql') {
            this.mysqlConnectionService.get(callback);
        } else if (this.connType == 'Teradata') {
            this.teradataConnectionService.get(callback);
        }
    }

    query(query: String, callback) {
        query = query.trim();
        //console.log(query);
        //let isSelect = query.indexOf('select') == 0 ? true :  false;
        if (this.connType == 'Mysql') {
            this.get((err, conn) => {
                if(err) throw err;
                conn.query(query, (err,rows,fields)=>{
                    if(err){
                    callback("error",JSON.parse(JSON.stringify(err)));
                    }
                    else{
                    callback(fields,rows);
                    }
                });
            });
        } else if (this.connType == 'Teradata') {
            this.get((err, conn) => {
                if(err) throw err;
                let queryResult = conn.read(query);
                queryResult.then( result => {
                    console.log(result);
                    callback(null, result);
                });
                queryResult.catch( err => {
                    callback(err, null);
                })
            });
        }
    }

}
