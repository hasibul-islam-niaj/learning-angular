import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthorinfoComponent} from './authorinfo/authorinfo.component';
import { DashboardComponent } from './entities/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'authors', component: AuthorinfoComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
