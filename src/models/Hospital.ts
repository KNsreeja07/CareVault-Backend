import { Types } from "mongoose";

export enum HospitalType {
    Public = 'Public',
    Private = 'Private',
    Government = 'Government',
}
export enum HospitalLevel {
    Level1 = 'Level 1',
    Level2 = 'Level 2',
    Level3 = 'Level 3',
}

export interface Hospital {
    _id : Types.ObjectId,
    hospitalName : string,
    address: {
        city: string;
        countryCode: string;
        countryName: string;
        landmark: string;
        line1: string;
        line2: string;
        postalCode: string;
        state: string;
      };
    hospitalPhone : string,
    hospitalEmail : string,
    website : string | undefined,
    superAdmin : any //This has to be figured out, currently making it an any,
    hospitalInfo : {
       hospitalLevel : Number, 
       numberOfPatients : Number, 
       numberOfBeds : Number,
       hospitalType: HospitalType;

    }
}