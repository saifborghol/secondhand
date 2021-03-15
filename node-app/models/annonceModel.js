const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = Schema({

    title:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    prod_id:{
        type: Schema.Types.ObjectId,
        ref: 'productModel'
    }

})

module.exports = mongoose.model('annanceModel',categorySchema);