const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            // Set timeout ke 30 detik
            serverSelectionTimeoutMS: 30000,
        });

        console.log(`Database connected. ${conn.connection.host}`);
    } catch (error) {
        console.error("Error connecting to the database:", error);
        res.status(500).send("Internal Server Error");
    }
    
};

module.exports = connectDB;
