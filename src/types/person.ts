export type TRoles = "MANAGER" | "ADMIN" | "PATIENT";

export interface IPerson {
  id: string;
  iin: string;
  firstName: string;
  secondName: string;
  lastName: string;
  hospitalId: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}
