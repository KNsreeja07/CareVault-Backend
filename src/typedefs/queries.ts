import { gql } from 'graphql-tag';



export const queries = gql`
   type Query {
 
  getHospital(id: ID!): HospitalInfo

 
  getAllHospitals: [HospitalInfo]

 
  getStaffMember(id: ID!): StaffMember
 
  getAllStaffMembers: [StaffMember]
 
  getAdministrator(id: ID!): Administrator

   getAllAdministrators: [Administrator]



  
}




`

 
   