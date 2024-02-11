 import mongoose, { Types, Schema } from "mongoose";
import { HospitalInfoInterface } from "./Hospital";


export enum AdminType {
    Admin = 'Admin',
    SuperAdmin = 'SuperAdmin'
}
export interface AdminContact {
    email: string;  // Email address of the hospital.
    phone: string;  // Phone number of the hospital.
}

export interface Administrator {
    name : string, 
    password : string, 
    hospital : HospitalInfoInterface,
    adminType : AdminType,
    contact : AdminContact,
    address: {  
        city: string;  
        dependentLocality: string;   
        line1: string;   
        line2: string;   
        postalCode: string;   
        state: string; 
    };





}