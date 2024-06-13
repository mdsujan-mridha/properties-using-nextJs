import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);
    if (connected) {
        console.log('Database Already Connected,🚀')
        return;
    };
    try {
        await mongoose.connect(process.env.DB_URL);
        connected = true;
        console.log("Database Connected,🚀");
    } catch (err) {
        console.log(err);
    }
}

export default connectDB;