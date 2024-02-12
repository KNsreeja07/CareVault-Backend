"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enums = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.enums = (0, graphql_tag_1.gql) `
enum AdminType {
    ADMIN,
    SUPER_ADMIN
  }
enum HospitalLevel {
    PRIMARY_CARE
    SECONDARY_CARE
    TERTIARY_CARE
}
enum StaffType {
    Physician
    Nurse
    Surgeon
    Specialist
    Technician
    Pharmacist
    AlliedHealthProfessional
    AdministrativeStaff
    SupportStaff
    Volunteer
  }




`;
