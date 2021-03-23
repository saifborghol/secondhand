const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    subCat_id:{
        type: Schema.Types.ObjectId,
        ref: 'subCategoryModel'
    }
})

module.exports = mongoose.model('productModel',productSchema)