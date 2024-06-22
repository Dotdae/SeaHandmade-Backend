import mongoose from "mongoose";
import "dotenv/config";
import { serverTime } from "./config.js";


try{

    const db = await mongoose.connect(`mongodb+srv://${process.env.user}:${process.env.password}@seahandmade.3kozbpg.mongodb.net/SeaHandmade?retryWrites=true&w=majority&appName=SeaHandmade`);

    console.log(`[${serverTime()}] Database is connected to: ${ db.connection.name }`);

}
catch(error){
    console.error(error.message);
}