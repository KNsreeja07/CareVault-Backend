import { gql } from 'graphql-tag';



export const enums = gql`
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




`

 
   