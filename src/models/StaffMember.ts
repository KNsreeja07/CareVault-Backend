import mongoose, { Model, Schema, Types, model, models } from "mongoose";
import { AdminType } from "./Administrator";

/**
 * Enum representing different types of staff members.
 */
export enum StaffType {
    Physician = "Physician",
    Nurse = "Nurse",
    Surgeon = "Surgeon",
    Specialist = "Specialist",
    Technician = "Technician",
    Pharmacist = "Pharmacist",
    AlliedHealthProfessional = "Allied Health Professional",
    AdministrativeStaff = "Administrative Staff",
    SupportStaff = "Support Staff",
    Volunteer = "Volunteer"
}

/**
 * Interface representing contact information for staff members.
 */
export interface StaffContact {
    email: string;   // Email address of the staff member.
    phone: string;   // Phone number of the staff member.
}

/**
 * Interface representing a staff member.
 */
export interface StaffMemberInterface {
    _id: Types.ObjectId; 
    isAdmin: boolean;             // Indicates if the staff member is an admin.
    isSuperAdmin: boolean;        // Indicates if the staff member is a super admin.
    staffType: StaffType;         // Type of the staff member.
    address: {                    // Address details of the staff member.
        city: string;             // City where the staff member is located.
        dependentLocality: string; // Dependent locality of the staff member's address.
        line1: string;            // First line of the staff member's address.
        line2: string;            // Second line of the staff member's address.
        postalCode: string;       // Postal code of the staff member's address.
        state: string;            // State where the staff member is located.
    };
    contact: StaffContact;        // Contact information of the staff member.
    registrationNumber: string;   // Registration number of the staff member.
    speciality?: string;          // Speciality of the staff member (if applicable).
    experience: string;           // Experience of the staff member.
    password: string;             // Password of the staff member.
    birthDate: Date;              // Date of birth of the staff member.
    createdAt: Date;              // Date when the staff member's account was created.
    updatedAt: Date;              // Date when the staff member's account was last updated.
    patientsUnder: any;           // Information about patients under the staff member (type to be determined).
    adminType: AdminType;         // Type of admin (if applicable).
    blockUnder: string;           // Block under which the staff member operates.
}

/**
 * Mongoose schema representing a staff member.
 */
const StaffMemberSchema = new Schema<StaffMemberInterface>({
    isAdmin: { type: Boolean, required: true },
    isSuperAdmin: { type: Boolean, required: true },
    staffType: { type: String, enum: Object.values(StaffType), required: true },
    address: {
        city: { type: String, required: true },
        dependentLocality: { type: String },
        line1: { type: String, required: true },
        line2: { type: String },
        postalCode: { type: String, required: true },
        state: { type: String, required: true }
    },
    contact: {
        email: { type: String, required: true },
        phone: { type: String, required: true }
    },
    registrationNumber: { type: String, required: true },
    speciality: { type: String },
    experience: { type: String, required: true },
    password: { type: String, required: true },
    birthDate: { type: Date, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    patientsUnder: { type: Schema.Types.Mixed }, // Type to be determined
    adminType: { type: String, enum: Object.values(AdminType) },
    blockUnder: { type: String, required: true }
});

 
const StaffMemberModel = (): Model<StaffMemberInterface> =>
  model<StaffMemberInterface>('StaffMember', StaffMemberSchema);

 export const StaffMember = (models.StaffMember ||
    StaffMemberModel()) as ReturnType<typeof StaffMemberModel>;