const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var database = process.env.MONGODB_URI || 'mongodb://localhost:27017/CreditCard';

mongoose.connect(database);

module.exports = {mongoose};
//for export to the server.js only