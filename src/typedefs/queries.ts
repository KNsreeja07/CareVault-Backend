import { gql } from 'graphql-tag';



export const queries = gql`
   type Query {
  # Retrieve a hospital by ID
  getHospital(id: ID!): Hospital

  # Retrieve all hospitals
  getAllHospitals: [Hospital]

  # Retrieve a staff member by ID
  getStaffMember(id: ID!): StaffMember

  # Retrieve all staff members
  getAllStaffMembers: [StaffMember]

  # Retrieve an administrator by ID
  getAdministrator(id: ID!): Administrator

  # Retrieve all administrators
  getAllAdministrators: [Administrator]
}




`

 
   