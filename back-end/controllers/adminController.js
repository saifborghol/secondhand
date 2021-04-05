const adminModel = require('../models/adminModel');
const jwt = require('jsonwebtoken');
const randtoken = require('rand-token');
const bcrypt = require('bcrypt');
const refreshTokens = [];
const _ = require('lodash');

module.exports = {
	createAdmin: function (req, res) {
		const newAdmin = {
			username: req.body.username,
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

	authentificateAdmin: function (req, res, next) {
		adminModel.findOne(
			{ username: req.body.username },
			function (err, userInfo) {
				if (err || !userInfo) {
					next(err);
				} else {
					if (bcrypt.compareSync(req.body.password, userInfo.password)) {
						const token = jwt.sign(
							{
								id: userInfo._id,
							},
							req.app.get('secretKey'),
							{ expiresIn: '1m' }
						);
						var refreshToken = randtoken.uid(256);
						refreshTokens[refreshToken] = userInfo._id;
						res.json({
							status: 'Success',
							message: 'Admin found!',
							data: {
								user: userInfo,
								token: token,
								refreshtoken: refreshToken,
							},
						});
					} else {
						res.json({
							status: 'Error',
							message: 'Invalid email/password!',
							data: null,
						});
					}
				}
			}
		);
	},

	logoutAdmin: function logout(req, res, next) {
		var refreshToken = req.body.refreshToken;
		console.log('refreshTokens : ', refreshTokens);
		if (refreshToken in refreshTokens) {
			delete refreshTokens[refreshToken];
			console.log('refreshTokens : ', refreshTokens);
			res.json({
				status: 'success',
				message: 'Logout with success refreshtoken: ',
				data: refreshToken,
			});
		} else {
			res.json({
				status: 'error',
				message: 'Logout Failed ',
				data: null,
			});
		}
	},

	refreshToken: function (req, res) {
		var id = req.body.id;
		var refreshToken = req.body.refreshToken;
		console.log('refresh', refreshToken in refreshTokens);
		if (refreshToken in refreshTokens && refreshTokens[refreshToken] == id) {
			var user = { id: id };
			var token = jwt.sign(user, req.app.get('secretKey'), {
				expiresIn: '1m',
			});
			res.json({
				accesstoken: token,
			});
		} else {
			res.sendStatus(401);
		}
	},
};
