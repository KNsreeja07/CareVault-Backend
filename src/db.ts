import mongoose from "mongoose";
import { MONGO_DB_URL } from "./constants";

let session!: mongoose.ClientSession;

export const connect = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGO_DB_URL as string);
        session = await mongoose.startSession();
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error while connecting to MongoDB:", error.message);
            process.exit(1);
        }
    }
};

export const disconnect = async (): Promise<void> => {
    session?.endSession();
    await mongoose.connection.close();
};

export { session };
