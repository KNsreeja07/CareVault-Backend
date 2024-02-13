import gql from "graphql-tag";
import createAdministrator from "./createAdministrator";
import createHospital from "./createHospital";
import createStaffMember from "./createStaffMember";



const mutations = gql`
  ${createAdministrator},
  ${createHospital}, 
  ${createStaffMember}
`
export default mutations;
 