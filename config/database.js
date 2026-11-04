require('dotenv').config()
// config/database.js
module.exports = {

    url : process.env.MONGODB_URI,
    dbName : process.env.DB_NAME,
};





