require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGO_CONNECTION_URL;
connectDb = () => {
    // Database connection
    mongoose.connect(url);

    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log(`Database Connected`);
    }).on('error', err => {
        console.log(err);
    })

};

module.exports = connectDb;