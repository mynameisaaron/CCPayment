const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/CreditCard');


var phoneRegex = /\d{3}-\d{3}-\d{4}/;
console.log(phoneRegex.test("313661-1113") );

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
    }
});

var creditcard = new CreditCard({
   name:'Aaron Brightman    ',
   ccnumber:'5555555555554444',
   ccv:'321',
   expiredate:'0324',

   address: '864 Alter Road, Detroit MI 48215'

});

creditcard.save()
.then(doc=>{
    console.log(`DOC! ${doc}`);
},e =>{
    console.log(JSON.stringify(e.errors.text.message));
});