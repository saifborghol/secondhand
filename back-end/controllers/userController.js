const userModel = require('../models/userModel');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const randtoken = require('rand-token');
const bcrypt = require('bcrypt');
const refreshTokens = [];
const _ = require('lodash');

module.exports = {
	createUser: function (req, res) {
		const newUser = {
			name: req.body.name,
			surName: req.body.surName,
			email: req.body.email,
			password: req.body.password,
		};
		console.log('nneww', newUser);
		userModel.create(newUser, function (err, user) {
			if (err)
				res.json({
					message: err,
					statut: 500,
				});
			else
				res.json({
					message: 'User created!',
					statut: 200,
					data: user,
				});
		});
	},

	deleteUser: function (req, res) {
		userModel.findByIdAndRemove({ _id: req.params.id }, (err, user) => {
			if (err) {
				res.status(500),
					json({
						msg: 'erreur',
						status: 500,
						data: null,
					});
			} else {
				res.status(200).json({
					msg: 'User deleted!',
					status: 200,
					data: user,
				});
			}
		});
	},

	deleteAll: function (req, res) {
		userModel.remove(function (err, user) {
			if (err) {
				res.status(500),
					json({
						msg: 'erreur',
						status: 500,
						data: null,
					});
			} else {
				res.status(200).json({
					msg: 'All users deleted!',
					status: 200,
					data: user,
				});
			}
		});
	},

	verifierExistanceNumTelUser: function (req, res) {
		try {
			userModel.findOne({ tel: req.body.tel }).then((user) => {
				if (!user) {
					res.json({
						message: "ce numéro n'existe pas encore",
						statut: 500,
						data: user,
					});
				} else {
					res.json({
						message: 'ce numéro existe déja',
						statut: 200,
						data: user,
					});
				}
			});
		} catch (error) {
			console.log('il y avait un error');
		}
	},

	updateUser: function (req, res) {
		userModel
			.findByIdAndUpdate(
				{ _id: req.params.id },
				// {runValidators: true, upsert: true, setDefaultsOnInsert: true, new: true},
				req.body
			)
			.exec(function (err, users) {
				if (err) {
					res.json({
						msg: 'erreur' + err,
						status: 500,
						data: null,
					});
				} else {
					res.status(200).json({
						msg: 'User updated!',
						status: 200,
						data: users,
					});
				}
			});
	},

	updateUserPass: async function (req, res) {
		const saltRounds = 10;
		const _id = req.params.id;
		const oldpassword = req.body.oldpassword;
		const newpassword = bcrypt.hashSync(req.body.newpassword, saltRounds);
		const user = await userModel.findById(_id);
		if (!user) {
			res.json({ message: 'id not correct', status: 500 });
		} else {
			if (bcrypt.compareSync(oldpassword, user.password)) {
				const updateUser = {
					password: newpassword,
				};
				await userModel.findByIdAndUpdate(_id, updateUser);
				res.json({
					statut: 200,
					message: 'password changed ! ',
				});
			} else {
				res.json({
					statut: 500,
					message: 'current password is not correct !',
				});
			}
		}
	},

	updateUserImage: function (req, res) {
		const newUser = {
			image: req.file.filename,
		};
		userModel
			.findByIdAndUpdate({ _id: req.params.id }, newUser)
			.exec(function (err, users) {
				if (err) {
					res.status(500),
						json({
							msg: 'erreur',
							status: 500,
							data: null,
						});
				} else {
					res.status(200).json({
						msg: 'User updated!',
						status: 200,
						data: users,
					});
				}
			});
	},

	getUser: function (req, res) {
		userModel
			.findById({ _id: req.params.id })
			.populate('annonce')
			.populate({
				path: 'order',
				populate: { path: 'annonces' }
			 })
			.exec(function (err, users) {
				if (err) {
					res.status(500).json({
						msg: 'erreur',
						status: 500,
						data: null,
					});
				} else {
					res.status(200).json({
						msg: 'Get user',
						status: 200,
						data: users,
					});
				}
			});
	},

	getAllUsers: function (req, res) {
		userModel
			.find({})
			.populate('annonce')
			.populate({
				path: 'order',
				populate: { path: 'annonces' }
			 })
			.exec(function (err, users) {
				if (err) {
					res.status(500),
						json({
							msg: 'erreur',
							status: 500,
							data: null,
						});
				} else {
					res.status(200).json({
						msg: 'Get all users',
						status: 200,
						data: users,
					});
				}
			});
	},

	sendMailUser: function (req, res) {
		var data = {
			from: req.body.from,
			to: req.body.to,
			subject: req.body.subject,
			text: req.body.text,
		};
		var transporter = nodemailer.createTransport({
			service: 'outlook',
			auth: {
				user: 'azizmdk@outlook.com',
				pass: 'pass',
			},
		});
		transporter.sendMail(data, function (error, info) {
			if (error) {
				console.log(error);
				return res.json({ err: 'error in email' });
			} else {
				return res.json({
					status: 'Success',
					message: 'email has been send',
				});
			}
		});
	},

	authentificateUser: function (req, res, next) {
		userModel
			.findOne({
				email: req.body.email,
			})
			.exec(function (err, userInfo) {
				if (err) {
					next(err);
				} else {
					if (userInfo != null) {
						if (bcrypt.compareSync(req.body.password, userInfo.password)) {
							const token = jwt.sign(
								{
									id: userInfo._id,
								},
								req.app.get('secretKey'),
								{ expiresIn: '60m' }
							);

							var refreshToken = randtoken.uid(256);

							refreshTokens[refreshToken] = userInfo._id;

							res.json({
								status: 'Success',
								message: 'User found!',
								data: {
									user: userInfo,
									token: token,
									refreshtoken: refreshToken,
								},
							});
						} else {
							res.json({
								status: 401,
								message: 'Invalid password!',
								data: null,
							});
						}
					} else {
						res.json({ status: 401, message: 'Invalid email!', data: null });
					}
				}
			});
	},

	logoutUser: function logout(req, res, next) {
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

	forgotPassword: function (req, res) {
		const Email = req.body.email;
		userModel.findOne({ email: Email }, (err, user) => {
			if (err || !user) {
				return res.json({
					status: 'Email error',
					error: 'Email does not exist',
				});
			}
			const token = jwt.sign({ _id: user._id }, req.app.get('secretKey'), {
				expiresIn: '20min',
			});
			console.log(token);
			var data = {
				from: 'azizmdk@outlook.com',
				to: Email,
				subject: 'Reset Password',
				text: `http://localhost:3000/reset-password/${token}`,
				// text:  voila = {token}
			};
			return userModel.findOneAndUpdate(
				{ email: Email },
				{ resetLink: token },
				(err, info) => {
					var transporter4 = nodemailer.createTransport({
						service: 'outlook',
						auth: {
							user: 'azizmdk@outlook.com',
							pass: 'pass',
						},
					});
					transporter4.sendMail(data, function (error, info) {
						if (error) {
							console.log(error);
							return res.json({ err: 'Error in email' });
						} else {
							return res.json({
								status: 'Success',
								message: 'Email has been send',
							});
						}
					});
				}
			);
		});
	},

	resetPassword: function (req, res) {
		resetLink = req.body.resetLink;
		newPass = req.body.newPass;
		if (resetLink) {
			jwt.verify(
				resetLink,
				req.app.get('secretKey'),
				function (err, decodeData) {
					if (err) {
						return res.json({
							message: 'invalid token',
							error: 'Incorrect token or it is expired',
						});
					}
					userModel.findOne({ resetLink: resetLink }, (err, user) => {
						if (err || !user) {
							return res.json({
								message: 'invalid token',
								error: 'User with this token does not exist',
							});
						}
						const obj = {
							password: newPass,
						};
						user = _.extend(user, obj);
						user.save((err, result) => {
							if (err) {
								return res.status(400).json({
									error: 'Reset password error',
								});
							} else {
								return res.status(200).json({
									status: 'Success',
									message: 'Password has been changed!',
								});
							}
						});
					});
				}
			);
		} else {
			return res.status(401).json({
				error: 'Authentification error',
			});
		}
	},

	getImageUser: function (req, res) {
		image = req.params.image;
		res.sendFile(__dirname + '/imagesUploads/' + image);
	},

	refreshToken: function (req, res) {
		var id = req.body._id;
		var refreshToken = req.body.refreshToken;
		console.log('refresh', refreshToken in refreshTokens);
		if (refreshToken in refreshTokens && refreshTokens[refreshToken] == id) {
			var user = { id: id };
			var token = jwt.sign(user, req.app.get('secretKey'), {
				expiresIn: '15m',
			});
			res.json({
				accesstoken: token,
			});
		} else {
			res.sendStatus(401);
		}
	},

	pushAnnonce: function (req, res) {
		userModel.updateOne(
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
		userModel.updateOne(
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

	pushOrder: function (req, res) {
		userModel.updateOne(
			{ _id: req.params.id },
			{ $push: { order: req.body.order } },
			function (err, order) {
				if (err) {
					res.status(500),
						json({
							msg: 'erreur',
							status: 500,
							data: null,
						});
				} else {
					res.status(200).json({
						msg: 'Push order',
						status: 200,
						data: order,
					});
				}
			}
		);
	},
};
