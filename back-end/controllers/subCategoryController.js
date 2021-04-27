const subCategoryModel = require('../models/subCategoryModel');

module.exports = {
	createSubCategory: function (req, res) {
		subCategoryModel.create(req.body, function (err, SubCategory) {
			console.log('cest bon');
			if (err) {
				console.log(err);
				res.json({
					msg: 'err' + err,
					statuts: 500,
					data: null,
				}); //500 erreur serveur
			} else {
				res.json({
					msg: 'Sub category added!',
					statuts: 200,
					data: SubCategory,
				});
			}
		});
	},

	deleteSubCategory: function (req, res) {
		subCategoryModel.findByIdAndRemove(
			{ _id: req.params.id },
			(err, SubCategory) => {
				if (err) {
					res.status(500).json({
						msg: 'erreur',
						status: 500,
						data: null,
					});
				} else {
					res.status(200).json({
						msg: 'SubCategory deleted!',
						status: 200,
						data: SubCategory,
					});
				}
			}
		);
	},

	deleteAll: function (req, res) {
		subCategoryModel.remove(function (err, SubCategory) {
			if (err) {
				res.status(500),
					json({
						msg: 'erreur',
						status: 500,
						data: null,
					});
			} else {
				res.status(200).json({
					msg: 'All SubCategorys deleted!',
					status: 200,
					data: SubCategory,
				});
			}
		});
	},

	updateSubCategory: function (req, res) {
		subCategoryModel
			.findByIdAndUpdate({ _id: req.params.id }, req.body)
			.exec(function (err, SubCategorys) {
				if (err) {
					res.status(500),
						json({
							msg: 'erreur',
							status: 500,
							data: null,
						});
				} else {
					res.status(200).json({
						msg: 'SubCategory updated!',
						status: 200,
						data: SubCategorys,
					});
				}
			});
	},

	getSubCategory: function (req, res) {
		subCategoryModel
			.findOne({ title: req.params.title })
			.populate({
				path: 'annonce',
				populate: { path: 'user_id' }
			 })
			.exec(function (err, SubCategorys) {
				if (err) {
					res.status(500),
						json({
							msg: 'erreur',
							status: 500,
							data: null,
						});
				} else {
					res.status(200).json({
						msg: 'Get SubCategory',
						status: 200,
						data: SubCategorys,
					});
				}
			});
	},

	getAllSubCategorys: function (req, res) {
		subCategoryModel
			.find({})
			.populate({
				path: 'annonce',
				populate: { path: 'user_id' }
			 })
			.exec(function (err, SubCategorys) {
				if (err) {
					res.status(500),
						json({
							msg: 'erreur',
							status: 500,
							data: null,
						});
				} else {
					res.status(200).json({
						msg: 'Get all SubCategorys',
						status: 200,
						data: SubCategorys,
					});
				}
			});
	},
	pushAnnonce: function (req, res) {
		subCategoryModel.updateOne(
			{ _id: req.params.id },
			{ $push: { annonce: req.body.annonce } },
			function (err, annonce) {
				if (err) {
					res.status(500),
						json({
							msg: 'erreur',
							status: 500,
							data: null,
						});
				} else {
					res.status(200).json({
						msg: 'Push annonce',
						status: 200,
						data: annonce,
					});
				}
			}
		);
	},

	pullAnnonce: function (req, res) {
		subCategoryModel.updateOne(
			{ _id: req.params.id },
			{ $pull: { annonce: req.body.annonce } },
			function (err, annonce) {
				if (err) {
					res.status(500),
						json({
							msg: 'erreur',
							status: 500,
							data: null,
						});
				} else {
					res.status(200).json({
						msg: 'Pull annonce',
						status: 200,
						data: annonce,
					});
				}
			}
		);
	},
};
