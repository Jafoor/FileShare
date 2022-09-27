require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGO_CONNECTION_URL;
connectDb = () => {
    // Database connection
    mongoose.connect(url,
        {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }
    );

    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log(`Database Connected`);
    }).catch(err => {
        console.log(`Connection Failed`);
    })

};

module.exports = connectDb;