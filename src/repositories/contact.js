const mongoose = require('./db');

const Contact = mongoose.model('Contact', {firstName: String, lastName: String, age: Number})

module.exports = Contact