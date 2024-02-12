import mongoose from "mongoose";
import {Administrator} from "../../models/Administrator";

const createAdministrator = async (parent, args, context) => {
 
  
    try {
        const newAdministrator = new Administrator({
            ...args.input as any 
        });
        const createdAdministrator = await newAdministrator.save();
        
        return createdAdministrator;  
    } catch (error) {
  
        console.error("Error creating administrator:", error);
        throw new Error("Failed to create administrator");
    }
};

export default createAdministrator;
