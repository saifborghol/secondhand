const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subCategorySchema = Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    cat_id:{
        type: Schema.Types.ObjectId,
        ref: 'categoryModel'
    }
})

module.exports = mongoose.model('subCategoryModel',subCategorySchema)