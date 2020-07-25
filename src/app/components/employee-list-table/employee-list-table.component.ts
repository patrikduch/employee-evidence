import { Component, OnInit, Input, Inject } from "@angular/core";

/* Type checking. */
import EmployeeListType from "../../typescript/types/Employee-List-Type";
import WorkPositionType from "../../typescript/types/Work-Position-Type";
import ModalInfoType from "../../typescript/types/Modal-Info-Type";
import CrudEnumType from "../../typescript/enums/Crud-Enum-Type";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-employee-list-table",
  templateUrl: "./employee-list-table.component.html",
  styleUrls: ["./employee-list-table.component.css"]
})
export class EmployeeListTableComponent implements OnInit {
  @Input() employeeList: EmployeeListType[] = [];
  @Input() searchQuery: string = "";
  @Input() workPositions: WorkPositionType[] = [];

  selectedEmployee: EmployeeListType = null;
  modalInfo: ModalInfoType = null;

  document: Document;

  constructor(@Inject(DOCUMENT) document) {
    this.document = document;
  }

  ngOnInit(): void {
    this.modalInfo = {
      title: "Editace zaměstnance",
      crud: CrudEnumType.Update,
      submitBtn: {
        color: "red",
        isAligned: false,
        title: "Upravit"
      }
    };
  }

  getWorkPosition() {
    if (this.workPositions != undefined) {
      return this.workPositions[0];
    }
  }

  selectEmployee(firstName: string, lastName: string) {
    const employee = this.employeeList.filter(
      (arg: EmployeeListType) =>
        arg.firstName == firstName && arg.lastName == lastName
    )[0];

    this.selectedEmployee = employee;
  }

  clearSearchBar() {
    this.searchQuery = "";

    const searchInput = this.document.getElementById(
      "searchInput"
    ) as HTMLInputElement;

    searchInput.value = "";
  }

  removeEmployee(firstName: string, lastName: string) {
    const index = this.employeeList.findIndex(
      employee =>
        employee.firstName == firstName && employee.lastName == lastName
    );

    this.clearSearchBar();

    this.employeeList.splice(index, 1);
  }
}
