import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.log("Error connectiong DB", error);
        return Response.json(
           {
            message: "Error connecting to the database",
            error: error.message
           }, 
           {
            status: 500
           }
       )
    }    
}

export default connectDb;