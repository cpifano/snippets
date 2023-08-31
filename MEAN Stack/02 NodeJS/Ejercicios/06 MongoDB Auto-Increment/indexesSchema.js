const mongoose = require('mongoose');

//Define Schema:
const Schema = new mongoose.Schema({
    accession_number : { type: Number, unique: true }
},
{ timestamps: true },
{ versionKey: false });

//Define model:
const Model = mongoose.model('global_indexes', Schema, 'global_indexes');

//--------------------------------------------------------------------------------------------------------------------//
//Export Shcema, Model and Validation Rules:
module.exports = { Schema, Model };
//--------------------------------------------------------------------------------------------------------------------//