import { NgForm } from "@angular/forms";
import { Input, Component } from "@angular/core";

/* Type checking. */
import EmployeeListType from "../../typescript/types/Employee-List-Type";
import WorkPositionType from "../../typescript/types/Work-Position-Type";
import ModalInfoType from "../../typescript/types/Modal-Info-Type";

@Component({
  selector: "app-employee-list-item-update",
  templateUrl: "./employee-list-item-update.component.html",
  styleUrls: ["./employee-list-item-update.component.css"]
})
export class EmployeeListItemUpdateComponent {
  @Input() employeeList: EmployeeListType[] = [];
  @Input() workPositions: WorkPositionType[] = [];
  @Input() modalInfo: ModalInfoType;
  @Input() newData: EmployeeListType;

  onFormSubmit(f: NgForm) {
    if (this.employeeList != null) {
      //Find index of specific object using findIndex method.
      const objIndex = this.employeeList.findIndex(
        obj =>
          obj.firstName == this.newData.firstName &&
          obj.lastName == this.newData.lastName
      );

      const tmp = this.employeeList;
      tmp[objIndex].firstName = f.controls.firstName.value;
      tmp[objIndex].lastName = f.controls.lastName.value;
      tmp[objIndex].workPosition = f.controls.workPosition.value;

      if (f.controls.dp != null && f.controls.dp.value != "") {
        tmp[
          objIndex
        ].birthDate = `${f.controls.dp.value.year}-${f.controls.dp.value.day}-${f.controls.dp.value.month}`;
      }

      this.employeeList = tmp;
    }
  }
}
