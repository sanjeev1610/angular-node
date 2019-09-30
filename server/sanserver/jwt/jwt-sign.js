const jwt = require('jsonwebtoken');

module.exports = function(obj){
    return jwt.sign(obj, `${process.env.SECRET}`)
}
