import mongoose, { Schema, Types } from "mongoose";
import { HospitalInfoInterface } from "./Hospital";

 /**
 * Enum representing different types of administrators.
 */
export enum AdminType {
    Admin = 'Admin',
    SuperAdmin = 'SuperAdmin'
}

/**
 * Interface representing contact information for administrators.
 */
export interface AdminContact {
    email: string;   // Email address of the administrator.
    phone: string;   // Phone number of the administrator.
}

/**
 * Interface representing an administrator.
 */
export interface AdministratorInterface {
    _id: Types.ObjectId; 
    name: string;                // Name of the administrator.
    password: string;            // Password of the administrator.
    hospital: HospitalInfoInterface;   // Hospital information associated with the administrator.
    adminType: AdminType;        // Type of administrator.
    contact: AdminContact;       // Contact information of the administrator.
    address: {                   // Address details of the administrator.
        city: string;            // City where the administrator is located.
        dependentLocality: string; // Dependent locality of the administrator's address.
        line1: string;           // First line of the administrator's address.
        line2: string;           // Second line of the administrator's address.
        postalCode: string;      // Postal code of the administrator's address.
        state: string;           // State where the administrator is located.
    };
    birthDate: Date,
    createdAt: Date,
    updatedAt : Date,
}

/**
 * Mongoose schema representing an administrator.
 */
const AdministratorSchema = new Schema<AdministratorInterface>({
    name: { type: String, required: true },
    password: { type: String, required: true },
    hospital: { type: Schema.Types.ObjectId, ref: 'HospitalInfoInterface', required: true },
    adminType: { type: String, enum: ['Admin', 'SuperAdmin'], required: true },
    contact: {
        email: { type: String, required: true },
        phone: { type: String, required: true }
    },
    address: {
        city: { type: String, required: true },
        dependentLocality: { type: String },
        line1: { type: String, required: true },
        line2: { type: String },
        postalCode: { type: String, required: true },
        state: { type: String, required: true }
    },
    birthDate : {
        type : Date,
        required : true, 
    },
    createdAt : {
        type : Date
    },
    updatedAt : {
        type : Date
    }
});

export default mongoose.model<AdministratorInterface>('Administrator', AdministratorSchema);
