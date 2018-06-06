import {DbProps} from './db.props'; 

export class MysqlProps implements DbProps {
    TABLE: string = `SELECT table_name FROM information_schema.tables WHERE table_schema =`;
    TABLE_INFO: string = `describe `;
}