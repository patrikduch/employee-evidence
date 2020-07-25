import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-employee-searchbar",
  templateUrl: "./employee-searchbar.component.html",
  styleUrls: ["./employee-searchbar.component.css"]
})
export class EmployeeSearchbarComponent implements OnInit {
  @Output() processedTerm = new EventEmitter<string>();
  term = "";

  onInput(value: string) {
    this.term = value;
    this.processedTerm.emit(this.term);
  }

  constructor() {}

  ngOnInit(): void {}
}
