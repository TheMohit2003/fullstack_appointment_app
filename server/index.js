require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./config/db');
const cors = require('cors');
const { errorHandler } = require('./middlewares/errorHandler');

//@description    establishing database connection:
db();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Allow requests from http://localhost:5173
app.use(cors);

// //@description    lets you post data to the database
app.use('/', require('./routes/formRoute'));

// @description     error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log('this is working');
});
