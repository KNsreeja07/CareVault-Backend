import { gql } from 'graphql-tag';

 const  types = gql`
  type HospitalInfo {
    _id: ID!
    hospitalName: String!
    hospitalLevel: HospitalLevel!
    superAdmin: ID!
    admins: [ID!]!
    location: String!
    medicalSpecialties: [String!]!
    hospitalType: HospitalType!
    contact: Contact!
    address: Address!
    website: String
    accreditations: [Accreditation!]!
    operatingHours: [OperatingHour!]!
    insurancesAccepted: [String!]!
    facilityType: String!
    ownership: String!
    bedCapacity: [BedCapacity!]!
    emergencyServices: EmergencyServices!
    outpatientServices: [String!]!
    qualityIndicators: [QualityIndicator!]!
    languagesSpoken: [String!]!
    ehrSystem: String!
    telemedicineServices: [String!]!
    humanResources: [HumanResource!]!
    environmentalSustainability: [String!]!
    financialInformation: [FinancialInformation!]!
    partnershipsAndAffiliations: [String!]!
    patients: [PatientInfo!]!
    FeesInfo: [FeesInfo!]!
  }

  enum HospitalLevel {
    PRIMARY_CARE
    SECONDARY_CARE
    TERTIARY_CARE
  }

  type Contact {
    phone: String
    email: String
  }

  type Address {
    city: String!
    dependentLocality: String
    line1: String!
    line2: String
    postalCode: String!
    state: String!
  }

  type Accreditation {
    name: String!
    body: String!
    expirationDate: String!
  }

  type OperatingHour {
    day: String!
    hours: String!
  }

  type BedCapacity {
    type: String!
    count: Int!
  }

  type EmergencyServices {
    available: Boolean!
    traumaCenter: Boolean!
    capabilities: [String!]!
  }

  type QualityIndicator {
    metric: String!
    value: String!
  }

  type HumanResource {
    category: String!
    count: Int!
  }

  type FinancialInformation {
    metric: String!
    value: Float!
  }

  type PatientInfo {
    category: String!
    count: Int!
  }

  type FeesInfo {
    speciality: String
    fees: String!
  }

 type AdminContact {
    email: String!
    phone: String!
  }

  type Administrator {
    _id: ID!
    name: String!
    password: String!
    hospital: HospitalInfo!
    adminType: AdminType!
    contact: AdminContact!
    address: Address!
    birthDate: String!
    createdAt: String!
    updatedAt: String!
  }
  type StaffContact {
    email: String!
    phone: String!
  }

  type StaffMember {
    _id: ID!
    isAdmin: Boolean!
    isSuperAdmin: Boolean!
    staffType: StaffType!
    address: Address!
    contact: StaffContact!
    registrationNumber: String!
    speciality: String
    experience: String!
    password: String!
    birthDate: String!
    createdAt: String!
    updatedAt: String!
    patientsUnder: String # Type to be determined
    adminType: AdminType 
    blockUnder: String!
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

export default types;
