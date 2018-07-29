const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientMongoSchema = new Schema({
    
    patientName: String,
    age: String,
    disease: String,
    gender: String,

});

module.exports = mongoose.model('patientSchema', PatientMongoSchema);