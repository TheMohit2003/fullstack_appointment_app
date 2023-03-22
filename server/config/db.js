// write the code to intiate mongodb here
const mongoose = require('mongoose');
const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Database connected!');
  } catch (error) {
    console.error('The database could not be connected:', error.message);
  }
};

module.exports = connectDB;
