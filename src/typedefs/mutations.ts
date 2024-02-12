import { gql } from 'graphql-tag';

export const mutations = gql`
 type Mutation {
    createHospital(input: HospitalInput!): HospitalInfo
    updateHospital(id: ID!, input: UpdateHospitalInput!): HospitalInfo
    deleteHospital(id: ID!): HospitalInfo
    createStaffMember(input: StaffMemberInput!): StaffMember
    updateStaffMember(id: ID!, input: UpdateStaffMemberInput!): StaffMember
    deleteStaffMember(id: ID!): StaffMember
    createAdministrator(input: AdministratorInput!): Administrator
    updateAdministrator(id: ID!, input: UpdateAdministratorInput!): Administrator
    deleteAdministrator(id: ID!): Administrator
  }
`;
