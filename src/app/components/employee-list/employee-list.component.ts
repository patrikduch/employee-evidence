import { Component } from "@angular/core";
import { WorkingPositionService } from "../../working-position.service";

/* Type checking. */
import ModalInfoType from "../../typescript/types/Modal-Info-Type";
import CrudEnumType from "../../typescript/enums/Crud-Enum-Type";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent {
  constructor(private workingPositionService: WorkingPositionService) {}

  pageTitle = "Evidence zaměstnanců";
  searchQuery = "";
  workPositions = [];
  addBtnAligned = true;

  modalInfo: ModalInfoType = null;

  employeeList = [
    {
      id: 1,
      firstName: "Patrik",
      lastName: "Duch",
      birthDate: "1993-07-04",
      workPosition: "full-stack developer"
    },
    {
      id: 2,
      firstName: "Jakub",
      lastName: "Mazurk",
      birthDate: "1998-21-04",
      workPosition: "full-stack developer"
    },
    {
      id: 3,
      firstName: "Zdeněk",
      lastName: "Novák",
      birthDate: "1999-27-01",
      workPosition: "full-stack developer"
    },
    {
      id: 4,
      firstName: "Bogdan",
      lastName: "Walek",
      birthDate: "1991-02-04",
      workPosition: "full-stack developer"
    }
  ];

  ngOnInit(): void {
    this.workingPositionService
      .getWorkingPosition()
      .subscribe((response: { positions: [] }) => {
        this.workPositions = response.positions;
      });

    this.modalInfo = {
      title: "Vytvoření nového zaměstnance",
      crud: CrudEnumType.Create,
      submitBtn: {
        color: "red",
        isAligned: true,
        title: "Nový zaměstnanec"
      }
    };
  }

  onTerm(term: string) {
    this.searchQuery = term;
  }
}
