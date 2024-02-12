"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutations = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.mutations = (0, graphql_tag_1.gql) `
  mutation {
    createHospital(input: HospitalInput!): Hospital
    updateHospital(id: ID!, input: UpdateHospitalInput!): Hospital
    deleteHospital(id: ID!): Hospital
    createStaffMember(input: StaffMemberInput!): StaffMember
    updateStaffMember(id: ID!, input: UpdateStaffMemberInput!): StaffMember
    deleteStaffMember(id: ID!): StaffMember
    createAdministrator(input: AdministratorInput!): Administrator
    updateAdministrator(id: ID!, input: UpdateAdministratorInput!): Administrator
    deleteAdministrator(id: ID!): Administrator
  }
`;
