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
exports.AdminType = void 0;
const mongoose_1 = __importStar(require("mongoose"));
/**
* Enum representing different types of administrators.
*/
var AdminType;
(function (AdminType) {
    AdminType["Admin"] = "Admin";
    AdminType["SuperAdmin"] = "SuperAdmin";
})(AdminType || (exports.AdminType = AdminType = {}));
/**
 * Mongoose schema representing an administrator.
 */
const AdministratorSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    hospital: { type: mongoose_1.Schema.Types.ObjectId, ref: 'HospitalInfoInterface', required: true },
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
    birthDate: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
});
exports.default = mongoose_1.default.model('Administrator', AdministratorSchema);
