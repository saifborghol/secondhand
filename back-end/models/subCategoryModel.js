const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subCategorySchema = Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    cat_id:{
        type: Schema.Types.ObjectId,
        ref: 'categoryModel'
    },
    annonce: [
		{
			type: Schema.Types.ObjectId,
			ref: 'annonceModel',
		},
	],
})

module.exports = mongoose.model('subCategoryModel',subCategorySchema)