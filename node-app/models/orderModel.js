const mongoose = require('mongoose')
const Schema = mongoose.Schema


const orderSchema = Schema({
    date:{
        type: Date,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    prod_id:[
        {
        type: Schema.Types.ObjectId,
        ref: 'productModel'
        }
    ]
})

module.exports = mongoose.model('orderModel',orderSchema);