const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    quantity: Number,
},{
    collection: 'products'
})



module.exports = mongoose.model('Product', Product);