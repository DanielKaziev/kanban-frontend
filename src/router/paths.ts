import LazyHospitals from "../pages/HospitalsBlock/Hospitals";
import { TRoles } from "../types/person";

export type TPathEntry = {
  component: React.FunctionComponent<object>;
  icon?: React.FunctionComponent<object>;
  name?: string;
  path: string;
  children?: Array<TPathEntry>;
  roles: Array<TRoles>;
};

const PATHS: Array<TPathEntry> = [
  {
    component: LazyHospitals,
    path: "/home",
    roles: [],
  }
];

export default PATHS;
