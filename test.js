
 numnum = "371496839841";
  
 var CCValidator = function(Luhn)
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

 var torf = CCValidator(numnum);
console.log(torf);
