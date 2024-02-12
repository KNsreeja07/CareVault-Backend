"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.queries = (0, graphql_tag_1.gql) `
   type Query {
 
  getHospital(id: ID!): Hospital

 
  getAllHospitals: [Hospital]

 
  getStaffMember(id: ID!): StaffMember
 
  getAllStaffMembers: [StaffMember]
 
  getAdministrator(id: ID!): Administrator

   getAllAdministrators: [Administrator]



  
}




`;
