const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const annonceSchema = Schema({
	title: {
		type: String,
		required: true,
	},

	description: {
		type: String,
	},
	price: {
		type: Number,
		required: true,
	},

	tel:{
		type: Number
	},

	location: {
		type: String,
		required: true,
	},

	image: {
		type: Array,
	},

	subCat_id: {
		type: Schema.Types.ObjectId,
		ref: 'subCategoryModel',
	},

	user_id: {
		type: Schema.Types.ObjectId,
		ref: 'userModel',
	},

	date: { type: String, default: new Date().toLocaleDateString() },
});

module.exports = mongoose.model('annonceModel', annonceSchema);
