import { async } from "@angular/core/testing";

import { EmployeeSearchPipe } from "./employee-list.search.pipe";

describe("EmployeeSearchPipe", () => {
  it("searchpattern (With result)", async(() => {
    const employeeSearchPipe = new EmployeeSearchPipe();
    const actual = employeeSearchPipe.searchPattern("Pa", "Patrik");
    const expected = true;

    expect(actual).toBe(expected);
  }));

  it("searchpattern (With no result)", async(() => {
    const employeeSearchPipe = new EmployeeSearchPipe();
    const actual = employeeSearchPipe.searchPattern("Pd", "Patrik");
    const expected = false;

    expect(actual).toBe(expected);
  }));
});
