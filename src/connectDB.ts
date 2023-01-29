import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
    } catch (err) {
        console.error(err);
    }
};

export default connectDB;
