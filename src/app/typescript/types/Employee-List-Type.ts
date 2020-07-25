type EmployeeListType = {
  id: number;
  firstName: string;
  lastName: string;
  workPosition: {
    name: string;
  };

  birthDate: string;
};

export default EmployeeListType;
