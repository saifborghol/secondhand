const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./userModel')

const providerSchema = Schema({
    company:{
        type: String,
        required: true
    },
    prod_id:{
        type: Schema.Types.ObjectId,
        ref: 'productModel'
    }
})

module.exports = User.discriminator('providerModel',providerSchema)