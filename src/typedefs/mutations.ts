import { gql } from 'graphql-tag';

export const mutations = gql`
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
