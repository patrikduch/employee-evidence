import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/skeleton/header/header.component";
import { BodyComponent } from "./components/skeleton/body/body.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { EmployeeSearchPipe } from "./components/employee-list/employee-list.search.pipe";
import { EmployeeSearchbarComponent } from "./components/employee-searchbar/employee-searchbar.component";
import { PagetitleComponent } from "./components/common/titles/pagetitle/pagetitle.component";
import { HttpClientModule } from "@angular/common/http";
import { EmployeeListTableComponent } from "./components/employee-list-table/employee-list-table.component";
import { ClassicModalComponent } from "./components/common/modals/classic-modal/classic-modal.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EmployeeListItemAddComponent } from "./components/employee-list-item-add/employee-list-item-add.component";
import { EmployeeListItemUpdateComponent } from "./components/employee-list-item-update/employee-list-item-update.component";
import { EmployeeListItemFormComponent } from "./components/employee-list-item-form/employee-list-item-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    EmployeeListComponent,
    EmployeeSearchPipe,
    EmployeeSearchbarComponent,
    PagetitleComponent,
    EmployeeListTableComponent,
    ClassicModalComponent,
    EmployeeListItemAddComponent,
    EmployeeListItemUpdateComponent,
    EmployeeListItemFormComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
