import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { ConnectPageService } from './connect/connect-page.service';

const routes: Routes = [
  { path: '', component: ConnectComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  declarations: [ConnectComponent],
  exports: [RouterModule],
  providers:[ConnectPageService]
})
export class ConnectPageModule { }
