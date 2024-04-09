import mongoose from "mongoose";


const Connection = async (userName, password) => {
    const MONGODB_URL = `mongodb+srv://${userName}:${password}@gmailclone.bteqmiy.mongodb.net/?retryWrites=true&w=majority&appName=Gmailclone`;
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('Connected to Database');
    } catch (error) {
        console.log('Error connecting to Database')
    }
}

export default Connection;