import mongoose from "mongoose";

const {MONGO_DB_URI} = process.env;

export function connectDatabase() {

    try {

        mongoose.connect(MONGO_DB_URI);
    
        console.log("Successfully connected to MongoDB!");
    
    }
    
    catch (err) {
        console.error(err);
    }

}