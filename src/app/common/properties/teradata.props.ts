import {DbProps} from './db.props'; 

export class TeradataProps implements DbProps {
    TABLE_INFO: string = `SELECT TableName as table_name FROM DBC.TABLESV WHERE  DATABASENAME = `;
}