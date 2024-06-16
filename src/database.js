/* Required external modules */
const mongoose = require('mongoose');

require('dotenv').config();

/* Function to connect to MongoDB database */
async function connectDatabase() {
  try {
    console.log('Database connection started');

    await mongoose.connect(process.env.MONGO_URL);

    console.log('Database connection was successful');
  } catch(error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1);
  }
}

/* Export created module */
module.exports = connectDatabase;