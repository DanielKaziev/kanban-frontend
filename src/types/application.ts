import { IHospital } from "./hospitals";
import { IPerson } from "./person";

export type TStatuses = "PROCESSING" | "REJECTED" | "SUCCESS";

export interface IApplication {
  id: string;
  statusName: TStatuses;
  patientId: string;
  hospitalName: string;
  hospitalId: string;
  stuffId: string | null;
  attachmentDate: string | null;
  createdDate: string;
  updatedDate: string;
  stuff: string | null;
  hospital: IHospital;
  patient: IPerson;
}

export interface IOwnApplication {
  attachment: IApplication;
}
