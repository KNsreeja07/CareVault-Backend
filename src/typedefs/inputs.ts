import { gql } from 'graphql-tag';



export const inputs  = gql`
 input HospitalInput {
  hospitalName: String!
  hospitalLevel: HospitalLevel!
  superAdmin: ID!
  admins: [ID!]!
  location: String!
  medicalSpecialties: [String!]!
  hospitalType: HospitalType!
  contact: ContactInput!
  address: AddressInput!
  website: String
  accreditations: [AccreditationInput!]!
  operatingHours: [OperatingHourInput!]!
  insurancesAccepted: [String!]!
  facilityType: String!
  ownership: String!
  bedCapacity: [BedCapacityInput!]!
  emergencyServices: EmergencyServicesInput!
  outpatientServices: [String!]!
  qualityIndicators: [QualityIndicatorInput!]!
  languagesSpoken: [String!]!
  ehrSystem: String!
  telemedicineServices: [String!]!
  humanResources: [HumanResourceInput!]!
  environmentalSustainability: [String!]!
  financialInformation: [FinancialInformationInput!]!
  partnershipsAndAffiliations: [String!]!
  patients: [PatientInfoInput!]!
  feesInfo: [FeesInfoInput!]!
}
input UpdateHospitalInput {
  hospitalName: String
  hospitalLevel: HospitalLevel
  superAdmin: ID
  admins: [ID!]
  location: String
  medicalSpecialties: [String!]
  hospitalType: HospitalType
  contact: ContactInput
  address: AddressInput
  website: String
  accreditations: [AccreditationInput!]
  operatingHours: [OperatingHourInput!]
  insurancesAccepted: [String!]
  facilityType: String
  ownership: String
  bedCapacity: [BedCapacityInput!]
  emergencyServices: EmergencyServicesInput
  outpatientServices: [String!]
  qualityIndicators: [QualityIndicatorInput!]
  languagesSpoken: [String!]
  ehrSystem: String
  telemedicineServices: [String!]
  humanResources: [HumanResourceInput!]
  environmentalSustainability: [String!]
  financialInformation: [FinancialInformationInput!]
  partnershipsAndAffiliations: [String!]
  patients: [PatientInfoInput!]
  feesInfo: [FeesInfoInput!]
}

input ContactInput {
  phoneNumber: String!
  email: String!
}

input AddressInput {
  street: String!
  city: String!
  state: String!
  postalCode: String!
}

input AccreditationInput {
  name: String!
  validUntil: String!
}

input OperatingHourInput {
  day: String!
  open: String!
  close: String!
}

input BedCapacityInput {
  type: String!
  count: Int!
}

input EmergencyServicesInput {
  available: Boolean!
  contactNumber: String
}

input QualityIndicatorInput {
  name: String!
  value: String!
}

input HumanResourceInput {
  role: String!
  count: Int!
}

input FinancialInformationInput {
  revenue: Float!
  expenses: Float!
}

input PatientInfoInput {
  patientName: String!
  age: Int!
  gender: String!
}

input FeesInfoInput {
  service: String!
  amount: Float!
}

enum HospitalLevel {
  PRIMARY_CARE
  SECONDARY_CARE
  TERTIARY_CARE
}

enum HospitalType {
  PUBLIC
  PRIVATE
}

input AdminContactInput {
  email: String!
  phone: String!
}

input AdminAddressInput {
  city: String!
  dependentLocality: String
  line1: String!
  line2: String
  postalCode: String!
  state: String!
}

input AdministratorInput {
  name: String!
  password: String!
  hospital: ID!
  adminType: AdminType!
  contact: AdminContactInput!
  address: AdminAddressInput!
  birthDate: String!
  createdAt: String
  updatedAt: String
}

enum AdminType {
  Admin
  SuperAdmin
}

input StaffContactInput {
  email: String!
  phone: String!
}

input StaffAddressInput {
  city: String!
  dependentLocality: String
  line1: String!
  line2: String
  postalCode: String!
  state: String!
}

input StaffMemberInput {
  isAdmin: Boolean!
  isSuperAdmin: Boolean!
  staffType: StaffType!
  address: StaffAddressInput!
  contact: StaffContactInput!
  registrationNumber: String!
  speciality: String
  experience: String!
  password: String!
  birthDate: String!
  createdAt: String
  updatedAt: String
  patientsUnder: String  # Adjust the type as needed
  adminType: AdminType
  blockUnder: String!
}

input UpdateStaffMemberInput {
  isAdmin: Boolean
  isSuperAdmin: Boolean
  staffType: StaffType
  address: StaffAddressInput
  contact: StaffContactInput
  registrationNumber: String
  speciality: String
  experience: String
  password: String
  birthDate: String
  createdAt: String
  updatedAt: String
  patientsUnder: String
  adminType: AdminType
  blockUnder: String
}

input UpdateAdministratorInput {
  isAdmin: Boolean
  isSuperAdmin: Boolean
  staffType: StaffType
  address: StaffAddressInput
  contact: StaffContactInput
  registrationNumber: String
  speciality: String
  experience: String
  password: String
  birthDate: String
  createdAt: String
  updatedAt: String
  patientsUnder: String
  adminType: AdminType
  blockUnder: String
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

enum AdminType {
  Admin
  SuperAdmin
}



`
