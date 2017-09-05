const {mongoose} = require('./db/mongoose');
const {CreditCard} = require('./models/CreditCard');

var bodyparser = require('body-parser');
var express = require('express');
var app = express();
// SERVER IS FOR THE ENDPOINTS

app.use(bodyparser.json());
app.post('/order', (req,res)=>{
   
    var order = new CreditCard(req.body);

    order.save()
    .then(doc=>{res.status(201).send(doc)}, e=>{res.status(400).send(e)})
    


    

});


var PortNumber = 3000;
app.listen(PortNumber,()=>{console.log(`Listening on Port ${PortNumber}`)});