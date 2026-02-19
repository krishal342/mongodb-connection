import mongoose from "mongoose";
import config from "./env.config.js";

const connectDB = async () => {
    mongoose.connect(config.CONNECTION_STRING, {
        dbName: config.DATABASE_NAME
    })
        .then(() => {
            console.log('Database connected');
        })
        .catch((err) => {
            console.log(err);
        });
}

export default connectDB;