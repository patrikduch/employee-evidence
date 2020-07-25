import { Pipe, PipeTransform } from "@angular/core";

type EmployeeFilterType = {
  firstName: string;
  lastName: string;
};

@Pipe({
  name: "employeeSearchFilter"
})
export class EmployeeSearchPipe implements PipeTransform {
  searchPattern = (searchedQuery: string, searchedInput: string) => {
    const patt = new RegExp("^" + searchedQuery.toLocaleLowerCase(), "i");
    let result = patt.test(searchedInput.toLocaleLowerCase());
    return result;
  };

  transform(value: Array<EmployeeFilterType>, args?: string) {
    if (!args) {
      return value;
    }
    return value.filter((val: EmployeeFilterType) => {
      let splittedInput = args.split(" ");

      if (splittedInput.length > 1) {
        const firstName = splittedInput[0].toLocaleLowerCase();
        const lastName = splittedInput[1].toLocaleLowerCase();
        return (
          val.firstName.toLocaleLowerCase().includes(firstName) &&
          val.lastName.toLocaleLowerCase().includes(lastName)
        );
      } else {
        return (
          this.searchPattern(args, val.firstName) ||
          this.searchPattern(args, val.lastName)
        );
      }
    });
  }
}
