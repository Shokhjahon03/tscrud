export type StudentType = {
  id: string;
  name: string;
  username: string;
  email: string;
  group: string;
};

export type StudentStoreType = {
  loading: boolean;
  students: StudentType[];
  error: any;
  idUser:StudentType[]
  getStudents: () => void;
  AddUsers:({})=>void;
  DaletUser:(id:string)=>void,
  Getiduser:(id:string)=>void,
  saves:(val:StudentType)=>void
};
