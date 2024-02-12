"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalLevel = exports.HospitalType = void 0;
const mongoose_1 = __importStar(require("mongoose"));
/**
 * Enum representing different types of hospitals.
 */
var HospitalType;
(function (HospitalType) {
    HospitalType["Public"] = "PPP model";
    HospitalType["Private"] = "Private";
    HospitalType["Government"] = "Government";
})(HospitalType || (exports.HospitalType = HospitalType = {}));
/**
 * Enum representing different levels of hospitals.
 */
var HospitalLevel;
(function (HospitalLevel) {
    HospitalLevel["Level1"] = "Level 1";
    HospitalLevel["Level2"] = "Level 2";
    HospitalLevel["Level3"] = "Level 3";
})(HospitalLevel || (exports.HospitalLevel = HospitalLevel = {}));
/**
 * Mongoose model representing the information of the hospital.
 */
const HospitalInfoSchema = new mongoose_1.Schema({
    hospitalName: { type: String, required: true },
    hospitalLevel: { type: String, enum: ['Level 1', 'Level 2', 'Level 3'], required: true },
    superAdmin: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Administrator' }, // Reference to Administrator model.
    admins: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Administrator' }], // Array of references to Administrator model.
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
        speciality: { type: mongoose_1.Schema.Types.Mixed }, // Type to be determined
        fees: { type: String }
    }
});
exports.default = mongoose_1.default.model('HospitalInfo', HospitalInfoSchema);
