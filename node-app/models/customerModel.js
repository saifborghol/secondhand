const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./userModel')

const customerSchema = Schema({
    adress:{
        type: String,
        required: true
    },
    phone:{
        type:  Number,
        required: true
    },
    order_id:[
        {
        type: Schema.Types.ObjectId,
        ref: 'orderModel'
        }
    ]
})

module.exports = User.discriminator('customerModel',customerSchema)