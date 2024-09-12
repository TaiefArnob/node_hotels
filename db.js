const mongoose = require('mongoose');
require('dotenv').config();

// Defining the MongoDB connection URL:

//Local Server
//  const mongoURL=process.env.MONGODB_URL_LOCAL

const mongoURL = process.env.MONGODB_URL

// Connecting to MongoDB:
mongoose.connect(mongoURL)
    .then(() => {
        console.log('Connected to MongoDB server.');
    })
    .catch((err) => {
        console.log('MongoDB connection error: ', err);
    });

const db = mongoose.connection;

db.on('disconnected', () => {
    console.log('MongoDB disconnected.');
});

module.exports = db;
