const mongoose = require('mongoose')
const Schema = mongoose.Schema


const orderSchema = Schema({
    date: { type: String, default: new Date().toLocaleDateString() },
    price:{
        type: Number,
        required: true
    },
    annonces:[
        {
        type: Schema.Types.ObjectId,
        ref: 'annonceModel'
        }
    ]
})

module.exports = mongoose.model('orderModel',orderSchema);