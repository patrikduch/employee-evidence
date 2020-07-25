import { Component, Input } from "@angular/core";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { NgForm } from "@angular/forms";

/* Type checking */
import EmployeeListType from "../../typescript/types/Employee-List-Type";
import ModalInfoType from "../../typescript/types/Modal-Info-Type";
import CrudEnumType from "../../typescript/enums/Crud-Enum-Type";

@Component({
  selector: "app-employee-list-item-form",
  templateUrl: "./employee-list-item-form.component.html",
  styleUrls: ["./employee-list-item-form.component.css"]
})
export class EmployeeListItemFormComponent {
  closeResult: string;
  valuedate: Date;

  @Input() workPositions: string[] = [];
  @Input() modalSubmitAction: (f: NgForm) => void;
  @Input() employeeList: EmployeeListType[] = [];
  @Input() modalInfo: ModalInfoType;
  @Input() newData: EmployeeListType;

  selectedWorkPosition: string;
  constructor(private modalService: NgbModal) {}

  ngOnChanges() {
    this.selectedWorkPosition = this.workPositions[0];
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  onFormSubmit(f: NgForm) {
    this.modalSubmitAction(f);
    this.modalService.dismissAll();
  }

  public isCreate() {
    return this.modalInfo.crud == CrudEnumType.Create;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
