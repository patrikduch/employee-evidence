import { NgForm } from "@angular/forms";
import { Input, Component } from "@angular/core";

/* Type checking. */
import EmployeeListType from "../../typescript/types/Employee-List-Type";
import WorkPositionType from "../../typescript/types/Work-Position-Type";
import ModalInfoType from "../../typescript/types/Modal-Info-Type";

@Component({
  selector: "app-employee-list-item-add",
  templateUrl: "./employee-list-item-add.component.html",
  styleUrls: ["./employee-list-item-add.component.css"]
})
export class EmployeeListItemAddComponent {
  @Input() employeeList: EmployeeListType[] = [];
  @Input() workPositions: WorkPositionType[] = [];
  @Input() modalInfo: ModalInfoType;

  newData: EmployeeListType;

  onFormSubmit(f: NgForm) {
    if (this.employeeList != null) {
      this.employeeList.push({
        id: this.employeeList.length + 1,
        firstName: f.controls.firstName.value,
        lastName: f.controls.lastName.value,
        birthDate: `${f.controls.dp.value.year}-${f.controls.dp.value.day}-${f.controls.dp.value.month}`,
        workPosition: f.controls.workPosition.value
      });
    }
  }
}
