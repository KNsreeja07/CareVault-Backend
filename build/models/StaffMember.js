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
exports.StaffType = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const Administrator_1 = require("./Administrator");
/**
 * Enum representing different types of staff members.
 */
var StaffType;
(function (StaffType) {
    StaffType["Physician"] = "Physician";
    StaffType["Nurse"] = "Nurse";
    StaffType["Surgeon"] = "Surgeon";
    StaffType["Specialist"] = "Specialist";
    StaffType["Technician"] = "Technician";
    StaffType["Pharmacist"] = "Pharmacist";
    StaffType["AlliedHealthProfessional"] = "Allied Health Professional";
    StaffType["AdministrativeStaff"] = "Administrative Staff";
    StaffType["SupportStaff"] = "Support Staff";
    StaffType["Volunteer"] = "Volunteer";
})(StaffType || (exports.StaffType = StaffType = {}));
/**
 * Mongoose schema representing a staff member.
 */
const StaffMemberSchema = new mongoose_1.Schema({
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
    patientsUnder: { type: mongoose_1.Schema.Types.Mixed }, // Type to be determined
    adminType: { type: String, enum: Object.values(Administrator_1.AdminType) },
    blockUnder: { type: String, required: true }
});
exports.default = mongoose_1.default.model('StaffMember', StaffMemberSchema);
