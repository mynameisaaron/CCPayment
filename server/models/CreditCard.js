var mongoose = require('mongoose');
//can set as the normal mongoose

var CreditCard = mongoose.model('CreditCard',{
    name: {
        type:String,
        required:true,
        minlength:1,
        trim:true
        

        
    },
    ccnumber:{
        type:String,
        required:true,
        minlength:12,
        maxlength:16
    },
    ccv:{
        type: Number,
        required:true,
        minlength:3
        
    },
    expiredate:{
        type:String,
        minlength:4
    },
    address : {
        type : String,
        required : true,
        minlength : 4,
        trim : true
    }});

    module.exports = {CreditCard};
