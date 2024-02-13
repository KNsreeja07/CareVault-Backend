import { Hospital, HospitalInfoInterface } from "../../models"



const createHospital = async (parent: any, args: any ,context: any) =>{
       const createdHospital = await  Hospital.create({
          ...args.input as HospitalInfoInterface
       });
   

       return createHospital;
}


export default createHospital;