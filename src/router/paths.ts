import LazyHospitals from "../pages/HospitalsBlock/Hospitals";
import LazyApplication from "../pages/ApplicationBlock/Application";
import LazyHospitalsRegister from "../pages/HospitalsBlock/HospitalsRegister";
import LazyApplicationView from "./../pages/ApplicationBlock/ApplicationView";
import { TRoles } from "../types/person";
import Config from "../config/Config";

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
