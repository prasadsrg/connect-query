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
import { DndModule } from 'ng2-dnd';
import { Routes, RouterModule } from '@angular/router';
import { GenerateQueryComponent } from '../query/generate-query/generate-query.component';
import { ExportFileComponent } from './export-file/export-file.component';
import { AceEditorModule } from 'ng2-ace-editor';

// import { MonacoEditorModule } from 'ngx-monaco-editor';
const routes: Routes = [
  { path: 'layout', component: QueryLayoutComponent},
  { path: 'generate', component: GenerateQueryComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MatModule,
    DndModule.forRoot(),
    AceEditorModule
    // MonacoEditorModule.forRoot()
  ],

  providers:[QueryService],
  exports: [RouterModule],
  declarations: [QueryLayoutComponent, TablesComponent, ViewsComponent,
     StoreProcedursComponent, QueryGridComponent, QueryInfoComponent, QueryResultsComponent,
     InfiniteListComponent, RespTableComponent, GenerateQueryComponent, ExportFileComponent]
})
export class QueryModule { }