import {DbProps} from './db.props'; 

export class TeradataProps implements DbProps {
    TABLE: string = `SELECT TableName as table_name FROM DBC.TABLESV WHERE  DATABASENAME = `;
    TABLE_INFO: string = `Show table `;
}