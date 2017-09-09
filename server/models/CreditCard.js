var mongoose = require('mongoose');
//can set as the normal mongoose
var CreditCardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true



    },
    ccnumber: {
        type: String,
        required: true,
        minlength: 12,
        maxlength: 16,
        validate : 
        {
            validator : CCValidator,
            message:'This card does not pass the Luhn test!'
        }
    },
    ccv: {
        type: Number,
        required: true,
        minlength: 3

    },
    expiredate: {
        type: String,
        minlength: 4
    },
    billaddress: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },

    shipaddress:
    {

        type: String,
        required: true,
        minlength: 4,
        trim: true

    },

    productid:
    {
        type: Number,
        required: true
    }
})



var CreditCard = mongoose.model('CreditCard', CreditCardSchema);

function CCValidator(Luhn)
{
    var ca, sum = 0, mul = 1;
   var len = Luhn.length;
   while (len--)
   {
       ca = parseInt(Luhn.charAt(len),10) * mul;
       sum += ca - (ca>9)*9;// sum += ca - (-(ca>9))|9
       // 1 <--> 2 toggle.
       mul ^= 3; // (mul = 3 - mul);
   };
   return((sum%10 === 0) && (sum > 0)) ;

}

module.exports = { CreditCard };
