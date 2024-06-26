const mongoose = require('mongoose');
const Schema = mongoose.Schema; //class or constructor func if starting with capital letter
const orderSchema = new Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: { type: Object, required: true},
    phone: { type: String, require: true},
    address: { type: String, require: true},
    paymentType: { type: String, default:'COD'},
    status: { type: String, default: 'order_placed'},
},{timestamps: true}
); //blueprint of things in database

//creating model and exporting
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;