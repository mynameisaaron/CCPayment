const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/CreditCard');

module.exports = {mongoose};
//for export to the server.js only