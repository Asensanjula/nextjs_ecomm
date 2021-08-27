import mongoose from 'mongoose';

const connectDB = () => {
    if (mongoose.connections[0].readyState){
        console.log('Already Connected');
        return;
    }
    mongoose.connect(process.env.MONGODB_URL, {
        // useCreateIndex: true,
        // useFindAndModify: false,
        useNewUrlParser: true,
        // useUnifiedTopology: true
    }, error => {
        if (error) {
            console.log('Error connecting to mongodb')
            throw error;
        }
        console.log('Connected to mongodb')
    });
}

export default connectDB;