const mongoose = require('mongoose');
const Message = require('./message-model').schema;

const Ticket = new mongoose.Schema({
    area: { type: String, required: true },
    CodCliente: { type: String, required: true },
    RagioneSociale: { type: String, required: true },
    Admin: { type: String },
    title: { type: String, required: true },
    messages: [Message],
    status: { type: String, required: true },
    images: [{ type: String }],
    createAtDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', Ticket);