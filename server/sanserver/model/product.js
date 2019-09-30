var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    title: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String, required: true},
    productImage: {
        name: String,
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Product', ProductSchema);

// module.exports = mongoose.model('Product', ProductSchema, 'products');
