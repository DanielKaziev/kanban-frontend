export enum Roles {
    MANAGER = "MANAGER",
    ADMIN = "ADMIN",
    PATIENT = "PATIENT",
}

export enum Status {
    PROCESSING = "PROCESSING",
    REJECTED = "REJECTED",
    SUCCESS = "SUCCESS",
}

export type TConfig = {
    Status: typeof Status;
    Roles: typeof Roles;
  };

export default {
    Status: Status,
    Roles: Roles,
  } as TConfig;