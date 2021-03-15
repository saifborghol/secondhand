const mongoose = require('mongoose');
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
	subCat_id: {
		type: Schema.Types.ObjectId,
		ref: 'subCategoryModel',
	},
});

const annonceSchema = Schema(
	{
		title: {
			type: String,
			required: true,
		},

		user_id: {
			type: Schema.Types.ObjectId,
			ref: 'userModel',
		},

		prod_id: [productSchema],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('annonceModel', annonceSchema);
