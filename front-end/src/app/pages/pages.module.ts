import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NavpageComponent } from './navpage/navpage.component';
import { IndexComponent } from "./index/index.component";
import { DbsyspageComponent } from './dbsyspage/dbsyspage.component';
import { SummarypageComponent } from './summarypage/summarypage.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgxSpinnerModule,
    RouterModule
  ],
  declarations: [
    NavpageComponent,
    IndexComponent,
    DbsyspageComponent,
    SummarypageComponent
  ],
  exports: [
    NavpageComponent,
    IndexComponent
  ],
  providers: [
  ],
})
export class PagesModule {}
