const jwt = require('jsonwebtoken');

module.exports = function(token){
     jwt.verify(token, `${process.env.SECRET}`, (err,decoded)=>{
         if(err){
             return false;
         }
         return true;
    });
}