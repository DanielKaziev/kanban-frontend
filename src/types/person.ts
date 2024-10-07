export type TRoles = "MANAGER" | "ADMIN" | "PATIENT"

// export interface IPerson {
//     id: string;
//     roleName: TRoles;
//     firstName: string;
//     secondName: string;
//     lastName: string;
//     email: string;
//     hospitalId: string;
// }

export interface IPerson {
    id:         string;
    iin:        string;
    firstName:  string;
    secondName: string;
    lastName:   string;
    hospitalId: string;
    address:    string;
    createdAt:  string;
    updatedAt:  string;
}
