
const mongoose = require('mongoose');
const Joi = require("joi");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 75
    }
});

const Category = mongoose.model('Category', categorySchema);


function validateCategory(category) {
    const schema = { 
        name: Joi.string().min(3).required()
    };

    return Joi.validate(category, schema);
}


exports.Category = Category;
exports.validate = validateCategory;