const adminModel = require('../models/adminModel');
const bcrypt = require('bcrypt');

module.exports = {
	createAdmin: function (req, res) {
		const newAdmin = {
			userName: req.body.userName,
			password: req.body.password,
		};
		adminModel.create(newAdmin, function (err, admin) {
			if (err)
				res.json({
					message: err,
					statut: 500,
				});
			else
				res.json({
					message: 'Admin created!',
					statut: 200,
					data: admin,
				});
		});
	},
};
