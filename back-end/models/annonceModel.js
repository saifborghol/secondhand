const mongoose = require('mongoose');
const { array } = require('../middleware/multer');
const Schema = mongoose.Schema;

const productSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	image: {
		type: Array
	},
	subCat_id: {
		type: Schema.Types.ObjectId,
		ref: 'subCategoryModel',
	},
});

const annonceSchema = Schema({
	title: {
		type: String,
		required: true,
	},

	user_id: {
		type: Schema.Types.ObjectId,
		ref: 'userModel',
	},

	date: { type: String, default: new Date().toLocaleDateString() },

	product: productSchema,
});

module.exports = mongoose.model('annonceModel', annonceSchema);
