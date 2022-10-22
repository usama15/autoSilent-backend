const mongoose = require("mongoose")

const connectDB = async () => {
    const conn = await mongoose.connect("mongodb+srv://smartfarm:e2rhm95678@cluster0.6owcj.mongodb.net/SLIENT?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`);

}

module.exports = connectDB;