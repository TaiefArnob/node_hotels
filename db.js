const mongoose = require('mongoose');

// Defining the MongoDB connection URL:

// //Local Server
//  const mongoURL='mongodb://localhost:27017/hotels'

const mongoURL = 'mongodb+srv://arnob787:WFBjokPJKn05rhBx@cluster0.fk0q7.mongodb.net/hotel';

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
