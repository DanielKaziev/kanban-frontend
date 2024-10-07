import { IPerson } from "./person";

export interface IHospital {
    id: string;
    nameRU: string;
    lat: number;
    lon: number;
    address: string;
    isPrivate: boolean;
    createdDate: string;
    updatedDate: string;
    stuff: Array<IPerson>
}