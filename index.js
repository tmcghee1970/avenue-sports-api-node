const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const categories = require('./routes/categories');
const products = require('./routes/products');
const mongoose = require('mongoose');
const express = require("express");
const app = express();

mongoose.connect('mongodb://localhost/avenue-sports')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB....', err));

app.use(express.json());

app.use('/api/categories', categories);
app.use('/api/products', products);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));