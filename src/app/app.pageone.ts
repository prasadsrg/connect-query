import { Component } from '@angular/core';
import * as jsonfile from 'fs';

@Component({
    selector: 'page-one',
    templateUrl: './app.pageone.html',
    styleUrls: ['./app.pageone.scss']
})
export class PageOne {
    databases = ['MySql','Teradata'];
    onSubmit(value:any)
    {
        console.log(jsonfile);
        var file = '/assets/access.connection.json';
        jsonfile.writeFileSync(file,value, {flag:'a'});
    }
}