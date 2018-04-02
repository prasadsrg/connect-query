import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryLayoutComponent } from './query-layout/query-layout.component';
import { TablesComponent } from './tables/tables.component';
import { ViewsComponent } from './views/views.component';
import { StoreProcedursComponent } from './store-procedurs/store-procedurs.component';
import { QueryGridComponent } from './query-grid/query-grid.component';
import { QueryInfoComponent } from './query-info/query-info.component';
import { QueryResultsComponent } from './query-results/query-results.component';
import { QueryService } from './query.service';
import { InfiniteListComponent} from '../shared/components/infinite-list.component';
import { RespTableComponent } from '../shared/components/resp-table.component';
import { MatModule } from '../mat.module';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'layout', component: QueryLayoutComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MatModule
  ],

  providers:[QueryService],
  exports: [RouterModule],
  declarations: [QueryLayoutComponent, TablesComponent, ViewsComponent,
     StoreProcedursComponent, QueryGridComponent, QueryInfoComponent, QueryResultsComponent,
     InfiniteListComponent, RespTableComponent]
})
export class QueryModule { }