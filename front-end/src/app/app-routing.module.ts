import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { DbsyspageComponent } from './pages/dbsyspage/dbsyspage.component';

import { IndexComponent } from "./pages/index/index.component";
import { SummarypageComponent } from './pages/summarypage/summarypage.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: IndexComponent
  },
  {
    path: "dbsys",
    component: DbsyspageComponent
  },
  {
    path: "summary",
    component: SummarypageComponent
  }


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule ,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
