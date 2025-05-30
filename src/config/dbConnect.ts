import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('MongoDB connected!');
    } catch (err) {
        console.error(`Error to connect on MongoDB. ${err}`);
        process.exit(1);
    }
};