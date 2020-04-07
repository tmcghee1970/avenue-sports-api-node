const mongoose = require('mongoose');
const Joi = require("joi");
const { categorySchema } = require('./category');

const Product = mongoose.model('Product', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
        maxlength: 255
    },
    category: {
        type: categorySchema,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 1024
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 12000
    }
}));

function validateProduct(product) {
    const schema = {
        name: Joi.string().min(4).max(255).required(),
        categoryId: Joi.objectId().required(),
        description: Joi.string().min(5).max(1024).required(),
        numberInStock: Joi.number().min(0).required(),
        price: Joi.number().min(0).required()
    };

    return Joi.validate(product, schema);
}


module.exports.validate = validateProduct;
module.exports.Product = Product;