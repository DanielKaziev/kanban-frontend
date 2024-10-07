import { IHospital } from "types/hospitals";

export interface IAuthInitState {
  email: string;
  firstName: string;
  hospital: IHospital | {};
  hospitalId: string | null;
  id: string;
  iin: string;
  lastName: string;
  roleName: string;
  secondName: string;
  isAuth: boolean;
};