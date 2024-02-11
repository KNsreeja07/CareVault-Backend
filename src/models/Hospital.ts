import { Types } from "mongoose";

export enum HospitalType {
    Public = 'PPP model',
    Private = 'Private',
    Government = 'Government',
}
export enum HospitalLevel {
    Level1 = 'Level 1',
    Level2 = 'Level 2',
    Level3 = 'Level 3',
}
interface Contact {
    email: string;
    phone: string;
}

interface HospitalInfo {
    _id: Types.ObjectId;
    hospitalLevel: HospitalLevel;
    numberOfPatients: number;
    superAdmin : any //This has to be figured out, currently making it an any,
    admins : any[] //has to be figured out. 
    location: string;
    medicalSpecialties: string[];
    hospitalType: HospitalType;
    contact: Contact;
    hospitalName: string;
    address: {
        city: string;
        countryCode: string;
        dependentLocality: string;
        line1: string;
        line2: string;
        postalCode: string;
        sortingCode: string;
        state: string;
      };
    website: string | undefined;
    accreditations: {
        name: string;
        body: string;
        expirationDate: Date;
    }[];
    operatingHours: {
        day: string;
        hours: string;
    }[];
    insurancesAccepted: string[];
    facilityType: string;
    ownership: string;
    bedCapacity: {
        type: string;
        count: number;
    }[];
    emergencyServices: {
        available: boolean;
        traumaCenter: boolean;
        capabilities: string[];
    };
    outpatientServices: string[];
    qualityIndicators: {
        metric: string;
        value: string;
    }[];
    languagesSpoken: string[];
    ehrSystem: string;
    telemedicineServices: string[];
    humanResources: {
        category: string;
        count: number;
    }[];
    environmentalSustainability: string[];
    financialInformation: {
        metric: string;
        value: number;
    }[];
    partnershipsAndAffiliations: string[];
    patients : {
        category : string,
        count : number,
    },
    
}
 