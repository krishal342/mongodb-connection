import mongoose from "mongoose";
import config from "./env.config.js";

const connectDB = async () => {
    mongoose.connect(config.MONGODB_URL)
        .then(() => {
            console.log('Database connected');
        })
        .catch((err) => {
            console.log(err);
        });
}

export default connectDB;