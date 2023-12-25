import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConnection = async () => {

    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-cbzmbr3-shard-00-00.6ozz60q.mongodb.net:27017,ac-cbzmbr3-shard-00-01.6ozz60q.mongodb.net:27017,ac-cbzmbr3-shard-00-02.6ozz60q.mongodb.net:27017/?ssl=true&replicaSet=atlas-6xgcuy-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
     await mongoose.connect(MONGODB_URI, {
        useNewUrlParser:true,
     });
     console.log('database connected successfully');
    }catch (err) {
        console.error("Error while connecting with database", err.message);
    }
}

export default dbConnection;