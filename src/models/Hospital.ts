
 import mongoose, { Types, Schema } from "mongoose";
/**
 * Enum representing different types of hospitals.
 */
export enum HospitalType {
    Public = 'PPP model',
    Private = 'Private',
    Government = 'Government',
}

/**
 * Enum representing different levels of hospitals.
 */
export enum HospitalLevel {
    Level1 = 'Level 1',
    Level2 = 'Level 2',
    Level3 = 'Level 3',
}

/**
 * Interface representing contact information.
 */
export interface Contact {
    email: string;  // Email address of the hospital.
    phone: string;  // Phone number of the hospital.
}

/**
 * Interface representing hospital information.
 */
export interface HospitalInfoInterface {
    _id: Types.ObjectId;  // Unique identifier for the hospital.
    hospitalName: string;  // Name of the hospital.
    hospitalLevel: HospitalLevel;  // Level of the hospital.
    superAdmin: any;  // Super admin of the hospital (type to be determined).
    admins: any[];  // Array of admins for the hospital (type to be determined).
    location: string;  // Location of the hospital.
    medicalSpecialties: string[];  // Array of medical specialties offered by the hospital.
    hospitalType: HospitalType;  // Type of the hospital.
    contact: Contact;  // Contact information of the hospital.
    address: {  // Address details of the hospital.
        city: string;  // City where the hospital is located.
        dependentLocality: string;  // Dependent locality of the hospital address.
        line1: string;  // First line of the hospital address.
        line2: string;  // Second line of the hospital address.
        postalCode: string;  // Postal code of the hospital address.
        state: string;  // State where the hospital is located.
    };
    website?: string;  // Optional website URL of the hospital.
    accreditations: {  // Array of accreditations obtained by the hospital.
        name: string;  // Name of the accreditation.
        body: string;  // Accrediting body.
        expirationDate: Date;  // Expiration date of the accreditation.
    }[];
    operatingHours: {  // Array of operating hours for the hospital.
        day: string;  // Day of the week.
        hours: string;  // Hours of operation.
    }[];
    insurancesAccepted: string[];  // Array of insurance plans accepted by the hospital.
    facilityType: string;  // Type of facility (e.g., general, specialty).
    ownership: string;  // Ownership structure of the hospital.
    bedCapacity: {  // Array of bed capacities for the hospital.
        type: string;  // Type of bed (e.g., general, ICU).
        count: number;  // Number of beds of the specified type.
    }[];
    emergencyServices: {  // Details of emergency services provided by the hospital.
        available: boolean;  // Indicates if emergency services are available.
        traumaCenter: boolean;  // Indicates if the hospital is a trauma center.
        capabilities: string[];  // Array of emergency capabilities (e.g., trauma care, cardiac care).
    };
    outpatientServices: string[];  // Array of outpatient services offered by the hospital.
    qualityIndicators: {  // Array of quality indicators for the hospital.
        metric: string;  // Metric or measure of quality.
        value: string;  // Value or rating of the quality metric.
    }[];
    languagesSpoken: string[];  // Array of languages spoken by hospital staff.
    ehrSystem: string;  // Electronic health record system used by the hospital.
    telemedicineServices: string[];  // Array of telemedicine services offered by the hospital.
    humanResources: {  // Array of human resources information for the hospital.
        category: string;  // Category of human resources (e.g., medical staff, administrative staff).
        count: number;  // Number of staff in the specified category.
    }[];
    environmentalSustainability: string[];  // Array of environmental sustainability initiatives of the hospital.
    financialInformation: {  // Array of financial information for the hospital.
        metric: string;  // Financial metric or measure.
        value: number;  // Value of the financial metric.
    }[];
    partnershipsAndAffiliations: string[];  // Array of partnerships and affiliations of the hospital.
    patients: {  // Information about different categories of patients in the hospital.
        category: string;  // Category of patients (e.g., inpatient, outpatient).
        count: number;  // Number of patients in the specified category.
    };
    FeesInfo: {  // Information about fees for medical services.
        speciality: any;  // Speciality for which the fee information is applicable (type to be determined).
        fees: string;  // Fee information.
    };
}

/**
 * Mongoose model representing the information of the hospital. 
 */
const HospitalInfoSchema = new Schema<HospitalInfoInterface>({
    _id: Schema.Types.ObjectId,
    hospitalName: { type: String, required: true },
    hospitalLevel: { type: String, enum: ['Level 1', 'Level 2', 'Level 3'], required: true },
    superAdmin: { type: Schema.Types.Mixed }, // Type to be determined
    admins: [{ type: Schema.Types.Mixed }], // Type to be determined
    location: { type: String, required: true },
    medicalSpecialties: [{ type: String }],
    hospitalType: { type: String, enum: ['Public', 'Private', 'Government'], required: true },
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
    website: { type: String },
    accreditations: [{
        name: { type: String, required: true },
        body: { type: String, required: true },
        expirationDate: { type: Date, required: true }
    }],
    operatingHours: [{
        day: { type: String, required: true },
        hours: { type: String, required: true }
    }],
    insurancesAccepted: [{ type: String }],
    facilityType: { type: String },
    ownership: { type: String },
    bedCapacity: [{
        type: { type: String },
        count: { type: Number }
    }],
    emergencyServices: {
        available: { type: Boolean },
        traumaCenter: { type: Boolean },
        capabilities: [{ type: String }]
    },
    outpatientServices: [{ type: String }],
    qualityIndicators: [{
        metric: { type: String },
        value: { type: String }
    }],
    languagesSpoken: [{ type: String }],
    ehrSystem: { type: String },
    telemedicineServices: [{ type: String }],
    humanResources: [{
        category: { type: String },
        count: { type: Number }
    }],
    environmentalSustainability: [{ type: String }],
    financialInformation: [{
        metric: { type: String },
        value: { type: Number }
    }],
    partnershipsAndAffiliations: [{ type: String }],
    patients: [{
        category: { type: String },
        count: { type: Number }
    }],
    FeesInfo: {
        speciality: { type: Schema.Types.Mixed }, // Type to be determined
        fees: { type: String }
    }
});

export default mongoose.model<HospitalInfoInterface>('HospitalInfo', HospitalInfoSchema);
