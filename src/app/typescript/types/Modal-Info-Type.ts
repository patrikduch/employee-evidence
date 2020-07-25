import CrudEnumType from "../enums/Crud-Enum-Type";

type ModalInfoType = {
  title: string;
  crud: CrudEnumType;
  submitBtn: {
    color: string;
    isAligned: boolean;
    title: string;
  };
};

export default ModalInfoType;
