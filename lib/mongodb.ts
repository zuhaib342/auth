import { error } from "console";
import mongoose from "mongoose";

const {MONGODB_URL} = process.env

if (!MONGODB_URL) {
    throw new Error("invalid Environment variabl :MONGODB_URL");
}
export const connectToMongoDB = async() =>{
    try {
        const {connection} = await mongoose.connect(MONGODB_URL)
        if(connection.readyState === 1) {
            return Promise.resolve(true)
        }
    } catch (error) {
        return Promise.reject(error)
    }
}