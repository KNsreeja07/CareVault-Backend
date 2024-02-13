import mongoose from "mongoose";
import {Administrator, AdministratorInterface} from "../../models/Administrator";

const createAdministrator = async (parent: any, args: { input: AdministratorInterface; }, context: any) => {
 
  
    try {
        const newAdministrator = new Administrator({
            ...args.input as AdministratorInterface
        });
        const createdAdministrator = await newAdministrator.save();
        
        return createdAdministrator;  
    } catch (error) {
  
        console.error("Error creating administrator:", error);
        throw new Error("Failed to create administrator");
    }
};

export default createAdministrator;
