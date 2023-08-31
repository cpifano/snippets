const mongoose = require('mongoose');
const middlewares = require('./middlewares');

//Define preSchema:
const preSchema = new mongoose.Schema({
    name                : { type: String, required: true },
    surname             : { type: String, required: true },
    accession_number    : { type: Number, unique: true }
},
{ timestamps: true },
{ versionKey: false });

//Indicate that the schema has a auto-increment field:
Schema = middlewares.isAutoIncrement(
    preSchema,          // Schema base
    'accession_number', // Field name
    100,                // Start at (default: 1)
    1                   // Increment by (default: 1)
);

//Define model:
const Model = mongoose.model('people', Schema, 'people');

//--------------------------------------------------------------------------------------------------------------------//
//Export Shcema, Model and Validation Rules:
module.exports = { Schema, Model };
//--------------------------------------------------------------------------------------------------------------------//