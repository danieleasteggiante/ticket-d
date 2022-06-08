const mongoose = require('mongoose');


const { Schema } = mongoose;

const User = new Schema({
    CodCliente: { type: String, required: true },
    password: { type: String, required: true },
    RagioneSociale: { type: String, required: true },
    userType: { type: String, required: true },
    userArea: { type: String, required: true },
    username: { type: String, required: true },
    mail: { type: String, required: true }
});

module.exports = mongoose.model('User', User);