import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
@Component({
  selector: 'resp-table',
  template: ` 
  <div fxLayout="row"> 
        <infinite-list [items]="dataList" (outputEvent)="scrollList = $event" style="height: 100%">
                    <table>
                        <thead >
                            <tr>
                                <ng-template ngFor let-tableData [ngForOf]="dataColumns">
                                    <th scope="col">{{tableData.th}}</th>
                                </ng-template>
                            </tr>
                            </thead>       
                        <tbody>    
                            <tr *ngFor="let item of scrollList" >
                                <ng-template ngFor let-tableData [ngForOf]="dataColumns">
                                    <td >{{item[tableData.td]}}</td>
                                </ng-template>
                            </tr>
                    </tbody>
                </table>
        
        </infinite-list>
   </div>
   `,
  styles: [`infinite-list{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
    background: rgba(255, 255, 255, .1);
}`,`table{border:1px solid #ccc;border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed;font-size:13px!important;font-family:inherit}table caption{font-size:1.5em;margin:.5em 0 .75em}table tr{background:#f8f8f8;border:1px solid #ddd;padding:.35em}table td,table th{padding:.625em;text-align:center}table th{font-size:.85em;letter-spacing:.1em;text-transform:uppercase}@media screen and (max-width:767px){table{border:0}table caption{font-size:1.3em}table thead{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}table tr{display:block;margin-bottom:.625em;border:none;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.12),0 1px 2px 0 rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px 0 rgba(0,0,0,.12),0 1px 2px 0 rgba(0,0,0,.24);box-shadow:0 1px 3px 0 rgba(0,0,0,.12),0 1px 2px 0 rgba(0,0,0,.24)}table td{border-bottom:1px solid #ddd;display:block;font-size:.8em;text-align:right}table td:before{content:attr(data-label);float:left;font-weight:700;text-transform:uppercase}table td:last-child{border-bottom:0}}`]
})
export class RespTableComponent implements OnChanges {
  maxLength = 0;
  @Input()
  dataList: any[] = [];
  @Input()
  dataColumns: any[] = []


  constructor(){
  }
  
  ngOnChanges(changes: SimpleChanges) {
      //console.log(this.dataList)
    const dataList = (changes as any).dataList || [];
    if ((changes as any).dataList != undefined && (dataList.previousValue != dataList.currentValue)) {
      this.dataList = dataList.currentValue;
    }
  }

}