import { StaffMember } from "../../models"






const createStaffMember = async(parent: any, args: any, context: any)=>{

    const createdStaffMember = await StaffMember.create({
        ...args.input as any,
    });
    
   

   return createdStaffMember;

}

export default createStaffMember;