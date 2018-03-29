import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { ConnectPageService } from './connect/connect-page.service';
import { MatModule } from '../mat.module';
import { CreateConnectionComponent } from '../connect-page/create-connection/create-connection.component';

const routes: Routes = [
  { path: '', component: ConnectComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MatModule
  ],
  declarations: [ConnectComponent, CreateConnectionComponent],
  exports: [RouterModule],
  providers:[ConnectPageService]
})
export class ConnectPageModule { }
