import mongoose from "mongoose";
import { configDotEnvBD } from "../config/dotenv.js";

const {mongodb_uri} = configDotEnvBD();
export const connectDB = async () => {
    try{
        await mongoose.connect(mongodb_uri, {
            autoIndex:true,
           
        });
        console.log('DB is connected')
    } catch (error) {
        console.log('error al conectar',error.message)
    };

};