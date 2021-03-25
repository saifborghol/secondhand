const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	subcat: [
		{
			type: Schema.Types.ObjectId,
			ref: 'subCategoryModel',
		},
	],
});

module.exports = mongoose.model('categoryModel', categorySchema);
